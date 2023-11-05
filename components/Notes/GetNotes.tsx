"use client";
import { getUserNotes } from "@/lib/Actions/userNote.action";
import { useEffect } from "react";
import Draggable from "react-draggable";

type notesAtt = {
  title: string;
  text: string;
};
const GetNotes = async ({ title, text }: notesAtt) => {
  return (
    <Draggable>
      <div className="shadow-md gap-1 mx-3 p-2 rounded-md w-56 h-56">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-gray-600">{text}</p>
      </div>
    </Draggable>
  );
};

export default GetNotes;
