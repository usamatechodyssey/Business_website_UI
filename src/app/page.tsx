import Management from "./compnents/management";

export default function Home() {
  return (
    <div>
      <div className="flex  justify-center items-center">
        <div className="flex flex-col  w-full max-w-screen-xl  items-center justify-center pt-[80px] pb-[80px] pl-[16px] pr-[16px]  lg:flex-row gap-10 lg:gap-0 xl:gap-20">
          <div className=" flex flex-col gap-10 justify-center text-center   lg:text-left">
            <div className=" flex flex-col gap-7 ">
              <h3 className="xm:text-[#4F9CF9] w-[288px]    font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px]  md:text-[54px] md:leading-[65.35px] lg:w-[500px]  lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                Get More Done with whitepace
              </h3>
              <p className="text-[#4F9CF9] w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[500px] lg:text-left xl:w-[630px]">
                Project management software that enables your teams to
                collaborate, plan, analyze, and manage everyday tasks.
              </p>
            </div>
            <div>
              <button className="w-[232px]  h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans lg:w-[219px]  lg:h-[63px] ">
                Try Taskey Free
              </button>
            </div>
          </div>

          <div className=" w-full max-w-[286px] md:max-w-[551px] lg:max-w-[526px] h-[191px] bg-[#C4DEFD]  md:h-[367px] lg:h-[350.45px] xl:w-[685px] xl:h-[456.39px]"></div>
        </div>
      </div>
      <Management />
    </div>
  );
}
