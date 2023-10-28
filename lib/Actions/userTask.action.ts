"use server";
import { revalidatePath } from "next/cache";
import userTasks from "../Models/userTask.model";
import { ConnectToDB } from "../mongodbConn";

interface usertaskDetails {
  userId: string;
  text: string;
  selectOpt: string;
  path: string;
}
export async function userTask({
  userId,
  text,
  selectOpt,
  path,
}: usertaskDetails) {
  await ConnectToDB();

  try {
    const findUser = await userTasks.findOne({ userId: userId }).exec();
    if (!findUser) {
      await userTasks.create({
        userId: userId,
      });
    }
    if (findUser) {
      try {
        await userTasks.findByIdAndUpdate(
          { _id: findUser._id },
          { $push: { Tasks: { text: text, selectOpt: selectOpt } } },
          { upsert: true, new: true }
        );

        revalidatePath(path);
      } catch (error: any) {
        throw new Error("failed to update the userTasks", error.message);
      }
    }
    if (path === "/task") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error("cannot create the task", error.message);
  }
}

export async function getUserTasks({ userId }) {
  try {
    const getTask = await userTasks.findOne({ userId: userId }).exec();

    const { Tasks } = getTask;

    revalidatePath("/task");
    return Tasks;
  } catch (error: any) {
    throw new Error("Error while find user notes", error.message);
  }
}
