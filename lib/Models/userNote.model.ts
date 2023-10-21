import mongoose from "mongoose";

const userNoteSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },

    userId: {
      type: String,
      required: true,
      unique: true,
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

const userNotes = mongoose.model("UserNote", userNoteSchema);

export default userNotes;
