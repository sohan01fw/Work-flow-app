"use client";
import React from "react";

import Link from "next/link";
import { tabs } from "@/lib/data/Tabs";
import { usePathname } from "next/navigation";

export default function PageNavBar() {
  const pathname = usePathname();
  return (
    <div className="flex shadow-md rounded-lg bg-gray-100 p-2 dark:bg-gray-800 ">
      {tabs.map((item) => {
        const isActive =
          pathname === item?.route ||
          (pathname.includes(item.route) && item.route.length > 1); //means the route/pathname shouldn't be empty;

        return (
          <Link
            key={item.id}
            href={item.route}
            className={`flex p-1 md:p-2 ${
              isActive
                ? "bg-white dark:bg-gray-600 hover:opacity-100 shadow-md rounded-lg  transition-all transform duration-300 ease-in-out"
                : ""
            }`}
          >
            <div className="flex  md:gap-2 pl-3 pr-2">
              <div
                className={`${
                  isActive ? "hover:opacity-100" : "hover:opacity-50 "
                }`}
              >
                {item.logo}
              </div>
              <div className="max-lg:hidden label whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
