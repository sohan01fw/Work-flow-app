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
        tasks: [
          {
            selectOpt: selectOpt,
            texts: [{ text: text }],
          },
        ],
      });
    }
    if (findUser) {
      try {
        // Get the existing tasks for the user.
        const existingTasks = findUser.tasks;

        // Check if the `selectOpt` value is already present in the `tasks` array.
        const existingTaskWithSelectOpt = existingTasks.find(
          (task: any) => task.selectOpt === selectOpt
        );

        // If the `selectOpt` value is not already present in the `tasks` array, create a new task.
        if (!existingTaskWithSelectOpt) {
          const newTask = { selectOpt, texts: [{ text }] };
          existingTasks.push(newTask);
        }

        // Check if the `texts` array is already present in the `tasks` array for the `selectOpt` value.
        const existingTextsArray = existingTaskWithSelectOpt?.texts;

        // If the `texts` array is not already present in the `tasks` array for the `selectOpt` value, push the new text to the array.
        if (!existingTextsArray) {
          existingTaskWithSelectOpt.texts = [{ text }];
        } else {
          existingTextsArray.push({ text });
        }

        // Update the userTasks document with the updated tasks array.
        await userTasks.findByIdAndUpdate(
          findUser._id,
          { tasks: existingTasks },
          { upsert: true, new: true }
        );

        // Revalidate the path if necessary.
        if (path === "/task") {
          revalidatePath(path);
        }
      } catch (error: any) {
        throw new Error("failed to update the userTasks", error.message);
      }
    }

    if (path === "/task") {
      revalidatePath(path);
    }
  } catch (error: any) {
    console.log(error);
    throw new Error("cannot create the task", error.message);
  }
}

export async function getUserTasks({ userId }: { userId: string }) {
  await ConnectToDB();
  try {
    const getTask = await userTasks.findOne({ userId: userId }).exec();
    if (getTask) {
      const { tasks } = getTask;
      revalidatePath("/task");
      return tasks;
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error("Error while find user tasks", error.message);
  }
}
