const HankoProfile = dynamic(() => import("@/utils/HankoConfig/HankoProfile"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  return (
    <div className="border flex justify-center h-screen ">
      <div className="hankoprofile absolute pt-[10rem] backdrop-blur-md bg-white/20 p-10">
        <HankoProfile />
      </div>
    </div>
  );
};

export default page;
