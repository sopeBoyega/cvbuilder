"use client";
import React, { ReactEventHandler, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/app/components/global/button";

interface LoginDetails {
  email: string;
  password: string;
  confirmPassword?: string;
}

const page = (props: any) => {
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <div className="w-[330px] flex flex-col gap-5 h-fit">
      <div className="flex flex-col gap-2=1">
        <p className="text-white text-center font-semibold text-[22.55px] ">
          Sign In to your account
        </p>
        <p className="text-subheading text-center text-[12.88px] font-[400]">
          Create your CV effortlessly - completely free!
        </p>
      </div>

      <div className="w-full bg-white h-[39px] rounded-full flex items-center gap-2 justify-center ">
        <Image src="/google.svg" width={16} height={16} alt="Google" />

        <p className="text-black font-[500] text-[12px]">
          Continue with Google
        </p>
      </div>

      <div className="flex items-center justify-center mt-3 ">
        <hr className="border-[0.1px] w-[45%] border-[#CDCFD01A]" />
        <div className="bg-white w-[25px] h-[25px] rounded-full text-black text-[9px] font-[600] flex justify-center items-center ">
          OR
        </div>
        <hr className="border-[0.1px] w-[45%] border-[#CDCFD01A]" />
      </div>

      <div className="flex-col ">
        <input
          className="w-full text-[13px] h-[39px] rounded-full pl-3 mb-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
          placeholder="Email"
          type="email"
          name="email"
          value={loginDetails.email}
          onChange={onChangeHandler}
        />

        <div className="flex w-[100%] gap-3 ">
          <input
            className="w-[50%] text-[13px] h-[39px] rounded-full pl-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
            placeholder="Password"
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={onChangeHandler}
          />
          <input
            className="w-[50%] text-[13px] h-[39px] rounded-full pl-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
            placeholder="Confirm"
            type="password"
            name="confirmPassword"
            value={loginDetails.confirmPassword}
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <input type="checkbox" name="remember" id="" />
        <p className="font-[400] text-[11.27px]">Remember me for 30 days</p>
      </div>

      <div className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between">
        <div className=""></div>
        <p className=" text-[13px] ">Sign In </p>
        <div className="">
          <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
        </div>
      </div>

      <p
        className="underline hover:cursor-pointer text-[10px] text-center"
        onClick={() => {
          router.push("/forgot-password");
        }}
      >
        Forgot your Password?
      </p>

      <div className="place-items-center">
        <p className="text-[10px]">
          Don't have an account?{" "}
          <span className="underline text-subheading">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default page;
