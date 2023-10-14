"use client";
import React from "react";

import Link from "next/link";
import { tabs } from "@/lib/data/Tabs";
import { usePathname } from "next/navigation";

export default function PageNavBar() {
  const pathname = usePathname();
  return (
    <div className="flex shadow-md rounded-lg bg-gray-200 p-2 ">
      {tabs.map((item) => {
        const isActive =
          pathname === item?.route ||
          (pathname.includes(item.route) && item.route.length > 1); //means the route/pathname shouldn't be empty;

        return (
          <Link
            key={item.id}
            href={item.route}
            className={`flex p-1 ${
              isActive
                ? "bg-white rounded-lg transition-all transform duration-300 ease-in-out"
                : ""
            }`}
          >
            <div className="hover:opacity-50 flex gap-2  pl-5 pr-5">
              <div className="logo ">{item.logo}</div>
              <div className="max-md:hidden label whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
