"use client";
import { getColor } from "@/utils/Redux_Counter/colorSlice";
import { useAppDispatch } from "@/utils/Redux_Store/hooks";
import React from "react";

const colorData = [
  {
    colorId: "#138086",
    color: "bg-cyan-500",
  },
  { colorId: "#17c964", color: "bg-green-500" },
  { colorId: "#f5a524", color: "bg-yellow-500" },
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
