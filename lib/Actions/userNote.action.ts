"use server";
import { ConnectToDB } from "../mongodbConn";
import userNotes from "../Models/userNote.model";

type userNote = {
  title: string;
  text: string;
};

export async function createUserNote({ title, text }: userNote) {
  await ConnectToDB();

  try {
    /* const userNote = await userNotes.create({
      userId: "1234",
      notes: {
        title: title,
        text: text,
      },
    }); */
    const createNotes = await userNotes
      .findById(
        "6533f3235b8def0625cb2ada"
        /* { $push: { notes: { title: title, text: text } } },
      { upsert: true, new: true } */
      )
      .exec();
    console.log(createNotes);
  } catch (error: any) {
    console.log(error);
    throw new Error("Error while saving user note", error.message);
  }
}
