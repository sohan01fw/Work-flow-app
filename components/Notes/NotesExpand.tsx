"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CreateUserNote from "./TakeNote";
import { AnchorIcon } from "lucide-react";

export default function NotesExpand() {
  return (
    <Accordion>
      <AccordionItem
        key="1"
        indicator={<AnchorIcon />}
        aria-label="Take a note"
        title="Take a note"
      >
        <CreateUserNote />
      </AccordionItem>
    </Accordion>
  );
}
