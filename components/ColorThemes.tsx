"use client";
import { getColor } from "@/utils/Redux_Counter/colorSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux_Store/hooks";
import React, { useState } from "react";

/* export const ThemeBtn = ({ state }: any) => {
  console.log(state("sh"));
  return (
    <>
      <ColorBtn bg="bg-indigo-500" />
      <ColorBtn bg="bg-green-500" />
      <ColorBtn bg="bg-orange-500" />
    </>
  );
}; */

/* const ColorBtn = (props: any) => {
  return (
    <div>
      <div className={`h-10 w-10 rounded-full ${props.bg} shadow-md`}></div>
    </div>
  );
}; */

const colorData = [
  {
    colorId: "indigo",
    color: "bg-cyan-500",
  },
  { colorId: "green", color: "bg-green-500" },
  { colorId: "orange", color: "bg-orange-500" },
];
const ColorThemes = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      {colorData.map((item) => {
        return (
          <div
            key={item.colorId}
            className={`h-10 w-10 rounded-full ${item.color} shadow-md`}
            onClick={() => {
              dispatch(getColor(item.colorId));
            }}
          ></div>
        );
      })}
    </>
  );
};

export default ColorThemes;
