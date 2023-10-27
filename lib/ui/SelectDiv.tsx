import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export const animals = [
  {
    label: "Planning or Queue",
    value: "Planning or Queue",
  },
  {
    label: "In progress",
    value: "In progress",
  },
  {
    label: "completed",
    value: "completed",
  },
];

export default function SelectDiv() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="select task option" className="max-w-xs">
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
