import mongoose from "mongoose";

const userNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    notes: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
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
