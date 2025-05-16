"use client";
import { PJS } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { Folder, User } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import BaseHOC, { SpiritHOC } from "@/app/addons/HOC";
import { dict } from "@/app/addons/anys";
import { XEvent } from "@/app/addons/ExtensibleListener";
import { Br, Div, Hr } from "@/app/addons/csml";
import HeadWind from "@/app/addons/headwind";


export function RightCard({title,children, maxHeight="200px"}:{title:string,children:any,maxHeight?:string}){
    const base = new BaseHOC()
    const content = new BaseHOC()
    const Title = new BaseHOC()
    const icon = new BaseHOC()
    const minHeight = "48px"
    const TitleOnClick = ()=>{
        if (base.style.height() == maxHeight){
            base.style.height(minHeight)
            content.style.visibility("hidden")
            content.style.opacity("0")
            icon.style.rotate("0deg")
            console.log(base.style.height())
        }else{
            base.style.height(maxHeight)
            content.style.visibility("initial")
            content.style.opacity("1")
            icon.style.rotate("-180deg")
            console.log(base.style.height())
        }
    }
    return <base.Render border="2.34px solid rgba(226, 232, 240, 1)" transition="height 0.3s ease-in-out" overflow="hidden" width="300px" height={maxHeight} borderRadius="20px" display="grid" gridAutoRows="auto 1fr">
        <Title.Render onClick={TitleOnClick} padding="10px" {...HeadWind.FlexRowAlignCenterJustifyBetween()}  transition="opacity 0.5s ease-in-out" paddingInline="20px" borderBottom="2.34px solid rgba(226, 232, 240, 1)" >
          <Div fontWeight="bold" fontSize="16px">{title}</Div> <icon.Render transition="rotate 0.3s ease-in-out" rotate="-180deg"><FiChevronDown/></icon.Render></Title.Render>
        <content.Render padding="10px" paddingInline="20px" {...HeadWind.Square("%")} >
              {children}
        </content.Render>
    </base.Render>

}

export default function RightBar (props:any){
    const base = new BaseHOC()
    const right = new SpiritHOC({soulprops:{color:"blue"}})
    const text = new SpiritHOC({soulprops:{fontSize:"14px"}})
    const content = new SpiritHOC({soulprops:{...HeadWind.FlexRowAlignCenterJustifyBetween("30px")}})
    const wrapper = new SpiritHOC({soulprops:{...HeadWind.FlexColumn("10px")}})
    // const wrapper = new 
    const [user, setUser] = useState<dict | undefined>()
    let f = (e:XEvent)=>{
          console.log(e)
      }
    useEffect(()=>{
    /*   setTimeout(() => {
        console.log(Object.keys(base.rootListener.listeners.access).length)
      }, 5000); */
    // base.Listen("user-init",f)

      !user && setUser(base.rootdata.access.user)
    })
    return <base.Render {...HeadWind.FlexColumnAllCenter("30px")}>
    {/* {user?.username}  */}
    <RightCard title="Resume Status/Rating">
        <wrapper.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Leadership</text.CreateSoul> <right.CreateSoul>90%</right.CreateSoul></content.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Relevant job Experience</text.CreateSoul> <right.CreateSoul>90%</right.CreateSoul></content.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Relevant job Description Keywords</text.CreateSoul> <right.CreateSoul>90%</right.CreateSoul></content.CreateSoul>
        </wrapper.CreateSoul>
    </RightCard>
    <RightCard title="Page Attributes">{""}</RightCard>
    <RightCard title="Download Resume" maxHeight="250px">
      <wrapper.CreateSoul gap="6px">
          <content.CreateSoul><text.CreateSoul>Status: Draft</text.CreateSoul> <right.CreateSoul>edit</right.CreateSoul></content.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Visibility: Public</text.CreateSoul> <right.CreateSoul>edit</right.CreateSoul></content.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Template color: White</text.CreateSoul> <right.CreateSoul>edit</right.CreateSoul></content.CreateSoul>
          <content.CreateSoul><text.CreateSoul>Download Format</text.CreateSoul> <right.CreateSoul>edit</right.CreateSoul></content.CreateSoul>
          <Div marginTop="10px" width="100%" borderRadius="25px" textAlign="center" paddingBlock="8px" border = "2.34px solid rgba(203, 213, 225, 1)">Download</Div>
        </wrapper.CreateSoul>
    </RightCard>
    </base.Render>
};


