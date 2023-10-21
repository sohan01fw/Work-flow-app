import mongoose from "mongoose";

const userNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    notes: [
      {
        title: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const userNotes =
  mongoose.models.UserNote || mongoose.model("UserNote", userNoteSchema);

export default userNotes;
