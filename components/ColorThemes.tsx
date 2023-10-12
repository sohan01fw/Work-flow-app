"use client";
import { Avatar, Chip } from "@nextui-org/react";
import React from "react";

export const ThemeBtn = () => {
  return (
    <>
      <ColorBtn bg="bg-skin-fill" />
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
  return (
    <>
      <ThemeBtn />
    </>
  );
};

export default ColorThemes;
