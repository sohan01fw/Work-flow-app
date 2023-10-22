"use client";
import { createUserNote } from "@/lib/Actions/userNote.action";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";

const CreateUserNote = () => {
  const [userNote, setUserNote] = useState({
    userId: "se",
    title: "hoem",
    text: "sssssssssssskeke",
  });

  const handleCreateUserNote = async () => {
    await createUserNote(userNote);
  };

  return (
    <>
      <div className="w-full grid grid-cols-12 gap-4">
        <Textarea
          key="underlined"
          variant="underlined"
          label="Title"
          minRows={2}
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          value={userNote.title}
          onChange={(e) => setUserNote({ ...userNote, title: e.target.value })}
        />
      </div>

      <div className="w-full grid grid-cols-12 gap-4">
        <Textarea
          key="bordered"
          variant="bordered"
          label="Description"
          minRows={8}
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 font-bold "
          value={userNote.text}
          onChange={(e) => setUserNote({ ...userNote, text: e.target.value })}
        />
      </div>

      <button onClick={handleCreateUserNote}>Create User Note</button>
    </>
  );
};

export default CreateUserNote;
