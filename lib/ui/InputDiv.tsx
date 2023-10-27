import React from "react";
import { Input } from "@nextui-org/react";

export default function InputDiv() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input variant="underlined" label="write your task..." />
      </div>
    </div>
  );
}
