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
    <div className="flex flex-col md:flex-row gap-2 m-2 ">
      {colorData.map((item) => {
        return (
          <div
            key={item.colorId}
            className={`h-10 w-10 rounded-full cursor-pointer ${item.color} shadow-md`}
            onClick={() => {
              dispatch(getColor(item.colorId));
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorThemes;
