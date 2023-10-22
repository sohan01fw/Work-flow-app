"use server";
import { ConnectToDB } from "../mongodbConn";
import userNotes from "../Models/userNote.model";

type userNotes = {
  userId: string;
  title: string;
  text: string;
};

export async function createUserNote({ userId, title, text }: userNotes) {
  await ConnectToDB();

  try {
    const findUserNotes = await userNotes.findOne({ userId: userId });
    console.log(findUserNotes);
    if (!findUserNotes) {
      await userNotes.create({
        userId: userId,
        notes: {
          title: title,
          text: text,
        },
      });
    }
    if (findUserNotes) {
      try {
        const createNotes = await userNotes
          .findByIdAndUpdate(
            { _id: findUserNotes._id },
            { $push: { notes: { title: title, text: text } } },
            { upsert: true, new: true }
          )
          .exec();
      } catch (error: any) {
        throw new Error("error updating user notes", error.message);
      }
    }
  } catch (error: any) {
    console.log(error);
    throw new Error("Error while creating user note", error.message);
  }
}
