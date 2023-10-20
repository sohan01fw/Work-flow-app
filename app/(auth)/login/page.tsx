import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import("@/utils/HankoConfig/Hanko"), {
  ssr: false,
});

export default function page() {
  return (
    <div className="border grid justify-center h-screen">
      <HankoAuth />
    </div>
  );
}
