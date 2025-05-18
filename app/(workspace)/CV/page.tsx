"use client"
import { dict } from "@/app/addons/anys"
import { A, Br, Div } from "@/app/addons/csml"
import HeadWind from "@/app/addons/headwind"
import BaseHOC, { SpiritHOC } from "@/app/addons/HOC"
import { useEffect, useState } from "react"

export type icv = {
ID:string
cv:string
date:string
status:string
theme: string 
title: string 
}



export function CVCard({cv}:{cv:icv}){
    const mark = new SpiritHOC({soulprops:{border: "0.96px solid rgba(255, 255, 255, 0.2)",padding:"3px",fontSize:"12px",...HeadWind.Square("fit"),borderRadius:"25px", paddingInline:"20px"}})
    return <A href={`/dashboard/${cv.ID}`} boxSizing="border-box" padding="20px" borderRadius="20px" {...HeadWind.FlexColumnJustifyEnd('10px')} minHeight="200px"  border="5px solid rgba(255, 255, 255, 0.12)">
        <Div {...HeadWind.FlexRowAlignCenter("10px")}>
            <mark.RenderSoul soulId="status" background="white" color="black">{cv.status}</mark.RenderSoul>
            <mark.RenderSoul>{cv.date}</mark.RenderSoul>
        </Div>
        <Div fontWeight="bolder" fontSize="18px">{cv.title}</Div>
        <Div fontSize="12px">{cv.theme}</Div>
    </A>
}

export default function (){
    const base =  new BaseHOC()
    const [user , setUser] = useState<dict | undefined>(undefined)
    useEffect(()=>{
        !user && setUser(base.rootdata.access.user)
        setTimeout(()=>{console.log("user",base.rootdata.access)},4000)
    },[user])
    return <base.Render {...HeadWind.OverflowOnlyY()} padding="10px" {...HeadWind.Square("%")}>
        <Div {...HeadWind.GridColumnAutoFitMinMax("300px, 1fr","10px")}>
            {user?.Cvs.map((cv:icv)=><CVCard cv={cv}></CVCard>)}</Div>
        <Br></Br>
        <Br></Br>
        <Br></Br>
    </base.Render>
} 