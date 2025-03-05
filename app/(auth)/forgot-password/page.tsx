"use client";
import Button from "@/app/components/global/button";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-white text-center font-semibold text-[22.55px] ">
          Reset Your Password
        </p>
        <p className="text-subheading text-center text-[12.88px] font-[400]">
          Enter the email used to create an account below. We’ll <br />
          send a link to reset your password {email}
        </p>
      </div>
      <form>
        <div className="flex-col gap-3">
          <input
            className="w-full text-[13px] h-[39px] rounded-full pl-3 mb-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
            placeholder="Email"
            type="email"
            name="email"
              value={email}
           onChange={(event) => {
            setEmail(event.target.value)
           }}
            required = {true}
          />
        </div>

        <button
          className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between"
          type="submit"
        >
          <div className=""></div>
          <p className=" text-[13px] ">Sumbit</p>
          <div className="">
            <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default page;
