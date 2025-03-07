"use client"

import React, { ReactNode } from "react"
import { ListChildren } from "./basicrouter"
import { BaseElementProps, Div } from "./csml"
import BaseHOC from "./HOC"
import { LastIndex } from "./anys"


export default class Slider{
    children:ReactNode[] = []
    control:BaseHOC<{SELF?:any}>
    widthDivideList:number[] = []
    direction
    currentIndex = 0
    speed
    effect
    innerFrame:BaseHOC<{}>
    constructor(direction="row",speed = 300, effect = "ease-in-out"){
        this.direction = direction
        this.speed = speed
        this.effect = effect
        this.control = new BaseHOC<{SELF?:any}>({Component:(
            {SELF,...props}:BaseElementProps<HTMLDivElement>&{SELF:Slider}
        )=><this._SliderComponent SELF={SELF} {...props}></this._SliderComponent>,
        refee:React.useRef((null as any))})
        this.innerFrame = new BaseHOC<{}>({Component:Div,refee:React.useRef((null as any))})
    }

    slide(index:number | Function){
        const inputIndex = typeof index == "function"?index(Math.abs(this.currentIndex)):(index as number)
        const lastIndex = this.children.length
        const lengthOf = this.children.length
        const indexPosX:number[] = []
        const indexPosY:number[] = []
        var scroll = 0
        this.innerFrame.style.transition(`transform ${this.speed}ms ${this.effect}`)
        console.log(this.direction)
        console.log(inputIndex)
        this.children.map((_:any,cindex:number)=>{
            this.innerFrame.Execute((frame:HTMLBaseElement)=>{
                this.control.Execute((_parent:HTMLBaseElement)=>{
                    const frameWidth = frame.scrollWidth
                    const frameHeight = frame.scrollHeight
                    var x = cindex*(frameWidth/lastIndex)
                    const y = cindex*(frameHeight/lastIndex)
                    if (x > frameWidth || y > frameHeight){
                        return
                    }
                    indexPosX.push(x)
                    indexPosY.push(y)
                })
            })
        })  
        if (this.direction.toLowerCase().trim() == "row"){
            scroll = indexPosX[inputIndex%lengthOf]
            this.control.Execute((parent:HTMLBaseElement)=>{
                scroll = (scroll/parent.offsetWidth)*100
                this.innerFrame.style.transform(`translateX(-${scroll}%)`)
            })
        }
        else if (this.direction.toLowerCase().trim() == "column"){
            scroll = indexPosY[inputIndex%lengthOf]
            this.control.Execute((parent:HTMLBaseElement)=>{
                scroll = (scroll/parent.offsetHeight)*100
                this.innerFrame.style.transform(`translateY(-${scroll}%)`)
            })
        }
        this.currentIndex = inputIndex
    }

    Render({self,...props}:BaseElementProps<HTMLDivElement>&{self:Slider}){
        return <self.control.Render self={self.control} SELF = {self} {...props}></self.control.Render>
    }

    protected _SliderComponent({SELF,...props}:BaseElementProps<HTMLDivElement>&{SELF:Slider}){
        const _children = props.children
        const children:ReactNode[] = ListChildren(_children,{})
        SELF.children = children
        var Style:{[key:string]:any} = {
            ...props.style,
            overflow:"hidden"
        }
        var innerFrameStyle:{[key:string]:any} = {
            display:"flex",
            width:"100%",
            height:"100%",
            overflow:"visible",
            minWidth:"100%",
            minHeight:"100%",
            background:"black",
            flexDirection:SELF.direction
            
        }
       
        return <Div width="100%" height="100%" {...props} style={Style} >
            <SELF.innerFrame.Render self={SELF.innerFrame} style={innerFrameStyle} comment="FlipInnerFrame">
                {children.map((child:ReactNode,index:number)=>{
                    return <Div key={index} width="100%" height="100%" minWidth="100%" minHeight="100%">
                        {child}
                    </Div>
                })}
            </SELF.innerFrame.Render>
        </Div>
    }
}