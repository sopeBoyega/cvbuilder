"use client";
import React from "react";
import Image from "next/image";
import IconItem from "./icon";

import { sidebarData } from "@/global/data";
import { usePathname } from "next/navigation";

import { useRouter } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const router = useRouter();

  const currentPage = sidebarData.find((item) => item.url === pathName);
  return (
    <>
      <div className="w-full h-fit p-[17px] border-b-[#E2E8F0] border-b-[1px] flex items-center justify-between">
        <div className="flex w-fit h-fit gap-2 ">
          <div className="bg-[#2563EB] flex py-[7px] px-[12px]  items-center justify-center gap-2 rounded-3xl  ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 38 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.2007 15.7219L21.5602 1.0814C20.8738 0.395233 19.943 0.00976562 18.9725 0.00976562C18.002 0.00976562 17.0712 0.395233 16.3848 1.0814L1.74431 15.7219C1.40305 16.061 1.13253 16.4646 0.948441 16.9091C0.764349 17.3536 0.670349 17.8303 0.671894 18.3114V35.88C0.671894 36.4624 0.903265 37.021 1.31511 37.4329C1.72695 37.8447 2.28553 38.0761 2.86797 38.0761H35.077C35.6595 38.0761 36.218 37.8447 36.6299 37.4329C37.0417 37.021 37.2731 36.4624 37.2731 35.88V18.3114C37.2746 17.8303 37.1806 17.3536 36.9966 16.9091C36.8125 16.4646 36.5419 16.061 36.2007 15.7219ZM32.881 33.6839H5.06404V18.6134L18.9725 4.70492L32.881 18.6134V33.6839Z"
                fill="white"
              />
            </svg>
            <p className="text-[13px] font-[700]">{currentPage?.title}</p>
          </div>
          <div className=" flex py-[7px] px-[15px] border-[1px] border-[#CBD5E1]  items-center justify-center gap-2 rounded-3xl  ">
             <span className="font-[700] text-[15px]">+</span>
            <p className="text-[13px] font-[700]">  New</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
        <p className="text-white font-[500]"> Hello, Okechuwku</p>
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        </div>
      </div>
    </>
  );
}
