"use client";
import React, { useState } from "react";
import { Tabs, Tab, Tooltip } from "@nextui-org/react";
import { AlarmClock, KanbanSquare, Layers, Settings2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageNavBar() {
  const router = useRouter();
  const [datavalue, setdatavalue] = useState("");
  const handleTabChange = (id: any) => {
    router.push(id);
  };
  let tabs = [
    {
      id: "overview",
      label: "Overview",
      logo: <Layers />,
      route: "/",
    },
    {
      id: "alarm",
      label: "Focus session",
      logo: <AlarmClock />,
      route: "/focus-session",
    },
    {
      id: "task",
      label: "Task Manager",
      logo: <KanbanSquare />,
      route: "/task",
    },
    {
      id: "setting",
      label: "Settings",
      logo: <Settings2 />,
      route: "/setting",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab
            key={item.id}
            title={
              <Link href={`${item.route}`}>
                <div className="flex items-center space-x-2 ">
                  {item.logo}
                  <span className="max-sm:hidden">{item.label}</span>
                </div>
              </Link>
            }
            className="font-bold"
          ></Tab>
        )}
      </Tabs>
    </div>
  );
}
