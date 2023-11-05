"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CreateUserNote from "./TakeNote";
import { AnchorIcon, PlusCircle } from "lucide-react";

export default function NotesExpand() {
  return (
    <Accordion>
      <AccordionItem
        key="1"
        indicator={<PlusCircle />}
        aria-label="Take a note"
        title="Create a Notes..."
        className="shadow-md p-1 px-4 m-2 rounded-xl "
      >
        <CreateUserNote />
      </AccordionItem>
    </Accordion>
  );
}
