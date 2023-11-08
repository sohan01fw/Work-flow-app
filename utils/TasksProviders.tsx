"use client";
import { getUserTasks } from "@/lib/Actions/userTask.action";
import { ReactNode, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TasksProviders = ({ children }: { children: ReactNode }) => {
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
    </div>
  );
};

export default TasksProviders;
