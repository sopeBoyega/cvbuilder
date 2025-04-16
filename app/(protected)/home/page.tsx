"use client";
import Alerter from "@/app/addons/alerter";
import BaseHOC from "@/app/addons/HOC";
import TextEditor from "@/app/components/home/editor";
import Header from "@/app/components/home/header";
import Settings from "@/app/components/home/mobile-settings";
import RightBar from "@/app/components/home/right-bar";
import { PJS } from "@/app/fonts/fonts";
import React, { useState } from "react";




const page = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const alerter = new Alerter()
  alerter.defaultButton = {...alerter.defaultButton,backgroundColor:"rgba(89, 140, 256, 0.4)",fontWeight:"bold"}
  const base = new BaseHOC()
  return (
    <div className={`${PJS.className} relative p-5`}>
      <alerter.Render></alerter.Render>

      {showSettings && (
        <div className="w-full md:w-[25%] h-full bg-black absolute  top-0 right-0 z-[1001]  ">
      
            <Settings base={base} alerter={alerter} setShowSettings={setShowSettings} />
       
        </div>
      )}
      <Header base={base} alerter={alerter} setShowSettings={setShowSettings} />
      <div className="w-full h-fit flex-col lg:flex-row flex-nowrap flex justify-center items-center gap-3  md:items-start ">
        <TextEditor base={base} />
        <div className="mt-3 w-fit">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default page;
