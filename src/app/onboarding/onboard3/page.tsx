import React from "react";
import { NextPage } from "next";
import Onboard3 from "../../../images/onboard3.png";
import Stepper3 from "../../../images/stepper3.png";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/* onboarding */}
      <div className="mobile__layout">
        <div className="flex justify-center items-center text-center gap-9 flex-col">
          <img className="w-[90%] " src={Onboard3.src} alt="onboard two" />
          <div className="text-center flex flex-col gap-6">
            <h1 className="text-[#0f515f] text-[29px] font-bold">
              Be in charge!!
            </h1>
            <p className="text-[16px] text-[#838383]">
              Make{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Payment, Remove
              </span>{" "}
              <br /> or person to your{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Group
              </span>{" "}
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
            <img src={Stepper3.src} alt="stepper" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
