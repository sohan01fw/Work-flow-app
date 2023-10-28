"use server";
import { ConnectToDB } from "../mongodbConn";
import userNotes from "../Models/userNote.model";
import { revalidatePath } from "next/cache";

type userNotes = {
  userId: string;
  title: string;
  text: string;
  path: string;
};

//creating and updating user notes
export async function createUserNote({ userId, title, text, path }: userNotes) {
  await ConnectToDB();

  try {
    const findUserNotes = await userNotes.findOne({ userId: userId });
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
        console.log(createNotes);
        if (path) {
          revalidatePath(path);
        }
      } catch (error: any) {
        throw new Error("error updating user notes", error.message);
      }
    }
    revalidatePath("/notes");
  } catch (error: any) {
    console.log(error);
    throw new Error("Error while creating user note", error.message);
  }
}

//getting user created and updated notes from db

export async function getUserNotes({ userId }: { userId: string }) {
  await ConnectToDB();
  try {
    const getNotes = await userNotes.findOne({ userId: userId }).exec();
    const { notes } = getNotes;
    revalidatePath("/notes");
    return notes;
  } catch (error: any) {
    throw new Error("Error while find user notes", error.message);
  }
}
