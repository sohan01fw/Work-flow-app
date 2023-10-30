"use client";

import { useEffect, useId, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const DndContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);
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
import { cardsData } from "@/lib/data/CardsData";
import dynamic from "next/dynamic";
interface Cards {
  id: string;
  title: string;
  texts: Array<{
    id: string;
    text: string;
  }>;
}
[];

const DndExample = ({ id, title, texts }: any) => {
  const [data, setData] = useState<Cards[] | []>([]);
  const onDragEnd = (result: DropResult) => {
    /*   console.log(result); */
  };
  useEffect(() => {
    setData([{ id, title, texts }]);
  }, []);
  console.log(data);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1 className="text-center font-bold text-[25px]">Manage Your Tasks</h1>
      <div className="flex gap-4 justify-between my-10 mx-4  ">
        {data.map((val: any, index: any) => {
          return (
            <Droppable key={index} droppableId={`droppable${index}`}>
              {(provided) => (
                <div
                  className="p-5 lg:w-1/3 w-full bg-white  border-gray-400 shadow-md border "
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-center text-lg font-bold mb-6 text-black">
                    {val.title}
                  </h2>
                  {val.texts?.map((component: any, index: any) => (
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
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DndExample;
