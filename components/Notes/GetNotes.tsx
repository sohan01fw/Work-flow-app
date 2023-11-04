import { getUserNotes } from "@/lib/Actions/userNote.action";
import { useEffect } from "react";

type notesAtt = {
  title: string;
  text: string;
};
const GetNotes = async ({ title, text }: notesAtt) => {
  return (
    <div className="shadow-md gap-4 mx-3 p-2 rounded-md w-48 h-40">
      <h1 className="font-semibold">{title}</h1>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default GetNotes;
