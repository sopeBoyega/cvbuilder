"use client"
import TextEditor from "@/app/components/home/editor";
import Header from "@/app/components/home/header";
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
    <div className={`${PJS.className}`}>
      {/* Header Component */}
      <Header/>
      <div className="w-full h-fit flex justify-between items-start">
        <TextEditor/>
        <RightBar/>
      </div>
    </div>
  );
};

export default page;
