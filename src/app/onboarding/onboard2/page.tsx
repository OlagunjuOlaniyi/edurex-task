import React from "react";
import { NextPage } from "next";
import Onboard2 from "../../../images/onboard2.png";
import Stepper2 from "../../../images/stepper2.png";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/* onboarding */}
      <div className="mobile__layout">
        <div className="flex justify-center items-center text-center gap-9 flex-col">
          <img className="w-[90%] " src={Onboard2.src} alt="onboard two" />
          <div className="text-center flex flex-col gap-6">
            <h1 className="text-[#0f515f] text-[29px] font-bold">
              Create your own group
            </h1>
            <p className="text-[16px] text-[#838383]">
              Have up to{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Unlimited
              </span>{" "}
              5 Friends, Family
              <br /> or{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Partner
              </span>{" "}
              on the platform
            </p>
          </div>
          <div className="mt-3 mb-2 relative">
            <p className="absolute right-[-8rem] bottom-[5px]">
              <Link
                href="/onboarding/onboard3"
                className="text-[18px] text-[#0f515f] font-bold"
              >
                Next
              </Link>
            </p>
            <img src={Stepper2.src} alt="stepper" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
