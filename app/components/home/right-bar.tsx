"use client";
import { PJS } from "@/app/fonts/fonts";
import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { Folder, User } from "lucide-react";
import { Icon } from "@chakra-ui/react";

type Props = {};

const RightBar = (props: Props) => {
  const [isResumeStatusOpen, setResumeStatusOpen] = useState(false);
  const toggleResumeStatusOpen = () => setResumeStatusOpen(!isResumeStatusOpen);
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  const data = [
    { label: "Leadership", score: "90%" },
    { label: "Relevant job Experience", score: "90%" },
    { label: "Relevant job Description Keywords", score: "90%" },
  ]; 

  return (
    <div className={` ${PJS.className} w-fit h-full flex flex-col items-start justify-start gap-3`}>
      {/* Resume Status/Rating Box */}
      <div className="w-[300px] bg-black/80 border-[1.2px] border-gray-500 rounded-2xl text-white font-sans">
        <div
          onClick={toggleResumeStatusOpen}
          className="flex justify-between items-center p-3 cursor-pointer text-lg font-bold"
        >
          <span className={`${PJS.className} text-[16px]`}>Resume Status/Rating</span>
          {isResumeStatusOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isResumeStatusOpen && (
          <div className="border-t border-gray-500">
            {data.map((item, index) => (
              <div key={index} className="flex justify-between p-2">
                <span className={`${PJS.className} font-[500]`}>{item.label}</span>
                <span className="text-blue-400 font-[600]">{item.score}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Page Attributes Box */}
      <div className="w-[300px] bg-black/80 border-[1.2px] border-gray-500 rounded-2xl text-white font-sans">
        <div
          onClick={toggleOpen}
          className="flex justify-between items-center p-3 cursor-pointer text-lg font-bold"
        >
          <span className={`${PJS.className} text-[16px]`}>Page Attributes</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen && (
          <div className="border-t border-gray-500">
            <div className="flex flex-col gap-4 p-6 rounded-xl w-72">
              <div>
                <label className="text-white mb-2 block">Parent</label>
                <div className="relative">
                  <Icon as={Folder} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select className="pl-10 pr-4 py-2 bg-white text-gray-500 rounded-full border-none focus:ring-0 focus:border-none w-full">
                    <option>Folder name</option>
                    <option>Folder 1</option>
                    <option>Folder 2</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-white mb-2 block">Category</label>
                <div className="relative">
                  <Icon as={User} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select className="pl-10 pr-4 py-2 bg-white text-[#475569] rounded-full border-none focus:ring-0 focus:border-none w-full">
                    <option>File name</option>
                    <option>File 1</option>
                    <option>File 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Resume Box */}
      <div className="w-[300px] bg-black/80 border-[1.2px] border-gray-500 rounded-2xl text-white font-sans">
        <div className="p-3 text-lg font-bold">Download Resume</div>
        <div className="border-t border-b border-gray-500 p-4">
          <div className="flex justify-between mb-2"><span  >Status: Draft</span><span className="text-blue-400">Edit</span></div>
          <div className="flex justify-between mb-2"><span>Visibility: Public</span><span className="text-blue-400">Edit</span></div>
          <div className="flex justify-between mb-2"><span>Template color: White</span><span className="text-blue-400">Edit</span></div>
          <div className="flex justify-between mb-2"><span>Download Format</span><span className="text-blue-400">Edit</span></div>
        
        </div>
        <div className="flex justify-center p-2 mt-2 ">
            <button className="bg-transparent text-white py-2 px-4 w-full border-[1px] border-white rounded-full">Download</button>
          </div>
      </div>
    </div>
  );
};

export default RightBar;
