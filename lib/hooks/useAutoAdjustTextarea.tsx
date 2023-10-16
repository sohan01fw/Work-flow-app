"use client";
import React, { useEffect, useRef, useState } from "react";

const useAutoAdjustTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setvalue] = useState<string>("");
  useEffect(() => {
    const textarea = textareaRef?.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setvalue(e.target.value);
  };
  return { textareaRef, handleChange, value };
};

export default useAutoAdjustTextarea;
