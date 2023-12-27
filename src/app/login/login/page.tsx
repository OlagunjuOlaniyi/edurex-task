import React from "react";
import { NextPage } from "next";
import Logo from "../../../images/bluelogo.png";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/* onboarding */}
      <div className="mobile__layout">
        <div className="flex justify-center items-center text-center gap-9 flex-col">
          <img src={Logo.src} alt="" />
          <h1 className="text-[20px] text-[#0f515f]">Welcome Back</h1>
          <div>
            <form action="">
              <input type="text" name="" id="" placeholder="your name" />
              <input type="email" name="" id="" placeholder="your email" />
            </form>
          </div>
          <div className="flex flex-col gap-3 w-[100%] items-center">
            <Link
              className="font-bold border-2 border-[#0f515f] rounded-md text-[#fff] bg-[#0f515f] w-[90%] pt-2 pb-2"
              href="/"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
