"use client"
import { dict } from "@/app/addons/anys";
import { Div,Br, Input } from "@/app/addons/csml";
import DataSaver from "@/app/addons/DataSaver"
import BaseHOC, { InputHOC } from "@/app/addons/HOC";
import { useEffect, useState } from "react";
import RightBar from "./right-bar";


export default function ({id}:{id?:string}){
    const datasaver = new DataSaver("user-init")
    const [user, setUser] = useState<dict | undefined>(undefined)
    const day = new BaseHOC({Props:{display:'inline'}})
    const base = new BaseHOC()
    const content = new BaseHOC()
    const title = new InputHOC({Component:Input})
    content.AddMedia("mobile-desktop",{
        styleoff:{
            gridTemplateColumns:"1fr 360px"
        },styleon:{
            gridTemplateColumns:"1fr"
        }
    })
    useEffect(()=>{
        title.Listen("bfg",(e)=>{
            title.style.color(e.data)  
        })
        base.Listen("user-init",(e)=>{
            datasaver.save("user",e.data.user)
        })
        if (!user && datasaver.has("user")){setUser(datasaver.access.user)}
        let date = new Date()
        let timeName = "day"
        let hour = date.getHours()
        if (hour < 12){
            timeName = "Morning"
        }
        else if (hour >= 12 && hour <= 16 ){
            timeName = "Afternoon"
        }
        else if (hour >= 17 && hour <= 20 ){
            timeName = "Evening"
        }
        else if (hour >= 21 ){
            timeName = "Night"
        }
        day.innerText(timeName)
    },[])
    
    return <base.Render  padding="20px" square="100%" overflowX="hidden" overflowY="scroll" paddingInline="20px">
        <Div>
            <Div>
                <Div fontSize="18px" fontWeight="bolder"> Good <day.Render>Day</day.Render>, {user?user.username:""}</Div>
            </Div>
            <Br></Br>
            <content.Render gap="20px" display="grid">
                
                <Div minHeight="80vh">
                    <title.Render height="fit-content" fontSize="20px" width = "100%" maxWidth="700px" padding="20px" paddingBlock="10px" background="white" fontWeight="bold" borderRadius="15px" boxSizing="border-box" color="black" placeholder="Title"></title.Render>

                </Div>
                <Div width="100%" display="grid" placeItems="center">
                    <RightBar/>
                </Div>
            </content.Render>
        </Div>
        
    </base.Render>
}