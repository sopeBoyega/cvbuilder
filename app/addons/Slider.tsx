"use client"

import React, { FC, ReactNode, useEffect } from "react"
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
    fitContent:boolean = false
    FrameHocs:BaseHOC<{}>[] = []
    

    constructor({direction="row",fitContent = false,slideTime = 300,blockLoop = false,effect = "ease-in-out", refType = React.useRef}){
        this.direction = direction
        this.slideTime = slideTime
        this.effect = effect
        this.refType = refType
        this.blockLoop = blockLoop
        this.fitContent = fitContent
        this.control = new BaseHOC<{}>({Component:(
            {...props}:BaseElementProps<HTMLDivElement>
        )=><this._SliderComponent  {...props}></this._SliderComponent>,
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
        if (this.fitContent){this.FrameHocs.map(frameHoc=>{
            frameHoc.style.display("none")
        })
        this.FrameHocs[inputIndex%lengthOf].style.display("block")}
        /* console.log(this.direction)
        console.log(inputIndex) */
        this.currentIndex = inputIndex%lengthOf
    }

    Render:FC<BaseElementProps<HTMLDivElement>> = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        return <this.control.Render  {...props}></this.control.Render>
    }

    protected _SliderComponent = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        const _children = props.children
        const children:ReactNode[] = ListChildren(_children,{})
        this.children = children
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
            flexDirection:this.direction
            
        }
        children.map((child:ReactNode,index:number)=>{
            var component = (props:BaseElementProps<HTMLDivElement>)=><Div key={index} width="100%"
            
           height="100%" 
           display="block"
           minWidth="100%" 
           minHeight="100%" 
           overflow="auto">
               {child}
           </Div>
           var hoc = new BaseHOC<{}>({Component:component})
           this.FrameHocs.push(hoc)
        })
        useEffect(()=>{
            if (this.fitContent){this.FrameHocs.map(frameHoc=>{
                    frameHoc.style.display("none")
                })
                this.FrameHocs[0].style.display("block")}
        },[])
       
        return <Div width="100%" height="100%" {...props} style={Style} >
            <this.innerFrame.Render  style={innerFrameStyle} comment="FlipInnerFrame">
                {this.FrameHocs.map((frameHoc:BaseHOC<{}>,index:number)=>{
                    return <frameHoc.Render key={index}></frameHoc.Render>
                })}
            </this.innerFrame.Render>
        </Div>
    }
}