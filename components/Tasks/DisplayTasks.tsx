"use client";
import dynamic from "next/dynamic";
import { useEffect, useId, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable;
    }),
  { ssr: false }
);

interface Cards {
  id: string;
  index: string;
  title: string;
  texts: Array<{
    id: string;
    text: string;
  }>;
}
[];

const DisplayTasks = ({ id, index, title, texts }: Cards) => {
  return (
    <div className="border w-full ">
      <Droppable key={index} droppableId={`droppable${index}`}>
        {(provided) => (
          <div
            className=" bg-white  border-gray-400  "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2 className=" text-black border">{title}</h2>
            {texts?.map((component: any, index: any) => (
              <Draggable
                key={component.id}
                draggableId={component.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    className="bg-gray-200 border p-3 "
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    {component.text}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DisplayTasks;
