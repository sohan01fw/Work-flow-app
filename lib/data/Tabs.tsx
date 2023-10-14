import {
  AlarmClock,
  KanbanSquare,
  Layers,
  Settings2,
  StickyNote,
} from "lucide-react";
export const tabs = [
  {
    id: "overview",
    label: "Overview",
    logo: <Layers />,
    route: "/",
  },

  {
    id: "Focus session",
    label: "Focus session",
    logo: <AlarmClock />,
    route: "/focus-session",
  },
  {
    id: "Notes",
    label: "Notes",
    logo: <StickyNote />,
    route: "/notes",
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
