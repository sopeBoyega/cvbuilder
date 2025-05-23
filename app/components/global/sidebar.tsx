"use client";
import React, { useState } from "react";
import { cvStatus, sidebarData, subSideBarData } from "@/global/data";
import Image from "next/image";

import IconItem from "./icon";
import { sideBar } from "@/global/types";
import { useRouter,usePathname } from "next/navigation";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [adVisible, setAdVisible] = useState<boolean>(true);
  const pathName = usePathname()

  const router = useRouter();

  const handleTabNavigate = (tab: sideBar) => {

    // Also removed the /(slash that was infront of the tab
    router.push(tab.url);
  };

  const cvLength = cvStatus.length;

  return (
    <div className="border-r-[1px] border-r-[#E2E4E9] fixed z-[1000] h-[80vh] hidden md:flex md:flex-col  bg-black w-[20%] top-0">
      <div className="flex items-start justify-  mb-[5px] flex-col p-[20px]">
        <p className={`font-[700] text-[20px] `}>CV Builder</p>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="flex w-full  border-[3.03px] border-white bg-black rounded-full h-fit items-center cursor-pointer px-[12px] py-[px] placeholder:text-white"
        />
      </div>

      <div className="mt-[5px] p-[20px] gap-y-3 flex  flex-col h-[85vh]">
        {sidebarData.map((item: sideBar) => (
          <div
            key={item.title}
            className={`flex w-full  border-[3.03px] border-white rounded-full h-fit items-center justify-between cursor-pointer px-[12px] py-[px] ${
              pathName === item.url
                ? "bg-[#F6F8FA] rounded-[8px] text-[#0A0D14]"
                : "text-white font-[700]"
            }`}
            // Changed item.title below the item.url
            onClick={() => handleTabNavigate(item)}
          >
            <div className="flex items-center justify-center">
              <IconItem
                name={`${item.icon}`}
                fillColor={activeTab === item.title ? "none" : "none"}
              />
              <p className="capitalize text-[14px] font-[500] my-2 ml-1.5">
                {item.title}
              </p>
            </div>
            {item.title === "My CVs" && (
              <div className="bg-[#EEF2FF] border-[1.34px] border-[#A5B4FC] h-fit w-fit py-[5px] px-[10px] rounded-full text-[13px] text-[#2563EB] ">
                0{cvLength}
              </div>
            )}
          </div>
        ))}

        {adVisible && (
          <div className="mt-auto">
            <div className="w-full h-fit border-[3.05px] rounded-lg border-white p-[10px] ">
              <div className="flex w-full justify-between ">
                <div className="flex flex-col ">
                  <p className="font-[500] text-[13px]">Pro Plan</p>
                  <p className="text-[13px]">
                    {" "}
                    <span className="font-[700] text-[25px]">
                      $15.99{adVisible}
                    </span>
                    /mo
                  </p>
                </div>
                <div className="">
                  <p
                    className="text-[#94A3B8] font-[400] cursor-pointer"
                    onClick={() => setAdVisible(false)}
                  >
                    x
                  </p>
                </div>
              </div>

              <p className="w-full text-[12px] my-3 font-[400]">
                Enjoy unlimited access to our app <br />
                with only a small price monthly
              </p>

              <div className="flex justify-center items-center w-fit gap-3">
                <p className="text-[13px] font-[700]">Dismiss</p>
                <p className="text-[#2563EB] text-[13px] font-[700]">Go Pro</p>
              </div>
            </div>
          </div>
        )}

        <div className="border-t-[1.5px] border-white pt-[20px] flex  justify-between ">
          <div className="flex gap-x-1">
            <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
            <div className="flex flex-col ">
              <p className="text-white font-[700]">Okechuwku</p>
              <p className="text-[10px]">Basic Member</p>
            </div>
          </div>
          <span  onClick={() => {router.push("/")}} className="cursor-pointer">
            <IconItem name="exit" color="#8C55D4" />
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
