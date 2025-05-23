"use client"
import Glow from "@/app/addons/glow"
import BaseHOC from "@/app/addons/HOC"


export default function (){
    const base = new BaseHOC()
    const glow = new Glow({size:700,opacity:0.03})
    return <base.Render position="relative" minWidth="100vw" minHeight="400px">
    <glow.Render display="none"></glow.Render>
    </base.Render>
}