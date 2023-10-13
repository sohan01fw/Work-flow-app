"use client";
import { useAppSelector } from "@/utils/Redux_Store/hooks";

export default function Home() {
  const count = useAppSelector((state) => state?.colorname?.value);
  console.log(count);
  return (
    <main className="m-5">
      <span className="text-gray-400 text-sm  ">Hello Sohan,</span>
      <h2 className="font-semibold text-2xl text-skin-base">
        You've got 8 tasks today
      </h2>
    </main>
  );
}
