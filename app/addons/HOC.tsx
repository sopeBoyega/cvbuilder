"use client"
import React, {FC, ReactNode, useEffect, useState} from "react"
import { _cssHelper, ICssHelper } from "./css"
import { BaseElementProps, ConvertDictToStyle, Div, Hidden } from "./csml"
import {dict, ReplaceAll, useStateUpdate, useUpdate} from "@/app/addons/anys";
import {ListChildren} from "@/app/addons/anys";
import { ObjectEvent } from "./ObjectEvent";

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
export default class BaseHOC<CustomProps = {},ElementInterface = HTMLDivElement>{
    
    protected ref:React.RefObject<ElementInterface> | React.MutableRefObject<undefined> | React.RefObject<null>
    public style
    public isMediaDestroyed: boolean
    protected Component
    public medias:dict<AtMedia> = {}
    public variables:dict = {}
    public existAs
    protected forceUpdate?:Function
    public Addons:dict<any[]> = {}
    protected setAddons:any
    protected setAddonProps:any
    protected addonProps:dict = {}
    protected ConstTypeName = "-Const"
    protected onChangeTypeName = "-ChangeFunc"
    protected EventControl = new ObjectEvent()
    protected clientLoaded = "CLIENT-LOADED"

    SetVariable(name:string, value?: any,onChange?:(name?:string,val?:any)=>void){
        let key = ReplaceAll(name, this.ConstTypeName,"")
        key = ReplaceAll(key, this.onChangeTypeName,"")
        if (!this.variables[key+this.ConstTypeName]) {
            if (!(onChange == undefined)){
                this.variables[key+this.onChangeTypeName] = onChange
            }else if (!this.variables[key+this.onChangeTypeName]){
                this.variables[key+this.onChangeTypeName] = (name?:string,val?:any)=>{}
            }
            if (!(value == undefined)){
                if (this.variables[key]){
                    this.variables[key+this.onChangeTypeName](key,value)
                }
                this.variables[key] = value
                
            }
        }else{
            console.log("tried assigning to a const variable: ",this.variables[key]," with value:",value)
        }
    }

    
    
    ConstVariable(name:string, value: any){
            let key = ReplaceAll(name, this.ConstTypeName,"")
            key = ReplaceAll(key, this.onChangeTypeName,"")
        if (!this.variables[key+this.ConstTypeName]) {
            this.variables[key] = value
            this.variables[key+this.ConstTypeName] = true
        }else{
            console.log("tried assigning to a const variable: ",this.variables[key]," with value:",value)
        }
        
    }

    GetVariable(name:string) {
        // let key = ReplaceAll(name, this.ConstTypeName,"")        
        return this.variables[name]
    }

    GetVariableType(name:string) {
        // let key = ReplaceAll(name, this.ConstTypeName,"") 
        return typeof (this.variables[name])
    }

    IsVariableConst(name:string){
        let key = ReplaceAll(name, this.ConstTypeName,"") 
        return this.variables[key+this.ConstTypeName]
    }

    GetAllVariables(){
        return this.variables
    }

    Update(){
        if (this.forceUpdate){
            this.forceUpdate()
        }
    }

   

    constructor ({Component = Div,existAs, refee = React.useRef(null) }:{Component?:FC ,existAs?:Function,refee?:React.RefObject<ElementInterface> | React.MutableRefObject<undefined> | React.RefObject<null>} = {}){
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
        Media.Activate()
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
    innerText (val?:any){
        if (this.Element){
            if (val){
                (this.Element as any).innerText = val
            }
            else{
                return (this.Element as any).innerText
            }
        }
        return ""
    }
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions){
        this.AtWindow(()=>{
            (this.Element as any).addEventListener(type,listener)
        })
    }

    AtWindow(Func:Function){
        if (this.Element){
            Func()
        }else{
            this.EventControl.on(this.clientLoaded,Func)
        }
        
    }

    innerHTML (val?:any,style?:ICssHelper){
        if (this.Element){
            if (val){
                if (style){
                    val = `<span style = "${ConvertDictToStyle(style)}">${val}</span>`
                }
                (this.Element as any).innerHTML = val
            }
            else{
                return (this.Element as any).innerHTML
            }
        }
        return ""
    }

    protected EffectifyStyle(){
        for ( const key of Object.keys(_cssHelper)){
            this.style = {...this.style,[key]:(value?:string)=>{
                const element = this.Element
                    if (element){
                        if (value) {
                            (element as any).style[key] = value
                            // console.log((element as any).style[key])
                            }
                        else{
                        return (element as any).style[key]
                        }
                    }

            }}
        }
    }

