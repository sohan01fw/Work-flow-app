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

//To create task model in database
export async function taskFrameModel({ userId }: { userId: string }) {
  const findUser = await userTasks.findOne({ userId: userId }).exec();
  if (!findUser) {
    await userTasks.create({
      userId: userId,
      tasks: [
        {
          selectOpt: "Planning",
          texts: [],
        },
        {
          selectOpt: "In Progress",
          texts: [],
        },
        {
          selectOpt: "Completed",
          texts: [],
        },
      ],
    });
  }
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

    if (findUser) {
      const checkSelectOpt = findUser.tasks.find(
        (task: any) => task.selectOpt === selectOpt
      );

      try {
        if (!checkSelectOpt) {
          await userTasks.findByIdAndUpdate(
            { _id: findUser._id },
            {
              $push: {
                tasks: { selectOpt: selectOpt, texts: { text: text } },
              },
            },
            { upsert: true, new: true }
          );
        }

        if (checkSelectOpt) {
          const existingTask = findUser.tasks.find(
            (task: any) => task.selectOpt === selectOpt
          );

          // Add the new text to the `texts` array for the existing task.
          existingTask.texts.push({ text });

          // Update the userTasks document with the updated task.
          await userTasks.findByIdAndUpdate(
            findUser._id,
            {
              $set: {
                tasks: findUser.tasks,
              },
            },
            { upsert: true, new: true }
          );
        }

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
  /* await ConnectToDB(); */
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
