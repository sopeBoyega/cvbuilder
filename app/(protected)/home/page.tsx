"use client";
import TextEditor from "@/app/components/home/editor";
import Header from "@/app/components/home/header";
import Settings from "@/app/components/home/mobile-settings";
import RightBar from "@/app/components/home/right-bar";
import { PJS } from "@/app/fonts/fonts";
import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

type Props = {};

const page = (props: Props) => {
  // Refactor this Page
  // remeber Presentational and Functional Component
  // And what Keren Said

  return (
    <div className={`${PJS.className} relative`}>
      <div className="w-full h-full bg-black absolute left-0 right-0 z-[1001] ">
        <Settings/>
      </div>
      <Header />
      <div className="w-full h-fit flex-col md:flex-row  justify-center items-center gap-3  md:items-start ">
        <TextEditor />
        <div className="mt-3">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default page;
