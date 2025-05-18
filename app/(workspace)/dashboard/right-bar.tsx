"use client";
import { PJS } from "@/app/fonts/fonts";
import React, { ReactNode, useEffect, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { Folder, User } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import BaseHOC, { SpiritHOC } from "@/app/addons/HOC";
import { dict } from "@/app/addons/anys";
import { XEvent } from "@/app/addons/ExtensibleListener";
import { Br, Div, Hr } from "@/app/addons/csml";
import HeadWind from "@/app/addons/headwind";
import { icv } from "../CV/page";
import DataSaver from "@/app/addons/DataSaver";


export function RightCard({title,children, maxHeight="200px"}:{title:string,children:any,maxHeight?:string}){
    const base = new BaseHOC()
    const content = new BaseHOC()
    const Title = new BaseHOC()
    const icon = new BaseHOC()
    const minHeight = "48px"
    const TitleOnClick = ()=>{
        if (base.style.height() == maxHeight){
            base.style.height(minHeight)
            // content.style.visibility("hidden")
            content.style.opacity("0")
            icon.style.rotate("0deg")
            console.log(base.style.height())
        }else{
            base.style.height(maxHeight)
            // content.style.visibility("initial")
            content.style.opacity("1")
            icon.style.rotate("-180deg")
            console.log(base.style.height())
        }
    }
    return <base.Render border="2.34px solid rgba(226, 232, 240, 1)" transition="height 0.3s ease-in-out" overflow="hidden" width="300px" height={maxHeight} borderRadius="20px" display="grid" gridAutoRows="auto 1fr">
        <Title.Render onClick={TitleOnClick} padding="10px" {...HeadWind.FlexRowAlignCenterJustifyBetween()}   paddingInline="20px" borderBottom="2.34px solid rgba(226, 232, 240, 1)" >
          <Div fontWeight="bold" fontSize="16px">{title}</Div> <icon.Render transition="rotate 0.3s ease-in-out" rotate="-180deg"><FiChevronDown/></icon.Render></Title.Render>
        <content.Render padding="10px" transition="opacity 0.5s ease-in-out" paddingInline="20px" {...HeadWind.Square("%")} >
              {children}
        </content.Render>
    </base.Render>

}

export default function RightBar (props:any){

    const base = new BaseHOC()
    const right = new SpiritHOC({soulprops:{color:"rgba(37, 99, 235, 1)"}})
    const text = new SpiritHOC({soulprops:{fontSize:"14px",...HeadWind.FlexRowAlignCenter("10px")}})
    const content = new SpiritHOC({soulprops:{...HeadWind.FlexRowAlignCenterJustifyBetween("30px")}})
    const wrapper = new SpiritHOC({soulprops:{...HeadWind.FlexColumn("10px")}})
    const nodatayet:ReactNode = <Div fontWeight="bolder" fontSize="20px" opacity="0.2">
      No Data Yet
      <Div fontSize="12px" fontWeight="initial">Create a new cv project.</Div>
      </Div>
    // const wrapper = new 
    const [user, setUser] = useState<dict | undefined>()
    const [currentCv, setCurrentCv] = useState<icv | undefined>()
    let f = (e:XEvent)=>{
          console.log(e)
      }
    useEffect(()=>{
    /*   setTimeout(() => {
        console.log(Object.keys(base.rootListener.listeners.access).length)
      }, 5000); */
      setTimeout(() => {
        console.log(Object.keys(base.rootListener.listeners.access).length)
      }, 4000);
      !user && setUser(base.rootdata.access.user)
      if (!currentCv && base.rootdata.has("cvid")){
          setCurrentCv(()=>{
            let cv = user?.Cvs.filter((c:icv)=>c.ID == base.rootdata.access.cvid)[0]
            return cv
          })
      }
    })
    return <base.Render {...HeadWind.FlexColumnAllCenter("30px")}>
    {/* {user?.username}  */}
    <RightCard  title="Resume Status/Rating">
        {currentCv?<wrapper.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Leadership</text.RenderSoul> <right.RenderSoul>90%</right.RenderSoul></content.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Relevant job Experience</text.RenderSoul> <right.RenderSoul>90%</right.RenderSoul></content.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Relevant job Description Keywords</text.RenderSoul> <right.RenderSoul>90%</right.RenderSoul></content.RenderSoul>
        </wrapper.RenderSoul>:nodatayet}
    </RightCard>
    <RightCard title="Page Attributes">
      {currentCv?"":nodatayet}
    </RightCard>
    <RightCard title="Download Resume" maxHeight="250px">
      {currentCv?<wrapper.RenderSoul gap="6px">
          <content.RenderSoul><text.RenderSoul >Status: <Div fontWeight="bold">{currentCv.status}</Div></text.RenderSoul> <right.RenderSoul>edit</right.RenderSoul></content.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Visibility: Public</text.RenderSoul> <right.RenderSoul>edit</right.RenderSoul></content.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Template color: White</text.RenderSoul> <right.RenderSoul>edit</right.RenderSoul></content.RenderSoul>
          <content.RenderSoul><text.RenderSoul>Download Format</text.RenderSoul> <right.RenderSoul>edit</right.RenderSoul></content.RenderSoul>
          <Div marginTop="10px" width="100%" borderRadius="25px" textAlign="center" paddingBlock="8px" border = "2.34px solid rgba(203, 213, 225, 1)">Download</Div>
        </wrapper.RenderSoul>:nodatayet}
    </RightCard>
    </base.Render>
};


