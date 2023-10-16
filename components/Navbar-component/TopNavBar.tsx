"use client";
import { useColorThemes } from "@/lib/hooks/useColorThemes";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import { Avatar } from "@nextui-org/react";
import { Bell, Shell } from "lucide-react";
import React from "react";

const TopNavBar = () => {
  const countTheme = useColorThemes();

  return (
    <nav className={`div_conten flex justify-between theme-${countTheme}`}>
      <div
        className="icon bg-skin-fill shadow-md dark:backdrop-blur-md  dark:bg-skin-fill p-2 rounded-md max-h-10  "
        style={{ backgroundColor: `${countTheme}` }}
      >
        <Shell />
      </div>
      <div className="profile flex justify-center gap-2 ">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="md"
        />
        <div className="profile_name max-md:hidden">
          <h3 className="text-center  font-bold text-sm flex flex-col  pt-1">
            Sohan cwact
            <span className="text-gray-400 text-[12px] font-semibold mt-[-4px]">
              web developer
            </span>
          </h3>
        </div>
        <div className="notify flex justify-between  w-20 mr-[-19px] ">
          <Bell className="fill-black mt-2" />
          <ThemeSwitcher colorTheme={countTheme} />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
