"use client";
import React, { ChangeEvent, useState } from "react";

const TakeNote = () => {
  const [expandArea, setexpandArea] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e) {
      const areaHeight = e.target.scrollHeight + "px";
      setexpandArea(areaHeight);
    }
  };

  return (
    <div>
      <textarea
        name="note"
        id="note"
        placeholder="Title....."
        className={`textarea resize-none `}
        style={{ height: expandArea }}
        onChange={handleChange}
      />
    </div>
  );
};

export default TakeNote;
