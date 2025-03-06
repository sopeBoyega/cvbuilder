import React from "react"
import { _cssHelper } from "./css"
import { BaseElementProps, Div } from "./csml"


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
export default class BaseHOC<T>{
    
    protected ref:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined>
    public style
    protected Component
    constructor ({Component = Div , refee}:{Component?:any ,refee?:React.RefObject<HTMLBaseElement> | React.MutableRefObject<undefined>}){
        
        this.ref = refee || React.useRef() 
        this.style = {..._cssHelper}
        this.Component = Component
        this.EffectifyStyle()
    }

    protected Stylilise(style:{[key:string]:any}){
        var element = this.ref.current
        if (element){
            for (const key of Object.keys(style)){
                element.style[(key as any)] = style[key]
                console.log(element.style[(key as any)])
            }
        }
    }

    protected EffectifyStyle(){
        for (const key of Object.keys(_cssHelper)){
            this.style = {...this.style,[key]:(value:string)=>{this.Stylilise({[key]:value})}}
        }
    }
    /**
     * 
     *  `Execute`: safely run functions with your element without ```if (element.current){}```
     *  just by passing your function into the `Execute` method and getting the element as an argument
     * 
     */
    public Execute(func:Function){
        var element = this.ref.current
        if (element){
            func(element)
        }
    }
    /**
     * 
     * @param self is required.
     * `self` is the `BaseHOC` reference variable.
     * @example
     * ``` 
     * <hoc.Render self={hoc}></hoc.Render>
     * ```
     * @returns `BaseHOC.Component` 
     */
    Render(props:BaseElementProps<HTMLDivElement>&{self:BaseHOC<T>}& T){
            return <props.self.Component Ref = {props.self.ref} {...props}>
                {props.children}
            </props.self.Component>
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
    Run(props:{self:MessageLabelHOC} & BaseElementProps<HTMLDivElement>){

        return <props.self.Com  opacity="0" { ...props} Ref={props.self.PRef}><Div Ref={props.self.Ref}>{props.children}</Div></props.self.Com>
    }

}
