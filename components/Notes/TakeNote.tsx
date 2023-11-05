"use client";
import { createUserNote } from "@/lib/Actions/userNote.action";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

const CreateUserNote = () => {
  const [userNote, setUserNote] = useState({
    userId: "se",
    title: "hoem",
    text: "sssssssssssskeke",
  });

  const handleCreateUserNote = async () => {
    //@ts-ignore
    createUserNote(userNote);
  };

  return (
    <div className="">
      <div className="w-full grid grid-cols-12 gap-1">
        <Textarea
          key="underlined"
          variant="underlined"
          label="Title"
          minRows={1}
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12  mb-6 md:mb-0"
          classNames={{
            label: "text-lg",
          }}
          radius="md"
          value={userNote.title}
          onChange={(e) => setUserNote({ ...userNote, title: e.target.value })}
        />
      </div>

      <div className="w-full grid grid-cols-12 gap-4">
        <Textarea
          key="bordered"
          variant="bordered"
          label="Description"
          minRows={4}
          labelPlacement="outside"
          classNames={{
            label: "text-lg",
          }}
          placeholder="Enter your description"
          className="col-span-12  mb-6 md:mb-0 font-bold "
          value={userNote.text}
          onChange={(e) => setUserNote({ ...userNote, text: e.target.value })}
        />
      </div>

      <Button onClick={handleCreateUserNote}>Create User Note</Button>
    </div>
  );
};

export default CreateUserNote;
