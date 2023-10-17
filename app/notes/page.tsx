import TakeNote from "@/components/Notes/TakeNote";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="title">
        <h2 className="text-[40px]">📒</h2>

        <h1 className="font-bold text-[35px] whitespace-nowrap ">
          Take a Note
        </h1>
      </div>
      <TakeNote />
    </div>
  );
};

export default page;
