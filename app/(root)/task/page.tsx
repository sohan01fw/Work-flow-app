import CreateTask from "@/components/Tasks/CreateTask";
import TaskBoard from "@/components/Tasks/TaskBoard";
import InputDiv from "@/lib/ui/InputDiv";
import React from "react";

const page = async () => {
  return (
    <div className="relative  border md:ml-[4rem] ">
      <div className="headerDesc flex  border">
        <div className="titlenpoint">
          <div className="title text-[20px] md:text-[30px] font-bold whitespace-nowrap">
            Sohan's Tasks Lists
          </div>
          <span>(Total 10)</span>
        </div>

        <div className="createtaskbtn grid place-items-center absolute right-0 my-1 mx-1">
          <CreateTask />
        </div>
      </div>
      <div className="taskboard">
        <TaskBoard />
      </div>
    </div>
  );
};

export default page;
