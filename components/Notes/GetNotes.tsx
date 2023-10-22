import { getUserNotes } from "@/lib/Actions/userNote.action";
import { useEffect } from "react";

type notesAtt = {
  title: string;
  text: string;
};
const GetNotes = async ({ title, text }: notesAtt) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default GetNotes;
