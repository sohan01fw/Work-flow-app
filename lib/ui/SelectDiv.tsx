import React, { useState } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/utils/Redux_Store/hooks";
import { TaskValues, onSelectHandler } from "@/utils/Redux_Slice/taskSlice";

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
  const [value, setValue] = useState<Selection>(new Set([]));
  const SelectValue = useAppSelector(TaskValues);

  const dispatch = useAppDispatch();
  dispatch(onSelectHandler(Object.values(value)[0]));

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="select task option"
        className="max-w-xs"
        onSelectionChange={setValue}
        selectedKeys={value}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <p>omg:{SelectValue.selectValue}</p>
    </div>
  );
}
