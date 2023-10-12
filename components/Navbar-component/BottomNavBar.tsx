"use client";
import React from "react";
import { Tabs, Tab, Tooltip } from "@nextui-org/react";
import { AlarmClock, KanbanSquare, Layers, Settings2 } from "lucide-react";

export default function BottomNavBar() {
  let tabs = [
    {
      id: "overview",
      label: "Overview",
      logo: <Layers />,
    },
    {
      id: "alarm",
      label: "Focus session",
      logo: <AlarmClock />,
    },
    {
      id: "task",
      label: "Task Manager",
      logo: <KanbanSquare />,
    },
    {
      id: "setting",
      label: "Settings",
      logo: <Settings2 />,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center space-x-2">
                {item.logo}
                <span className="max-sm:hidden">{item.label}</span>
              </div>
            }
            className="font-bold"
          ></Tab>
        )}
      </Tabs>
    </div>
  );
}
