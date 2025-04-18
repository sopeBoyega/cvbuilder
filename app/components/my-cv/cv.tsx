import React from "react";
import StatusTag from "./status-tag";
import { inter } from "@/app/fonts/fonts";

type Props = {
  statusTag : string
};

const CV = ({statusTag} : Props) => {
  return (
    <div className={` ${inter.className} w-fit h-fit flex justify-end shadow-custom-shadow flex-col items-start p-[13px] px-[17px]  border-[7px] border-gray-700 rounded-lg`}>
      
      <div className="w-full h-[70px]"></div>
      <div className="w-fit h-fit flex gap-2 ">
        <StatusTag status={statusTag} />
        <div
          className="flex items-center justify-center gap-1 px-1 border-[0.76px] border-white   rounded-full  text-sm font-medium"
         
        >
          <p className="text-[8px] font-[900]">
           15 July 2025
          </p>
        </div>
      </div>

      <p className="font-[600] text-[30px]">Software Engineer CV</p>

      <p>Highlighting skills and Experience for Tech <br />
       roles</p>
    </div>
  );
};

export default CV;
