"use client"
import React, { FC, ReactNode, useEffect } from "react"
import { _cssHelper } from "./css"
import { BaseElementProps, Div } from "./csml"
import { ListChildren } from "./basicrouter"
import {Timeout} from "@mui/utils/useTimeout";


/**
     * 
     * `BaseHOC` is a higher order component that lets you manipulate your element easier than `useRef`.
     * The `Component` param is the component which `BaseHOC` represents.
     * The `refee` param is `BaseHOC` Component ref, it is optional.
     * 
     * remember it is built for the CSML components.
     * 
     * **How to Use**
     *
     * ```
     * function testHoc(props){
     *     var hoc = new BaseHOC({Component:Div}) // for class Component ```new BaseHOC({Component:Div, refee:createRef()}) ```
     *     useEffect(()=>{
     *         settimeout(()=>{
     *              hoc.style.backgroundColor("red")
     *              hoc.style.transition("opacity 0.3s ease-in-out")
     *              hoc.Execute(element=>{
     *                      element.style.opacity = "0"
     *                  })
     *         },3000)
     *     },[])
     *     return <hoc.Render self={hoc}>test</hoc.Render>
     * }
     * 
     * ```
     * *GUDITTON*
     */



export default class BaseHOC<T = {}>{
    
    protected ref:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined>
    public style
    public isMediaDestroyed: boolean
    protected Component
    public medias:{[key:string]:AtMedia} = {}
    constructor ({Component = Div , refee = React.useRef(null) }:{Component?:any ,refee?:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined>}){
        this.isMediaDestroyed = false
        this.ref = refee
        this.style = {..._cssHelper}
        this.Component = Component
        this.EffectifyStyle()
    }
    AddMedia(id:string,Media:AtMedia){
        this.medias = {
            [id]:Media
        }
    }
    DestroyMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Destroy()
        }
    }
    PauseMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Pause()
        }
    }
    ContinueMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Continue()
        }
    }
    protected EffectifyStyle(){
        for ( const key of Object.keys(_cssHelper)){
            this.style = {...this.style,[key]:(value?:string)=>{
                const element = this.ref.current
                    if (element){
                        if (value) {
                            element.style[key] = value
                            // console.log(element.style[key])
                            }
                        else{
                        return element.style[key]
                        }
                    }

            }}
        }
    }

    /**
     * 
     *  `Execute`: safely run functions with your element without ```if (element.current){}```
     *  just by passing your function into the `Execute` method and getting the element as an argument
     * 
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    public Execute(func:Function){
        const element = this.ref.current
        if (element){
            func(element)
        }
    }
    /**
     *
     * @example
     * ```
     * <hoc.Render ></hoc.Render>
     * ```
     * @returns `BaseHOC.Component`
     * @param props
     */
    Render:FC<BaseElementProps<HTMLDivElement>& T> =(props:BaseElementProps<HTMLDivElement>& T) =>{
            return <this.Component Ref = {this.ref} {...props}>
                {props.children}
            </this.Component>
    }
}


class AtMedia{
    isDestroyed: boolean = false
    isPaused: boolean = false
    media:string = "max-width"
    pixels:number = 800
    interval:any
    mediaElementFunc = ()=>window
    styleat = {}
    styleaf = {}
    hoc:BaseHOC
    constructor(hoc:BaseHOC,{media = "max-width",pixels = 800,mediaElementFunc = ()=>window,styleat = {},styleaf = {}} = {}){
        this.media = media
        this.mediaElementFunc = mediaElementFunc
        this.styleaf = styleaf
        this.styleat = styleat
        this.pixels = pixels
        this.hoc = hoc
    }
    Destroy (){
        this.isDestroyed = true
    }

    Pause(){
        this.isPaused = true
    }

    Continue(){
        this.isPaused = false
    }

    Activate(){
        this.interval = setInterval(() => {
            this.hoc.Execute(()=>{
                if (this.isDestroyed){
                    clearInterval(this.interval)
                    this.isDestroyed = false
                }
                const mediaer = this.mediaElementFunc()
                if (!this.isPaused){
                    if (mediaer.matchMedia(`(${this.media}:${this.pixels}px)`).matches) {
                        for (const key of Object.keys(this.styleat)) {
                            this.hoc.style[(key)](this.styleat[(key)]);
                            // console.log(`[${this.styleat[key]}] ${this.style[key]()}`)
                        }
                    } else {
                        for (const key of Object.keys(this.styleaf)) {
                            this.hoc.style[(key)](this.styleaf[(key)]);
                            // console.log(`[${styleaf[key]}] ${this.style[key]()}`)
                        }
                    }
                }
            })
        },1)
    }
}



/**
 *  Don't use this
 */
export class MessageLabelHOC{
    Ref
    PRef
    Com
    constructor(labelCom = Div,ref = React.useRef<HTMLDivElement>(null),pref = React.useRef<HTMLDivElement>(null)){
        this.Ref = ref
        this.PRef = pref
        this.Com = labelCom
    }

    DisplayMessage({message = "",timeout = 4000,color="cyan",ondone=()=>{},leavetime = 300,...props}){
        if (this.Ref.current && this.PRef.current){
            this.Ref.current.innerHTML = `<span >${message}</span>`
            this.Ref.current.style.color = color
            for (var key in props){
                this.Ref.current.style[(key as any)] = props[key]
            }
            this.PRef.current.style.opacity = "1"
            this.PRef.current.style.transition=`opacity ${leavetime/1000}s ease-in-out`
            setTimeout(() => {
            if (this.PRef.current){this.PRef.current.style.opacity = "0";
           setTimeout(()=>{ ondone()},leavetime)}
                
            }, timeout);
        }
        
    }
    Run = (props: BaseElementProps<HTMLDivElement>) => {

        return <this.Com  opacity="0" { ...props} Ref={this.PRef}><Div Ref={this.Ref}>{props.children}</Div></this.Com>
    }

}
