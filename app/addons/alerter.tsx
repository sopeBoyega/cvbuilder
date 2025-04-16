"use client"
import { dict, useStateUpdate } from "./anys";
import BaseHOC from "./HOC";
import { BaseElementProps, Div, EButton, Pre } from "./csml";
import { ICssHelper } from "./css";
import { useEffect } from "react";

type DictButton = {innerText:string} & BaseElementProps<HTMLDivElement>

export default class Alerter{
    private wrapper = new BaseHOC()
    control = new BaseHOC()
    info = new BaseHOC()
    globalButtonsProps:dict = {}
    wrapperStyle:ICssHelper = {}
    infoStyle:ICssHelper = {}
    defaultButton:DictButton = {innerText:"OK",textAlign:"left"}
    private daButtons:any[] = [
        <EButton key = {1} backgroundColor={"rgba(59, 130, 246, 0.7)"} onClick={()=>{this.close()}} color={"white"}>ok</EButton>,
        
    ]
    protected update:any
    
    open(){
        this.wrapper.SetVariable("display","grid")
        this.update()
        setTimeout(() => {
            this.control.style.opacity ("1")
            this.control.style.translate ("0px 0px")
        }, 10);
        
    }
    close(){
        this.wrapper.SetVariable("display","none")
        this.control.style.translate ("0px 40px")
        this.control.style.opacity ("0")
        setTimeout(() => {
            this.update()
        }, 300);
    }
    constructor(button:BaseElementProps<HTMLDivElement> = {}){
            this.globalButtonsProps  = {
                backgroundColor:"rgba(59, 130, 246, 0.7)",
                color:"white",
                textAlign:"center",
                onClick:()=>{this.close()},
                ...button
            }
        this.wrapper.SetVariable("display","none")
    }

    ask(message:string,buttons?:DictButton[]){
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
        
        this.info.SetVariable("innerText",message)
        this.open()
        
    }

    Alert(message:string){
        this.ask(message)
    }

    Render = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        this.update = useStateUpdate()
        return <this.wrapper.Render comment="Alerter"  background="rgba(0,0,0,0.7)" backdropFilter="blur(10px)" {...(this.wrapperStyle as dict)} position="fixed" width="100vw" height="100vh" top="0" left="0"  zIndex="1000" display={this.wrapper.GetVariable("display")} placeItems="center">
                <this.control.Render minHeight="150px" transition="translate 0.4s ease-in-out, opacity 0.4s ease-in-out" opacity="1" translate="0px 0px" gap="20px" boxSizing="border-box" minWidth="200px" maxWidth="300px" width="90%" overflowX="hidden"  padding="20px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" borderRadius="15px" background="rgba(80,80,80,0.3)" {...props}>
                    <this.info.Render width="100%" textAlign="center" {...(this.infoStyle as dict)}>
                           {String(this.info.GetVariable("innerText")).split("\n").map((str:string,index:number)=><Div width="100%" textAlign="center" key={index}>{str}</Div>)}
                    </this.info.Render>
                    <Div display="grid" width="100%" gap="10px" gridTemplateColumns="repeat(auto-fit,minmax(90px,1fr))">
                        {this.daButtons}
                    </Div>  
                </this.control.Render>
        </this.wrapper.Render>
    }
    
}