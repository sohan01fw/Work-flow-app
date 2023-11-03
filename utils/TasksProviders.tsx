"use client";
import { ReactNode } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const TasksProviders = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DragDropContext onDragEnd={() => {}}>{children}</DragDropContext>
    </div>
  );
};

export default TasksProviders;
