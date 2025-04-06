"use client"
import React, { FC, ReactNode } from "react";
import { BaseElementProps } from "./csml";
import { CEXModel, CIEvent} from "./cexmodel"
import {ListChildren, RandInt} from "./anys";


export default class RouterComponent {

    pages: { [key: string]: ReactNode } = {};
    pageNameList:string[] = []
    defaultPage:string = ""
    channel:string = ""
    children:any[] = []
    changeModel = new CEXModel("RouterChangeModel")
    // props:React.PropsWithChildren<any>


    CreatePage(PageName:string,tag = "div"){
        this.pageNameList.push(PageName)
        var Component =({...props}:BaseElementProps<HTMLParagraphElement>)=>{
            return <>{React.createElement(tag,props)}</>
        }
        return Component
    }

    GetPage(PageName:string){
        return this.pages[PageName]
    }


    Refine(): void {
        var children = ListChildren(this.children,{})
        this.pageNameList.forEach((Name:string,index:number)=>{
            this.pages[Name] = children[index] || children[0]
        })
        this.defaultPage = this.pageNameList[0]
        
    }

    DisplayPage(PageName:string){
        this.changeModel.dispatcher[this.channel]({name:PageName})
    }

    View = ({tag = "div",children,className,...props}:{children?:any,tag?:string,className?:string} & BaseElementProps<HTMLDivElement>)=>{
        this.children = children || []
        this.Refine()
        const channel = this.channel
        const [currentPage,setCurrentPage] =  React.useState(this.defaultPage)
        function TriggerDisplayPage(event:CIEvent){
            setCurrentPage(()=>event.detail.data.name)
            console.log(channel," pageing ",event.detail.data.name)
        }
        var ReturnEl = React.createElement(tag,{className:className,...props},[this.GetPage(currentPage),
        <this.changeModel.CEXRenderCreate channel={this.channel} key="1" onEvent={TriggerDisplayPage} ></this.changeModel.CEXRenderCreate>])
        return ReturnEl
    }

    constructor (channel:string = ""){
        this.channel = `${RandInt(0,4000)}-${channel}`
    }
}
