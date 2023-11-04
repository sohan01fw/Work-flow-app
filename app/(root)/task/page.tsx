import CreateTask from "@/components/Tasks/CreateTask";
import TaskBoard from "@/components/Tasks/TaskBoard";
import InputDiv from "@/lib/ui/InputDiv";
import React from "react";

const page = async () => {
  return (
    <div className="relative md:ml-[4rem] ">
      <div className="headerDesc flex  ">
        <div className="titlenpoint mb-7 md:mb-10">
          <div className="title text-[20px] md:text-[35px] font-bold whitespace-nowrap">
            Sohan's Tasks Lists
          </div>
        </div>

        <div className="createtaskbtn grid place-items-center absolute right-0 my-1 mx-1 ">
          <CreateTask />
        </div>
      </div>
      <div className="taskboard ">
        <TaskBoard />
      </div>
    </div>
  );
};

export default page;
