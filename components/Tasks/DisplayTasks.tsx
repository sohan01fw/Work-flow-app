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
    <div className="flex gap-4 justify-between my-10 mx-4  ">
      <Droppable key={index} droppableId={`droppable${index}`}>
        {(provided) => (
          <div
            className="p-5 lg:w-1/3 w-full bg-white  border-gray-400 shadow-md border "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2 className="text-center text-lg font-bold mb-6 text-black">
              {title}
            </h2>
            {texts?.map((component: any, index: any) => (
              <Draggable
                key={component.id}
                draggableId={component.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    className="bg-gray-200 mx-1 px-4 py-3 my-3"
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
