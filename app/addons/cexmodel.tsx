import { useEffect, useRef,FC } from "react"
import { mergeText } from "./anys"

export interface CIEvent extends Event{
    detail:{
        channel:string,
        data:any
    }
}



export class CEXModel{
    
    
    uniType
    channels:string[] = []
    constructor(uniType:string){
        this.uniType = uniType

    }
    CEventX(channel:string,data = {}){return new CustomEvent(this.uniType,{detail:{channel:channel,data:data}})}
    FIDispatch(Event:CustomEvent,selector = "*"){
        if (window){
            
            const ListAll = document.querySelectorAll(`.${selector}`)
            ListAll.forEach((el)=>{
                el.dispatchEvent(Event)
            })
        }
    }

    CEXDispatch(channel:string,data:string|{}|number = {}){this.FIDispatch(this.CEventX(channel,data),this.uniType)}

    CEventXHC ({channel,Public,hangOn = ()=>document.body,onEvent,idAdd=""}:{channel:string,Public?:Function,hangOn?:Function, onEvent?:Function,idAdd?:string}){
      Public = Public || function(..._arg:any[]){}
      onEvent = onEvent || function(..._arg:any[]){}
      if (window){
        const func = onEvent
        const Channel = channel
        const type = this.uniType
        const id = `${this.uniType}-${channel}-${idAdd}`
        if (document.getElementById(id)){}else{  const el = document.createElement("div")
          el.id = id
          el.style.display = "none"
          el.className = this.uniType
          el.addEventListener(type,(e:(CIEvent | Event))=>{
              Public(e)
              var E = (e as CIEvent)
              if (E.detail.channel == Channel){
                  func(e)

              }
          })
          hangOn().appendChild(el)}
      }
    }

    CEventXH:FC<{channel:string,self:CEXModel,Public?:Function,onEvent?:Function,idAdd?:string}> =(
        {channel = "",self, Public = function(..._arg:any[]){},idAdd="", onEvent = function(..._arg:any[]){}}
    )=>{
        self = this?this:self
        self.channels.push(channel)
        const ref:any = useRef()
        useEffect(
            ()=>{
                const func = onEvent
                const type = self.uniType
                const el:HTMLBaseElement = ref.current 
                el.id = `${self.uniType}-${channel}-${idAdd}`
                el.addEventListener(type,(e:(CIEvent | Event))=>{
                    Public(e)
                    var E = (e as CIEvent)
                    if (E.detail.channel == channel){
                        func(e)

                    }
                })
    
            },[]
        )
        return <div ref={ref} className={mergeText(self.uniType)} style={{display:"none"}} />
    }
}