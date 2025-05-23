"use client"
import { dict } from "@/app/addons/anys";
import { Div,Br, Input } from "@/app/addons/csml";
import DataSaver from "@/app/addons/DataSaver"
import BaseHOC, { InputHOC, SpiritHOC } from "@/app/addons/HOC";
import { useEffect, useState } from "react";
import RightBar from "./right-bar";
import HeadWind from "@/app/addons/headwind";
import { FiDelete, FiSettings, FiTrash } from "react-icons/fi";
import { icv } from "../CV/page";
import { Editor } from "primereact/editor";
import React, { useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import XListener from "@/app/addons/ExtensibleListener";
import Alerter from "@/app/addons/alerter";

// class CEditor extends Editor{
//     editorListener:XListener
//     editorId:string
//     toolbarId:string
//     constructor(props:any){
//         super(props)
//         this.editorListener = new XListener("editor")
//         this.editorId = props.id
//         this.toolbarId = props.toolbarId
//     }
//     componentDidMount(): void {
//         const editor = this.getElement()
//         const toolbar = this.getToolbar()
//         if (editor && toolbar){
//             editor.id = this.editorId
//             toolbar.id = this.toolbarId
//             this.editorListener.Announce("editor-info",{data:{
//                 editorId:this.editorId,
//                 toolbarId:this.toolbarId,
//                 editorInstance:this
//             }})
//             this.editorListener.Listen("get-editor-content",()=>{
//                 setTimeout(()=>{this.editorListener.Announce("editor-content", {data:{
//                 content:this.getContent()}})},100)
//                 })
//         }}
// }

export default function ({id}:{id?:string}){
    const editorListener = new XListener("editor")
    const [user, setUser] = useState<dict | undefined>(undefined)
    const base = new BaseHOC()
    const content = new BaseHOC()
    const title = new InputHOC({Component:Input})
    const [currentCv, setCurrentCv] = useState<icv | undefined>()
    const [text, setText] = useState<string>("")
    const alerter  = new Alerter()
    
    content.AddMedia("mobile-desktop",{
        styleoff:{
            gridTemplateColumns:"1fr 360px"
        },styleon:{
            gridTemplateColumns:"1fr"
        }
    })
    useEffect(()=>{
        window.onbeforeunload = (e)=>{
            alerter.Loadify(<Div>ON-BEFOREUNLOAD ... <Br/> <Div fontSize="12px"> you will lose your work </Div> </Div>,{className:"loadingIcon4"})
           if(base.rootdata.has("editcv")) {
                 e.preventDefault(); // Required for Chrome
            }
            // e.returnValue = "Are you sure you want to leave this page? Your changes will not be saved.";
        }
        console.log("editcv",base.rootdata.load("editcv"))
        title.Listen("bfg",(e)=>{
            title.style.color(e.data)  
        })
        id && base.rootdata.save("cvid",id)
        if (!currentCv && id){
            setCurrentCv(()=>{
            let cv = user?.Cvs.filter((c:icv)=>c.id == id)[0]
            return cv
            })
        }

        if (!user){setUser(base.rootdata.access.user)}
        
    })

    
    return <base.Render  paddingBottom="20px" paddingInline="20px">
        <Div>
            <content.Render gap="20px" display="grid">
                
                <Div minHeight="80vh" {...HeadWind.FlexColumn("30px")}>
                    <title.Render height="fit-content" fontSize="20px" value={currentCv?.title} width = "100%" maxWidth="700px" padding="20px" paddingBlock="10px" background="white" fontWeight="bold" borderRadius="15px" boxSizing="border-box" color="black" placeholder="Title"></title.Render>
                    <Div {...HeadWind.Square("%")} boxSizing="border-box" {...HeadWind.GridRow("auto 1fr")} padding="10px" maxHeight="600px">
                        <Div></Div>

                        <Editor placeholder="Create a New CV Project" value={!base.rootdata.has("editcv")?(currentCv?currentCv.content:""):base.rootdata.access.editcv} style={{width:"100%",height:"500px"}}  onTextChange={(e) =>{base.rootdata.save("editcv",e.htmlValue)}} />
                    </Div>
                </Div>
                <Div width="100%" display="grid" placeItems="center">
                    <RightBar/>
                </Div>
            </content.Render>
        </Div>
        
    </base.Render>
}