"use client";
import { PJS } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { Folder, User } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import BaseHOC from "@/app/addons/HOC";
import { dict } from "@/app/addons/anys";
import { XEvent } from "@/app/addons/ExtensibleListener";
import { Div } from "@/app/addons/csml";


export function rightCard({title,children}:{title:string,children:any}){
    const base = new BaseHOC()

    return <base.Render display="grid" gridAutoRows="auto 1fr">
        <Div display="grid" gridAutoFlow="column" gap="10px" padding="10px" background="white" borderRadius="15px" boxSizing="border-box">
            <Div fontSize="20px" fontWeight="bold">{title}</Div>
            <Div display="grid" gridAutoFlow="column" gap="10px">
                <Div><FiChevronUp></FiChevronUp></Div>
                <Div><FiChevronDown></FiChevronDown></Div>
            </Div>
        </Div>
        <Div padding="10px">
            {children}
        </Div>
    </base.Render>

}

export default function RightBar (props:any){
    const base = new BaseHOC()
    const [user, setUser] = useState<dict | undefined>()
    let f = (e:XEvent)=>{
          console.log(e)
      }
    useEffect(()=>{
    /*   setTimeout(() => {
        console.log(Object.keys(base.rootListener.listeners.access).length)
      }, 5000); */
    base.Listen("user-init",f)

      !user && setUser(base.rootdata.access.user)
    })
    return <base.Render>{user?.username} <RightBar title="dfdfdf">dfdfdf</RightBar></base.Render>
};


