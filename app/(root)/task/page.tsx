import CreateTask from "@/components/Tasks/CreateTask";
import DisplayTasks from "@/components/Tasks/DisplayTasks";
import TaskBoard from "@/components/Tasks/TaskBoard";
import { getUserTasks } from "@/lib/Actions/userTask.action";
import React from "react";

type taskBoardData = {
  _id: string;
  selectOpt: string;
  texts: Array<{
    _id: string;
    text: string;
  }>;
};

const page = async () => {
  const resData = await getUserTasks({ userId: "se" });

  return (
    <div className="whitespace-nowrap border ">
      <CreateTask />
      {resData?.map((data: taskBoardData) => {
        const textsId = JSON.stringify(
          data.texts.map((datas: any) => {
            return { id: datas._id, text: datas.text };
          })
        );

        // Convert the texts object to a simple value.
        const texts = JSON.parse(textsId);

        return (
          <TaskBoard
            key={data._id}
            id={JSON.parse(JSON.stringify(data._id))}
            title={data.selectOpt}
            texts={texts}
          />
        );
      })}
    </div>
  );
};

export default page;
