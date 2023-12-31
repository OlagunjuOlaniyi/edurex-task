import Image from "next/image";
import Onboard1 from "../images/onboard1.png";
import Stepper1 from "../images/stepper.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/* onboarding */}
      <div className="mobile__layout">
        <div className="flex justify-center items-center text-center gap-9 flex-col">
          <img className="w-[90%] " src={Onboard1.src} alt="onboard one" />
          <div className="text-center flex flex-col gap-6">
            <h1 className="text-[#0f515f] text-[29px] font-bold">
              Unlimited Bonding
            </h1>
            <p className="text-[16px] text-[#838383]">
              Make{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Unlimited
              </span>{" "}
              mobile phone calls
              <br /> within{" "}
              <span className="text-[#0f515f] text-[20px] font-bold">
                Your Group
              </span>
            </p>
          </div>
          <div className="mt-3 mb-2 relative">
            <p className="absolute right-[-8rem] bottom-[5px]">
              <Link
                href="/onboarding/onboard2"
                className="text-[18px] text-[#0f515f] font-bold"
              >
                Next
              </Link>
            </p>
            <img src={Stepper1.src} alt="stepper" />
          </div>
        </div>
      </div>
    </main>
  );
}
