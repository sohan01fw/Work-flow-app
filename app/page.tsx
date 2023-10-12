import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import { Workflow } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <div className="div_content  h-40 w-60 rounded-md shadow-md m-2">
        <div className="icon backdrop-blur-md bg-white/30 w-10 p-2 rounded-md ">
          <Workflow />
        </div>

        <span className="text-gray-400 text-sm"> Hello Sohan,</span>
        <h2 className="font-semibold text-2xl">You've got 8 tasks today</h2>
      </div>
    </main>
  );
}
