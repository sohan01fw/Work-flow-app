import CreateTask from "@/components/Tasks/CreateTask";
import TaskBoard from "@/components/Tasks/TaskBoard";
import React from "react";

const page = async () => {
  return (
    <div className="whitespace-nowrap border ">
      <CreateTask />
      <TaskBoard />
    </div>
  );
};

export default page;
