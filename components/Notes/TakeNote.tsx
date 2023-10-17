"use client";
import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
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
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 "
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
        />
      </div>
    </>
  );
}
