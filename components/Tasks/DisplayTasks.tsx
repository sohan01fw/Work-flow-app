"use client";
import dynamic from "next/dynamic";

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
    <div className=" w-full md:w-60 mx-1 md:mx-3 ">
      <Droppable key={index} droppableId={`droppable${index}`}>
        {(provided) => (
          <div
            className="border-gray-400  "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2 className=" text-black dark:text-white font-semibold md:text-[23px] m-2 whitespace-nowrap">
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
                    className=" backdrop-blur-lg bg-white/30 dark:bg-white/20  shadow-md p-3 mx-2 md:my-3 max-md:mb-5  m-3 md:w-48 rounded-xl text-gray-600 font-medium dark:text-gray-300  "
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
