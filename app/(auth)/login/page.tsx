import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import("@/utils/HankoConfig/Hanko"), {
  ssr: false,
});

export default function page() {
  return (
    <div className="all flex justify-between border w-full h-screen">
      <div className="loginDetails  max-lg:hidden ml-40  w-full  p-10 mt-28 ">
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
      <div className="hankoauth w-full grid justify-center lg:w-[70%]  ">
        <div className="justforhankoauth  rounded-lg shadow-medium mt-[10rem] h-[29rem]">
          <HankoAuth />
        </div>
      </div>
    </div>
  );
}
