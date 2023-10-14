// app/components/ThemeSwitcher.tsx
"use client";

import { Skeleton, Switch } from "@nextui-org/react";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({ colorTheme }: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [defaultSelected, setDefaultSelected] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const changeIcon = () => {
    if (theme === "dark") {
      setDefaultSelected(false);
      return (
        <Moon className=" text-black rounded-full" strokeWidth={3} size={20} />
      );
    } else {
      setDefaultSelected(true);
      return <Sun className="rounded-full" strokeWidth={3} size={20} />;
    }
  };
  if (!mounted)
    return (
      <Skeleton className="rounded-large ">
        <Switch />
      </Skeleton>
    );
  return (
    <Switch
      isSelected={defaultSelected}
      size="sm"
      color="primary"
      thumbIcon={changeIcon}
      onClick={() => {
        changeTheme();
      }}
    />
  );
}
