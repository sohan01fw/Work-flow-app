import React from "react";
import { Input } from "@nextui-org/react";
import { InputValue, onChangeHandler } from "@/utils/Redux_Slice/taskSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux_Store/hooks";

export default function InputDiv() {
  const inputTaskValue = useAppSelector(InputValue.inputTaskValue);
  const dispatch = useAppDispatch();
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeHandler(e.target.value));
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          variant="underlined"
          label="write your task..."
          //@ts-ignore
          value={inputTaskValue}
          onChange={onHandleChange}
        />
      </div>
    </div>
  );
}
