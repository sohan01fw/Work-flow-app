import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import("@/utils/HankoConfig/Hanko"), {
  ssr: false,
});

export default function page() {
  return (
    <div className="all flex justify-between  w-full h-screen max-xl:w-full">
      <div className="loginDetails  max-xl:hidden ml-44 w-full  p-10 mt-28  ">
        <h2 className=" font-bold text-[60px] mb-10 w-[30rem]">
          Welcome <p>to Workflow</p>
        </h2>
        <h3 className=" font-semibold text-[20px]">
          Authentication for workflow begins with login using passkey, email, or
          Google.
        </h3>
        <h4 className="text-gray-500">
          Welcome to the start of your amazing adventure! Log in to access your
          workflow and unleash your inner potential. Become the best at what you
          do and achieve your wildest dreams!
        </h4>
      </div>
      <div className="hankoauth w-full flex justify-center lg:w-[60%]    ">
        <div className="hankodiv absolute  p-4  h-[30rem] w-[25rem] md:mt-[11rem] max-md:mt-[6rem] md:backdrop-blur-md bg-white/20 md:shadow-lg  ">
          <HankoAuth />
        </div>
      </div>
    </div>
  );
}
