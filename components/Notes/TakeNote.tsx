"use client";
import useAutoAdjustTextarea from "@/lib/hooks/useAutoAdjustTextarea";
import React from "react";

const TakeNote = () => {
  const { value, handleChange, textareaRef } = useAutoAdjustTextarea();

  return (
    <div>
      <textarea
        ref={textareaRef}
        name="note"
        id="note"
        placeholder="Title....."
        className="textarea resize-none  "
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default TakeNote;
