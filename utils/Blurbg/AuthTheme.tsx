import React from "react";

const BlurBgTheme = () => {
  return (
    <div className="bgcircles max-lg:hidden">
      <div
        className="circle bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-[27rem] w-[27rem]
        rounded-full shadow-md absolute -z-40 "
      ></div>
      <div
        className="circle bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-[20rem] w-[20rem]
        rounded-full shadow-md absolute -z-40 right-0 "
      ></div>
      <div
        className="circle bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-[24rem] w-[24rem]
        rounded-full shadow-md absolute m-10 ml-[30rem] -z-40 bottom-0  "
      ></div>
      <div
        className="circle bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-[13rem] w-[13rem]
        rounded-full shadow-md absolute m-10 ml-[70rem] mt-[10rem] -z-40   "
      ></div>
      <div
        className="circle bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-[16rem] w-[16rem]
        rounded-full shadow-md absolute m-10 ml-[80rem] -z-40 mt-[30rem]   "
      ></div>
    </div>
  );
};

export default BlurBgTheme;
