"use client";
import { Icon } from "@chakra-ui/react";
import { Switch } from "../ui/switch";
import {
  AlignHorizontalLeftOutlined,
  AlignHorizontalRightSharp,
  AlignVerticalBottomOutlined,
  AlignVerticalTop,
} from "@mui/icons-material";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlignRightIcon,
  Check,
  Palette,
  PencilLine,
  Text,
  TextCursorIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { HeaderProps } from "./header";
import { AnimatePresence, motion } from "framer-motion";

const Settings = ({ setShowSettings }: HeaderProps) => {
  const blockColors: string[] = [
    "#FFFFFF",
    "#4F46E5",
    "#22C55E",
    "#F59E0B",
    "#F43F5E",
    "#3B82F6",
    "#A855F7",
  ];
  const [selectedColor, setSelectedColor] = useState<string>("#4F46E5");
  return (
    <AnimatePresence>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col">
          <div className="flex m-3 justify-between ">
            <p className="font-[500]">Edit Block</p>
            <Image src="/question.svg" width={30} height={30} alt="settings" />
          </div>

          <div className="flex flex-col  gap-5 p-6 rounded-xl w-full">
            <div>
              <label className="text-white mb-2 font-[600] block">
                Block Type
              </label>
              <div className="relative">
                <Icon
                  as={TextCursorIcon}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <select className="pl-10 px-4 py-2 bg-white text-gray-500 rounded-full border-none focus:ring-0 focus:border-none w-full">
                  <option>Text</option>
                  <option>Text</option>
                  <option>Text</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="text-white mb-2 font-[500] block">
                Block Style
              </label>
              <div className="relative w-full">
                <Icon
                  as={Palette}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <select className="pl-10 pr-4 py-2 bg-white text-[#475569] rounded-full border-none focus:ring-0 focus:border-none w-full">
                  <option>Heading 3</option>
                  <option>Heading 2</option>
                  <option>Heading 1</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label className="text-white mb-2 font-[500] block">
                Block Positioning
              </label>
              <div className="w-full bg-transparent flex justify-evenly border-[1px] rounded-full p-3 border-white">
                <AlignVerticalTop className="  border-white h-full" />
                <hr className="border-[1px] border-white h-[27px]" />
                <AlignVerticalBottomOutlined className=" border-white h-full" />
                <hr className="border-[1px] border-white h-[27px]" />
                <AlignHorizontalLeftOutlined className="" />
                <hr className="border-[1px] border-white h-[27px]" />
                <AlignHorizontalRightSharp />
              </div>
            </div>
            <div className="w-full">
              <label className="text-white mb-2 font-[500] block">
                Block Color
              </label>

              <div className="flex justify-evenly items-center gap-2">
                {blockColors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }} // Use inline style for dynamic color
                    className="w-[35px] h-[35px] rounded-full flex items-center justify-center"
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <Check color="#FFFFFF" fontSize={600} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-[1px] border-white w-full" />
          <div className="p-3 flex flex-col">
            <div className="flex flex-col gap-2">
              <p className="font-[600]">Block Details</p>
              <p>
                Here you can edit your block details <br /> seamlessly.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-7">
              <div>
                <label className="text-white mb-2 font-[600] block">
                  Custom Attribute
                </label>
                <div className="relative">
                  <Icon
                    as={PencilLine}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  />
                  <input className=" px-4 py-2 bg-white text-[#475569] font-[500] rounded-full border-none focus:ring-0 focus:border-none w-full">
             
                  </input>
                </div>
              </div>
              <div>
                <label className="text-white mb-2 font-[600] block">
                  Text Content
                </label>
                <textarea
                  name="textContent"
                  id=""
                  className="bg-white rounded-lg w-full p-3 text-black"
                  placeholder="Enter your main text here "
                ></textarea>
              </div>
              <div className="w-full">
                <label className="text-white mb-2 font-[500] block">
                  Text Align
                </label>
                <div className="w-full bg-transparent flex justify-evenly border-[1px] rounded-full p-3 border-white">
                  <AlignLeft className="  border-white h-full" />
                  <hr className="border-[1px] border-white h-[27px]" />
                  <AlignCenter className=" border-white h-full" />
                  <hr className="border-[1px] border-white h-[27px]" />
                  <AlignRightIcon className="" />
                </div>
              </div>
              <div className="w-full">
                <label className="text-white mb-2 font-[500] block">
                  Text Accessibility
                </label>
                <div className="w-full bg-transparent flex flex-col justify-evenly border-[2.5px] rounded-lg p-6 gap-3 border-white">
                  <div className=" w-full h-fit flex flex-row gap-2 items-start">
                    <Switch colorPalette="purple" />
                    <div className="flex flex-col gap-2">
                      <p className="font-[500] text-[14px] text-white">
                        Is visible for all
                      </p>
                    </div>
                  </div>
                  <div className=" w-full h-fit flex flex-row gap-2 items-start">
                    <Switch colorPalette="purple" />
                    <div className="flex flex-col gap-2">
                      <p className="font-[500] text-[14px] text-white">
                        Is Hidden
                      </p>
                    </div>
                  </div>
                  <div className=" w-full h-fit flex flex-row gap-2 items-start">
                    <Switch colorPalette="purple" />
                    <div className="flex flex-col gap-2">
                      <p className="font-[500] text-[14px] text-white">
                        Is Accessible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full border-[1px] border-white mt-5" />
          <div className="w-full items-center justify-center flex-col gap-3 place-items-center place-content-center p-4">
            <button
              type="button"
              className="border-none bg-[#2563EB]  w-[90%] rounded-full  flex items-center justify-center p-2"
            >
              Save Changes <Check />
            </button>
            <button
              type="button"
              className="border-[1px] border-white  w-[90%] flex items-center rounded-full justify-center p-2 mt-4"
              onClick={() => setShowSettings(false)}
            >
              Discard Changes <X />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;
