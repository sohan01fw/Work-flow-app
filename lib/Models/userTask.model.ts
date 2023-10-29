import mongoose from "mongoose";

const userTaskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    tasks: [
      {
        selectOpt: {
          type: String,
          required: true,
        },
        texts: [
          {
            text: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const userTasks =
  mongoose.models.UserTask || mongoose.model("UserTask", userTaskSchema);

export default userTasks;
