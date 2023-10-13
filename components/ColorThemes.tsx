"use client";
import { useAppDispatch, useAppSelector } from "@/utils/Redux_Store/hooks";
import React, { useState } from "react";

export const ThemeBtn = ({ state }: any) => {
  console.log(state("sh"));
  return (
    <>
      <ColorBtn bg="bg-indigo-500" />
      <ColorBtn bg="bg-green-500" />
      <ColorBtn bg="bg-orange-500" />
    </>
  );
};

const ColorBtn = (props: any) => {
  return (
    <div>
      <div className={`h-10 w-10 rounded-full ${props.bg} shadow-md`}></div>
    </div>
  );
};
const ColorThemes = () => {
  const count = useAppSelector((state) => state?.colorname?.value);
  const dispatch = useAppDispatch();
  const [ThemeColor, setThemeColor] = useState("");
  console.log(ThemeColor);
  return (
    <>
      <ThemeBtn state={setThemeColor} />
    </>
  );
};

export default ColorThemes;
