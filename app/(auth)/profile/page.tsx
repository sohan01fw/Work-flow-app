const HankoProfile = dynamic(() => import("@/utils/HankoConfig/HankoProfile"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  return (
    <div>
      <HankoProfile />
    </div>
  );
};

export default page;
