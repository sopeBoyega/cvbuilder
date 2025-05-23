"use client"
import { dict } from "@/app/addons/anys"
import { A, Br, Div } from "@/app/addons/csml"
import { DocumentAddStyle } from "@/app/addons/css"
import Glow from "@/app/addons/glow"
import HeadWind from "@/app/addons/headwind"
import BaseHOC, { SpiritHOC } from "@/app/addons/HOC"
import { useEffect, useState } from "react"

export type icv = {
id: any
title: any
content:any
theme:any
tags: any
user_id: any
is_public:any
created_at: any
updated_at: any
status:any
is_deleted:any
is_favorite: any
}



export function CVCard({cv}:{cv:icv}){
    const mark = new SpiritHOC({soulprops:{border: "0.96px solid rgba(255, 255, 255, 0.2)",padding:"3px",fontSize:"12px",...HeadWind.Square("fit"),borderRadius:"25px", paddingInline:"20px"}})
    const glow = new Glow({color:"rgba(37, 99, 235)",opacity:0.044,size:300})
    return <A href={`/dashboard/${cv.id}`}  position="relative" overflow="hidden" className="CVCard" transition="scale 0.5s ease-in-out, box-shadow 0.5s ease-in-out" boxSizing="border-box" padding="20px" borderRadius="20px" {...HeadWind.FlexColumnJustifyEnd('10px')} minHeight="200px"  border="5px solid rgba(255, 255, 255, 0.12)">
        <glow.Render></glow.Render>
        <Div zIndex="2" {...HeadWind.FlexRowAlignCenter("10px")}>
            <mark.RenderSoul soulId="status" background="white" color="black">{cv.status}</mark.RenderSoul>
            <mark.RenderSoul>{cv.created_at}</mark.RenderSoul>
        </Div>
        <Div zIndex="2" fontWeight="bolder" fontSize="18px">{cv.title}</Div>
        <Div zIndex="2" fontSize="12px">{cv.theme}</Div>
    </A>
}

export default function (){
    const base =  new BaseHOC()
    const [user , setUser] = useState<dict | undefined>(undefined)
    DocumentAddStyle({
        ".CVCard:hover":{
            scale:"1.03",
            boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.6)",
        }
    })
    useEffect(()=>{
        !user && setUser(base.rootdata.access.user)
        setTimeout(()=>{console.log("user",base.rootdata.access)},4000)
    },[user])
    return <base.Render  padding="10px" width="100%">
        <Div width="fit-content" maxWidth="100%" {...HeadWind.GridColumnAutoFitMinMax("300px, 1fr","20px")}>
            {user && user.Cvs.length >0 ?user.Cvs.map((cv:icv)=><CVCard cv={cv}></CVCard>):<Div opacity="0.4" width="100%" {...HeadWind.FlexColumnAlignCenter("10px")} >
                <Div fontSize="30px" fontWeight="bolder" >NO CV FOUND</Div>
                <Div fontSize="14px"> Create a new CV project</Div>
            </Div>}</Div>
        <Br></Br>
        <Br></Br>
        <Br></Br>
    </base.Render>
} 