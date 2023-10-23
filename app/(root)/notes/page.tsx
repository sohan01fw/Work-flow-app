import GetNotes from "@/components/Notes/GetNotes";
import TakeNote from "@/components/Notes/TakeNote";
import { getUserNotes } from "@/lib/Actions/userNote.action";

type notesData = {
  title: string;
  text: string;
  _id: string;
};
const page = async () => {
  const resNote = await getUserNotes({ userId: "se" });

  return (
    <div>
      <div className="title">
        <h2 className="text-[40px]">📒</h2>

        <h1 className="font-bold text-[35px] whitespace-nowrap ">
          Take a Note
        </h1>
      </div>
      <TakeNote />
      {resNote.map((data: notesData) => {
        return <GetNotes key={data._id} title={data.title} text={data.text} />;
      })}
    </div>
  );
};

export default page;
