import TaskBoard from "@/components/Tasks/TaskBoard";
import React from "react";

const page = async () => {
  return (
    <div className="whitespace-nowrap w-full   max-h-[32rem] ">
      <TaskBoard />
    </div>
  );
};

export default page;
