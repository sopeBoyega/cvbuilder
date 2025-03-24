"use client"
import React, {FC, ReactNode, useState} from "react"
import { _cssHelper } from "./css"
import { BaseElementProps, Div } from "./csml"
import {Dict, useUpdate} from "@/app/addons/anys";
import {ListChildren} from "@/app/addons/anys";

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
     *     return <hoc.Render >test</hoc.Render>
     * }
     * 
     * ```
     * *GUDITTON*
     */
export default class BaseHOC<T = {},ElementInterface = HTMLBaseElement>{
    
    protected ref:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined> | React.RefObject<null>
    public style
    public isMediaDestroyed: boolean
    protected Component
    public medias:{[key:string]:AtMedia} = {}
    public variables:{[key:string]:any} = {}
    public existAs
    protected forceUpdate?:Function
    public Addons:Dict<any[]> = {}
    protected setAddons:any
    protected setAddonProps:any
    protected addonProps:Dict = {}
    SetVariable(name:string, value: any){
        this.variables[name]=value
    }

    GetVariable(name:string) {
        return this.variables[name]
    }
    Update(){
        if (this.forceUpdate){
            this.forceUpdate()
        }
    }

    GetVariableType(name:string) {
        return typeof (this.variables[name])
    }

    constructor ({Component = Div,existAs, refee = React.useRef(null) }:{Component?:FC ,existAs?:Function,refee?:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined> | React.RefObject<null>} = {}){
        this.isMediaDestroyed = false
        this.ref = refee
        this.existAs = existAs
        this.style = {..._cssHelper}
        this.Component = Component
        this.EffectifyStyle()

    }
    AddMedia(id:string,Media:AtMedia){
        this.medias = {
            ...this.medias,
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
    get Element():ElementInterface | undefined|null{
        if (this.existAs) {
            return this.existAs()
        }else{
            return this.ref.current
        }
    }
    innerText (val:string){
        if (this.Element){
            this.Element.innerText = val
        }
    }innerHTML (val:string){
        if (this.Element){
            this.Element.innerHTML = val
        }
    }
    protected EffectifyStyle(){
        for ( const key of Object.keys(_cssHelper)){
            this.style = {...this.style,[key]:(value?:string)=>{
                const element = this.Element
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

     public Execute(func:Function){
        const element =this.Element
        if (element){
            func(element)
        }
    }


    ToRender = ({children,renderId ,...props}:BaseElementProps<HTMLDivElement> & {renderId:any}) => {
        this.setAddons((e:any)=>{return {...e,[renderId]:ListChildren(children)}})
        
        this.setAddonProps((p:any)=> {
            return{...props,...p} 
        })

        this.Update()
        return <></>
    }
    Render:FC<BaseElementProps<HTMLDivElement>& T> =(props:BaseElementProps<HTMLDivElement>& T) =>{
            this.forceUpdate = useUpdate()
            const addonsState = useState({})
            this.Addons = addonsState[0]
            this.setAddons = addonsState[1]
            const addonPropsState = useState([])
            this.addonProps = addonPropsState[0]
            this.setAddonProps = addonPropsState[1]

            return <this.Component Ref = {this.ref} {...props} {...this.addonProps} >
                {props.children}
                {Object.values(this.Addons)}
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


export var HOCS = {
    
}
export class InputHOC extends BaseHOC<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>{}


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
