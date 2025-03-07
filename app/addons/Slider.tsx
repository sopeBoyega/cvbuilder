// "use client"

import React, { ReactNode } from "react"
import { ListChildren } from "./basicrouter"
import { BaseElementProps, Div } from "./csml"
import BaseHOC from "./HOC"
import { LastIndex } from "./anys"


export default class SliderHOC{
    children:ReactNode[] = []
    control:BaseHOC<{SELF?:any}>
    widthDivideList:number[] = []
    direction
    currentIndex = 0
    slideTime
    effect
    refType:any
    innerFrame:BaseHOC<{}>
    blockLoop:boolean = false
    constructor({direction="row",slideTime = 300,blockLoop = false,effect = "ease-in-out", refType = React.useRef}){
        this.direction = direction
        this.slideTime = slideTime
        this.effect = effect
        this.refType = refType
        this.blockLoop = blockLoop
        this.control = new BaseHOC<{SELF?:any}>({Component:(
            {SELF,...props}:BaseElementProps<HTMLDivElement>&{SELF:SliderHOC}
        )=><this._SliderComponent SELF={SELF} {...props}></this._SliderComponent>,
        refee:this.refType((null as any))})
        this.innerFrame = new BaseHOC<{}>({Component:Div,refee:this.refType((null as any))})
    }

    slide(index:number | Function){
        const lastIndex = this.children.length-1
        const lengthOf = this.children.length
        const indexPosX:number[] = []
        const indexPosY:number[] = []
        var inputIndex = typeof index == "function"?index(this.currentIndex):(index as number)

        this.innerFrame.style.transition(`transform ${this.slideTime}ms ${this.effect}`)
        /*  */
        this.children.map((_:any,cindex:number)=>{
            this.innerFrame.Execute((frame:HTMLBaseElement)=>{
                this.control.Execute((_parent:HTMLBaseElement)=>{
                    const frameWidth = frame.scrollWidth
                    const frameHeight = frame.scrollHeight
                    var x = cindex*(frameWidth/lengthOf)
                    const y = cindex*(frameHeight/lengthOf)
                    if (x > frameWidth || y > frameHeight){
                        return
                    }
                    indexPosX.push(x)
                    indexPosY.push(y)
                })
            })
        }) 
        if (this.blockLoop)
            {
                inputIndex = inputIndex<lengthOf?inputIndex:this.currentIndex
                inputIndex = inputIndex>=0?inputIndex:this.currentIndex
            }
        else{
            if (inputIndex <0){
                inputIndex = lastIndex
            }
        }
        var scroll = (inputIndex%lengthOf)*100
        if (this.direction.toLowerCase().trim() == "row"){
            this.control.Execute((parent:HTMLBaseElement)=>{
                this.innerFrame.style.transform(`translateX(-${scroll}%)`)
            })
        }
        else if (this.direction.toLowerCase().trim() == "column"){
            this.control.Execute((parent:HTMLBaseElement)=>{
                this.innerFrame.style.transform(`translateY(-${scroll}%)`)
            })
        }
        /* console.log(this.direction)
        console.log(inputIndex) */
        this.currentIndex = inputIndex%lengthOf
    }

    Render({self,...props}:BaseElementProps<HTMLDivElement>&{self:SliderHOC}){
        return <self.control.Render self={self.control} SELF = {self} {...props}></self.control.Render>
    }

    protected _SliderComponent({SELF,...props}:BaseElementProps<HTMLDivElement>&{SELF:SliderHOC}){
        const _children = props.children
        const children:ReactNode[] = ListChildren(_children,{})
        SELF.children = children
        var Style:{[key:string]:any} = {
            ...props.style,
            overflow:"hidden",
            boxSizing:"border-box"
        }
        var innerFrameStyle:{[key:string]:any} = {
            display:"flex",
            width:"100%",
            height:"100%",
            overflow:"visible",
            minWidth:"100%",
            minHeight:"100%",
            flexDirection:SELF.direction
            
        }
       
        return <Div width="100%" height="100%" {...props} style={Style} >
            <SELF.innerFrame.Render self={SELF.innerFrame} style={innerFrameStyle} comment="FlipInnerFrame">
                {children.map((child:ReactNode,index:number)=>{
                    return <Div key={index} width="100%"
                     padding = {props.padding} 
                    paddingBlock={props.paddingBlock} 
                    paddingInline={props.paddingInline} 
                    paddingTop={props.paddingTop} 
                    paddingBottom={props.paddingBottom} 
                    paddingLeft={props.paddingLeft} 
                    paddingRight={props.paddingRight} 
                    paddingBlockStart={props.paddingBlockStart} 
                    paddingBlockEnd={props.paddingBlockEnd} 
                    paddingInlineStart={props.paddingInlineStart} 
                    paddingInlineEnd={props.paddingInlineEnd} 
                    height="100%" 
                    minWidth="100%" 
                    minHeight="100%" 
                    overflow="auto">
                        {child}
                    </Div>
                })}
            </SELF.innerFrame.Render>
        </Div>
    }
}