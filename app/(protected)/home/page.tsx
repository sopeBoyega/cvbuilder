"use client";
import TextEditor from "@/app/components/home/editor";
import Header from "@/app/components/home/header";
import Settings from "@/app/components/home/mobile-settings";
import RightBar from "@/app/components/home/right-bar";
import { PJS } from "@/app/fonts/fonts";
import React, { useState } from "react";




const page = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className={`${PJS.className} relative p-5`}>
      {showSettings && (
        <div className="w-full md:w-[25%] h-full bg-black absolute  top-0 right-0 z-[1001]  ">
      
            <Settings setShowSettings={setShowSettings} />
       
        </div>
      )}
      <Header setShowSettings={setShowSettings} />
      <div className="w-full h-fit flex-col lg:flex-row flex-nowrap flex justify-center items-center gap-3  md:items-start ">
        <TextEditor />
        <div className="mt-3 w-fit">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default page;
