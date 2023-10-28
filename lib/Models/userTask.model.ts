import mongoose from "mongoose";

const userTaskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    tasks: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
        text: String,
        selectOpt: {
          type: String,
          required: true,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

const userTasks =
  mongoose.models.UserTask || mongoose.model("UserTask", userTaskSchema);

export default userTasks;
