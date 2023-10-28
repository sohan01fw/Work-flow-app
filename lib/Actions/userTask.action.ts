import userTasks from "../Models/userTask.model";
import { ConnectToDB } from "../mongodbConn";

interface usertaskDetails {
  userId: string;
  text: string;
  selectOpt: string;
}
export async function userTask({ userId, text, selectOpt }: usertaskDetails) {
  await ConnectToDB();

  try {
    const findUser = await userTasks.findOne({ userId: userId });
    if (!findUser) {
      await userTasks.create({
        userId: userId,
        Tasks: [
          {
            text: text,
            selectOpt: selectOpt,
          },
        ],
      });
    }
    if (findUser) {
      try {
        const updateUserTask = await userTasks.findByIdAndUpdate(
          { _id: findUser._id },
          { $push: { Tasks: { text: text, selectOpt: selectOpt } } },
          { upsert: true, new: true }
        );
      } catch (error: any) {
        throw new Error("failed to update the userTasks", error.message);
      }
    }
  } catch (error: any) {
    throw new Error("cannot create the task", error.message);
  }
}