     public Execute(func = (ele:ElementInterface)=>{}){
        const element =this.Element
        if (element){
            func(element)
        }
    }


    ToRender = ({children,renderId ,...props}:BaseElementProps<ElementInterface> & {renderId:any}) => {
        this.setAddons((e:any)=>{return {...e,[renderId]:ListChildren(children)}})
        
        this.setAddonProps((p:any)=> {
            return{...props,...p} 
        })

        return <Hidden></Hidden>
    }
    Render:FC<BaseElementProps<ElementInterface>& CustomProps> =(props:BaseElementProps<ElementInterface>& CustomProps) =>{
            this.forceUpdate = useStateUpdate()
            const addonsState = useState({})
            this.Addons = addonsState[0]
            this.setAddons = addonsState[1]
            const addonPropsState = useState([])
            this.addonProps = addonPropsState[0]
            this.setAddonProps = addonPropsState[1]
            useEffect(()=>{
                this.EventControl.emit(this.clientLoaded)
            })
            return <this.Component Ref = {this.ref} {...props} {...this.addonProps} >
                {props.children}
                {Object.values(this.Addons)}
            </this.Component>
    }
}


export class AtMedia{
    isDestroyed: boolean = false
    isPaused: boolean = false
    media:string[] = ["max-width"]
    pixels:number[] = [800]
    interval:any
    mediaElementFunc = ()=>window
    styleat = {}
    stylebef = {}
    atMedia = (HOC:BaseHOC) => {}
    beforeMedia = (HOC:BaseHOC) => {}
    hasAtMedia = false
    hasBeforeMedia = false
    hoc:BaseHOC
    listMedia:string[] = []
    determinant:string ='and'
    aliveTest = (media:AtMedia) =>{}
    constructor(hoc:BaseHOC,{media = (["max-width"] as string | string[]),determinant = "and",test = (media:AtMedia)=>{},pixels = ([800] as number | number[]),mediaElementFunc = ()=>window ,styleat = {},stylebef = {},atMedia = (HOC:BaseHOC) => {},beforeMedia = (HOC:BaseHOC) => {}} = {}){
        this.media = typeof(media) == "string" ?[media]:media
        this.mediaElementFunc = mediaElementFunc
        this.stylebef = stylebef
        this.styleat = styleat
        this.pixels = typeof(pixels) == "number" ?[pixels]:pixels
        this.atMedia = atMedia
        this.beforeMedia = beforeMedia
        this.hoc = hoc
        this.determinant = determinant
        this.aliveTest = test
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
                    this.listMedia = []
                    for (var idx in this.media){
                        this.listMedia.push(`(${this.media[idx]}:${this.pixels[idx] || this.pixels[Number(idx)-1] || this.pixels[0]}px)`)
                        
                    }
                    // console.log(this.stringMedia)
                     this.aliveTest(this)
                    if (this.listMedia[this.determinant.toLowerCase() == "and"?"every":"some"]((stringMedia:string)=>mediaer.matchMedia(stringMedia).matches)) {
                        // console.log(this.stringMedia)
                        if (!this.hasAtMedia){
                            this.atMedia(this.hoc)
                            this.hasBeforeMedia = false
                            this.hasAtMedia = true
                        }
                        for (const key of Object.keys(this.styleat)) {
                            (this.hoc as any).style[(key)]((this.styleat as any)[(key)]);
                            // console.log(`[${this.styleat[key]}] ${this.style[key]()}`)
                        }
                    } else {
                        if (!this.hasBeforeMedia){
                            this.beforeMedia(this.hoc)
                            this.hasAtMedia = false
                            this.hasBeforeMedia = true
                        }
                        for (const key of Object.keys(this.stylebef)) {
                            (this.hoc as any).style[(key)]((this.stylebef as any)[(key)]);
                            // console.log(`[${stylebef[key]}] ${this.style[key]()}`)
                        }
                    }
                }
            })
        },1)
    }
}


export var HOCS = {
    
}
export class InputHOC extends BaseHOC<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    value(val?:string){
        if (this.Element){
            if (val){
                this.Element.value = val}
            else{
                return this.Element.value
            }
        }
        return ""
    }
}
export class AnchorHOC extends BaseHOC<React.AnchorHTMLAttributes<HTMLAnchorElement>,HTMLAnchorElement>{}
export class LinkHOC extends BaseHOC<React.LinkHTMLAttributes<HTMLLinkElement>,HTMLLinkElement>{}
export class VideoHOC extends BaseHOC<React.VideoHTMLAttributes<HTMLVideoElement>,HTMLVideoElement>{}


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

