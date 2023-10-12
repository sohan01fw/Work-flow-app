"use client";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import { Workflow } from "lucide-react";
import { Avatar } from "@nextui-org/react";
export default function Home() {
  return (
    <main className="m-2">
      <ThemeSwitcher />
      <div className="div_conten flex justify-between">
        <div className="icon bg-red-500 shadow-md dark:backdrop-blur-md dark:bg-red-500 p-2 rounded-md max-h-10  ">
          <Workflow />
        </div>
        <div className="profile flex justify-center gap-2 ">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            size="md"
          />
          <h3 className="text-center  font-bold text-sm flex flex-col  pt-1">
            Sohan cwact
            <span className="text-gray-400 text-[12px] font-semibold mt-[-4px]">
              web developer
            </span>
          </h3>
        </div>
      </div>
      <span className="text-gray-400 text-sm"> Hello Sohan,</span>
      <h2 className="font-semibold text-2xl">You've got 8 tasks today</h2>
    </main>
  );
}
