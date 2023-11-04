import DisplayTasks from "@/components/Tasks/DisplayTasks";
import { getUserTasks, taskFrameModel } from "@/lib/Actions/userTask.action";
import TasksProviders from "@/utils/TasksProviders";
import React from "react";

type taskBoardData = {
  _id: string;
  selectOpt: string;
  texts: Array<{
    _id: string;
    text: string;
  }>;
};

const TaskBoard = async () => {
  await taskFrameModel({ userId: "aa" });
  const resData = await getUserTasks({ userId: "aa" });

  return (
    <TasksProviders>
      <div className="flex ">
        {resData?.map((data: taskBoardData, index: any) => {
          const textsId = JSON.stringify(
            data.texts.map((datas: any) => {
              return { id: datas._id, text: datas.text };
            })
          );

          // Convert the texts object to a simple value.
          const texts = JSON.parse(textsId);

          return (
            <DisplayTasks
              key={data._id}
              id={JSON.parse(JSON.stringify(data._id))}
              index={index}
              title={data.selectOpt}
              texts={texts}
            />
          );
        })}
      </div>
    </TasksProviders>
  );
};

export default TaskBoard;
