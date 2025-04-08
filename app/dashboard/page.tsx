"use client"
import { useEffect } from "react";
import BasicRouter from "../addons/basicrouter";
import { Div, Span } from "../addons/csml";
import BaseHOC from "../addons/HOC";
import { FaHome } from "react-icons/fa";



function NavBar({base}:{base:BaseHOC}){
    const nameEl = new BaseHOC({Component:Span})
    return <Div display="flex" justifyContent="space-between" alignItems="center" paddingBlock="10px" paddingInline="10px">
        <Div display="flex" gap="10px">
            <Div paddingBlock="8px" paddingInline="20px" display="flex" alignItems="center" gap="10px" borderRadius="25px" backgroundColor=""><FaHome/> Home</Div>
            <Div paddingBlock="8px" paddingInline="20px" borderRadius="25px" border="1px solid white">+ New</Div>
        </Div>
        <Div>
            <Div>Hello, <nameEl.Render>Anonymous</nameEl.Render></Div>
            <Div></Div>
        </Div> 
    </Div>
}


export default function DashBoard () {
    const base = new BaseHOC()
    const router = new BasicRouter()
    useEffect(()=>{
        router.pages.Settings()
    })
    return <base.Render fontSize="14px" display="grid" width="100vw" height="100vh" backgroundColor="rgba(13, 17, 23, 1)" color="white" gridTemplateRows="auto 1fr">
        <NavBar base={base}></NavBar>
        <router.Render>
            <router.Route backgroundColor="black" name = "HomePage">
                HomePage
            </router.Route>
            <router.Route background="red" name = "Settings">
                Settings
            </router.Route>
        </router.Render>
    </base.Render>

}