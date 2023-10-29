import CreateTask from "@/components/Tasks/CreateTask";
import DisplayTasks from "@/components/Tasks/DisplayTasks";
import TaskBoard from "@/components/Tasks/TaskBoard";
import { getUserTasks } from "@/lib/Actions/userTask.action";
import React from "react";

const page = async () => {
  const resData = await getUserTasks({ userId: "se" });
  console.log(resData);
  return (
    <div className="whitespace-nowrap w-full max-h-[32rem] ">
      <CreateTask />
      <TaskBoard />
      {/*  {resData.map((data: any) => {
        return <DisplayTasks key={data._id} text={data.text} />;
      })} */}
    </div>
  );
};

export default page;
