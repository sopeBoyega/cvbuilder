"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import IconItem from "./icon";
import { sidebarData } from "@/global/data";
import { usePathname } from "next/navigation";

import { useRouter } from "next/navigation";
import BaseHOC from "@/app/addons/HOC";
import Alerter from "@/app/addons/alerter";
import { getUser } from "../home/anys";
import { useStateUpdate } from "@/app/addons/anys";

export default function Header({base, alerter}:{base:BaseHOC,alerter:Alerter}) {
  const pathName = usePathname();
  const router = useRouter();
  const update = useStateUpdate()
  const currentPage = sidebarData.find((item) => item.url === pathName);
  console.log(currentPage?.icon)
  useEffect(()=>{
    getUser(base,alerter,update)
  })
  return (
    <>
      <div className="w-full h-fit p-[17px] border-b-[#E2E8F0] border-b-[1px] flex items-center  justify-between">
        <div className="flex w-fit h-fit gap-2 ">
          <div className="bg-[#2563EB] flex py-[7px] px-[12px]  items-center justify-center gap-2 rounded-3xl  ">
          <IconItem name={currentPage?.icon?.toString()} color="white" fillColor="none"/>
            <p className="text-[13px] font-[700]">{currentPage?.title}</p>
          </div>
          <div onClick={()=>{window.location.href = "/steps"}} className=" flex py-[7px] px-[15px] border-[1px] border-[#CBD5E1]  items-center justify-center gap-2 rounded-3xl  ">
             <span className="font-[700] text-[15px]">+</span>
            <p className="text-[13px] font-[700]">  New</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
        <p className="text-white font-[500]"> Hello, {!base.has("user")? "NO NAME": base.GetVariable("user")["username"]}</p>
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        </div>
      </div>
    </>
  );
}
