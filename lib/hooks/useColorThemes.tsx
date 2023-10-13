"use client";

import { useAppSelector } from "@/utils/Redux_Store/hooks";

export const useColorThemes = () => {
  const theme = useAppSelector((state) => state?.colorname?.value);
  return theme;
};
