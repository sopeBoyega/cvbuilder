"use client"
import { dict, useStateUpdate } from "./anys";
import BaseHOC from "./HOC";
import { BaseElementProps, Div, EButton, Pre } from "./csml";
import { ICssHelper } from "./css";
import { FC, ReactNode, useEffect } from "react";

type DictButton = {innerText:ReactNode} & BaseElementProps<HTMLDivElement>

export default class Alerter{
    protected wrapper = new BaseHOC()
    control = new BaseHOC()
    info = new BaseHOC()
    globalButtonsProps:dict = {}
    wrapperStyle:ICssHelper = {}
    controlStyle:ICssHelper = {}
    protected loadingControlStyle:ICssHelper = {}
    infoStyle:ICssHelper = {}
    defaultButton:DictButton = {innerText:"OK",textAlign:"left"}
    isOpened = false
    innerText:ReactNode = undefined
    display = ""
    loadingIconClassName = "loadingIcon"
    cache:dict = {}
    isloadify = false
    tapParentToClose = false
    protected previousAlert: "NONE" | "ASK" | "ALERT" | "LOADIFY" | "ICONIFY" = "NONE"
    protected daButtons:any[] = [
        <EButton key = {1} backgroundColor={"rgba(59, 130, 246, 0.7)"} onClick={()=>{this.close()}} color={"white"}>ok</EButton>,
        
    ]
    update:any
    
    protected open(){

        this.display = "grid"
        this.update()
        this.isOpened = true
        setTimeout(() => {
            this.control.style.opacity ("1")
            this.control.style.translate ("0px 0px")
            

        }, 10);
        
    }
    close(){
        this.display = "none"
        this.control.style.translate ("0px 40px")
        this.control.style.opacity ("0")
        this.isOpened = false
        setTimeout(() => {
            this.update()
        }, 300);
    }
    constructor(globalButtonsProps:BaseElementProps<HTMLDivElement> = {}){
            this.globalButtonsProps  = {
                backgroundColor:globalButtonsProps.background || "rgba(59, 130, 246, 0.7)",
                color:"white",
                textAlign:"center",
                onClick:()=>{this.close()},
                ...globalButtonsProps
            }
        this.display = "none"
    }

    protected generateButtons(buttons?:DictButton[]){
        this.daButtons = []
        if (!buttons){
            buttons = [this.defaultButton]
        }
        let ky = 0
        for (let button of buttons){
            ky ++
            const innerText = button.innerText
            button = button
            const props:dict = {}
            for(let key of Object.keys(button))
                if (key != "innerText"){
                    props[key] = (button as dict)[key]
                }
            let buttonCom = [<EButton key = {ky} {...this.globalButtonsProps}  {...props}>{innerText}</EButton>]
            this.daButtons.push(buttonCom[0])
        }
    }
    ask(message:ReactNode,buttons?:DictButton[],tapParentToClose?:boolean){
        this.tapParentToClose = tapParentToClose != undefined ? tapParentToClose : true
        this.isloadify = false
        this.generateButtons(buttons)        
        this.innerText = message
        this.open()
        this.previousAlert = "ASK"
    }

    Alert(message:ReactNode){
        this.ask(message)
        this.previousAlert = "ALERT"
    }

    Iconify(com:ReactNode,buttons:DictButton[] = [],tapParentToClose?:boolean){
        this.ask(com,buttons,tapParentToClose)
        this.previousAlert = "ICONIFY"
       
    }

    Loadify(text?:ReactNode,{className,loadifyWrapperStyle = {gap:"20px"},style = {background:"transparent"}}:{className?:string ,style?:ICssHelper,loadifyWrapperStyle?:ICssHelper} = {}){
        if (className == undefined){
            className = this.loadingIconClassName
        }
        this.isloadify = true
        this.loadingControlStyle  = style
        this.Iconify(<Div display="flex" alignItems="center" justifyContent="center" {...(loadifyWrapperStyle as dict)}>
            <Div className={className}></Div>
            {text != undefined &&text}
        </Div>,undefined,false)
        this.isloadify = true
        this.previousAlert = "LOADIFY"
    }

    Render = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        this.update = useStateUpdate()
        return <this.wrapper.Render comment="Alerter"  background="rgba(0,0,0,0.7)" backdropFilter="blur(10px)" {...(this.wrapperStyle as dict)} position="fixed" width="100vw" height="100vh" top="0" left="0"  zIndex="1000" display={this.display} placeItems="center" onClick={
            (e)=>{
                this.wrapper.Execute((element)=>{
                    if (e.target == element){
                        if (this.tapParentToClose && this.previousAlert != "LOADIFY"){
                            this.close()
                        }
                    }
                })
            }
        }>
                <this.control.Render minHeight="150px" transition="translate 0.4s ease-in-out, opacity 0.4s ease-in-out" opacity="1" translate="0px 0px" gap="20px" boxSizing="border-box" minWidth="200px" maxWidth="300px" width="90%" overflowX="hidden"  padding="20px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" borderRadius="15px" background="rgba(80,80,80,0.3)" {...(this.controlStyle as dict)} {...(this.isloadify? this.loadingControlStyle as dict:{})} {...props}>
                    <this.info.Render width="100%" display="flex" justifyContent="center" gap="20px" alignItems="center" flexDirection="column" {...(this.infoStyle as dict)}>
                           {this.innerText != undefined && <Div width="100%" textAlign="center">{this.innerText}</Div>}
                    </this.info.Render>
                     {this.daButtons.length > 0 && <Div display="grid" width="100%" gap="10px" gridTemplateColumns="repeat(auto-fit,minmax(90px,1fr))">
                        {this.daButtons}
                    </Div>  }
                </this.control.Render>
        </this.wrapper.Render>
    }
    
}