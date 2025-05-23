import { useEffect } from "react"
import HeadWind from "./headwind"
import BaseHOC from "./HOC"
import { FromPercent } from "./anys"
import { Solitreo } from "next/font/google"
import { BaseElementProps } from "./csml"


export default class Glow{
    protected color:string
    protected size:number
    soul:BaseHOC
    protected speed:number
    protected opacity:number
    protected parent:(el:Element | null | undefined)=>Element | null
    constructor ({color = "white", size = 100,speed = 15,opacity = 0.5,dispatcher=(el:Element | null | undefined)=>el !=null? el.parentElement:null} = {}){
        this.color = this.gradifyColor(color)
        this.size = size *2
        this.soul = new BaseHOC()
        this.speed = speed/1000
        this.opacity = opacity
        this.parent = dispatcher
    }
    protected gradifyColor(color:string){
        return `radial-gradient(circle,${color} , rgba(0, 0, 0, 0) 50%)`
    }
    setColor(color:string){
        this.color = this.gradifyColor(color)
        this.soul.style.background(this.color)
    }
    setSize(size:number){
        this.size = size*2
        this.soul.style.addStyle({...HeadWind.Square(`${this.size}px`)})
    }
    Render = (props:BaseElementProps<HTMLDivElement>)=>{
        useEffect(()=>{
            let soul = this.soul;
            let parent = soul.Element?.parentElement
            if (parent != null){ 
               soul.set("cx",0)
               soul.set("cy",0)
               soul.set("mx",0)
               soul.set("my",0)
               soul.set("speed",this.speed)
               function setCoords(){
                        soul.set("cx",soul.get("cx") + ((soul.get("mx") - soul.get("cx"))*soul.get("speed")))
                        soul.set("cy",soul.get("cy") + ((soul.get("my") - soul.get("cy"))*soul.get("speed")))
                        soul.style.top (`${soul.get("cy")-((soul.Element as any).clientWidth/2)}px`);
                        soul.style.left (`${soul.get("cx")-((soul.Element as any).clientHeight/2)}px`);
                        requestAnimationFrame(setCoords)
               }
            //    parent.style.position = "relative"
                setCoords()
                this.parent(soul.Element)?.addEventListener('mousemove', function(event:any) {
                const e = event as MouseEvent
                soul.Execute((element)=>{
                    soul.style.display("block")
                        const rect = parent.getBoundingClientRect() 
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        soul.set("mx",x)
                        soul.set("my",y)
                        console.log(soul.get("cx"),soul.get("cy"))
                })
            })
        }
            
        },[])
        return <this.soul.Render backgroundImage={this.color} opacity={`${this.opacity}`} {...HeadWind.Square(`${this.size}px`)} position="absolute" zIndex="0"  borderRadius="50%"  top="0px" left="0px" {...props}></this.soul.Render>
    }
}