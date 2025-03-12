"use client"
import React, { PropsWithChildren } from "react"
import { useEffect, FC } from "react"
import CSSHelper, { ICssHelper } from "./css"

import { mergeText } from "./anys";


export var css = CSSHelper()


// generates unique id
export function genId(p = "b",length = 8){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const rand = (arr:(string | string []),len:number)=>{
      const singleGen = ()=> arr[Math.floor(Math.random()*arr.length)]
      let str = ""
      for(let i = 0;i<len;i++){
        str+=singleGen()
      }
      return str
    }
    if (p == "l"){
      return rand(letters,length)
    }else if(p == "b"){
      return rand([...numbers,...letters],length)
    }else if(p == "n"){
      return rand(numbers,length)
    }else{
      return rand([...numbers,...letters],length)
    }
  }

  export function getRandomHexColor() {
    var color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`
    return color;
  }
  


export function filterInStyles(Styles:any = {}){
  var allCSSProperties
      allCSSProperties = {...css};
      var propsforstyle:any = {}
      for (var cssAttr in  allCSSProperties){
          if (cssAttr in Styles){
              propsforstyle[cssAttr] = Styles[cssAttr]
          }
      }
  return propsforstyle
}
export function filterOutStyles(Styles:any = {}){
  var allCSSProperties
      allCSSProperties = {...css};
      var propforit:any = {}
      for (let key in Styles){
          if (!(key in allCSSProperties)){
              propforit[key] = Styles[key]
          }
      }
  return propforit
}

export type BaseElementProps<T> =  ICssHelper & React.DetailedHTMLProps<React.HTMLAttributes<T>,T> & React.HTMLAttributes<HTMLBaseElement>  & PropsWithChildren & {comment?:string,Ref?:any}

export function Center(props:BaseElementProps<HTMLDivElement>&{Ref?:any}){
      return <Div  display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" {...props}>
          {props.children}
      </Div>
}

/**
 * 
 * @example
 * ```
 * <Div display = "flex"></Div>
 * ```
 * 
 */
export function BaseElement({className,tag = "div",children,id,Ref,onClick,comment=null,style={},ReElement = undefined,...props}:any){
  useEffect(()=>{
      css = CSSHelper({...document.createElement("div").style})
  })
  const UnClassName = comment?`/*${String(comment).split(" ").join("_")}*/`:""
  className = `${className?className:""} ${UnClassName}`
  const Element =ReElement?({Ref,...props}:any)=><ReElement ref={Ref} {...props}> {props.children}</ReElement>: ({children,Ref,...attr}:any)=>{return React.createElement(tag,{ref:Ref,...attr},children)}
  const propsforstyle = filterInStyles(props)
  
  const Style = {
      ...style,
      ...propsforstyle  
  }
  const propforit = filterOutStyles(props)
  
  return <Element { ...propforit} className={mergeText(className)} onClick={onClick} id={id} Ref={Ref} style={Style}>
      {children}
  </Element>
}

export const Text:FC<BaseElementProps<HTMLParagraphElement>> = function({className,children,id,Ref,...props}:any){
  return <BaseElement tag="p" display = "inline-block" {...props} className={className} id={id} Ref={Ref}  >{children}</BaseElement>
}
/**
 * 
 * @example
 * ```
 * <Span display = "flex"></Span>
 * ```
 * 
 */
export const Span:FC<BaseElementProps<HTMLSpanElement>> = function({className,children,id,Ref,...props}:any){
  return <BaseElement tag="span" display="inline-block" {...props} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}

/**
 * 
 * @example
 * ```
 * <Div display = "flex"></Div>
 * ```
 * 
 */
export const Div:FC<BaseElementProps<HTMLDivElement> >= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="div"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const RDiv:FC<BaseElementProps<HTMLMediaElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="div"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Main:FC<BaseElementProps<{}>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="main"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Section:FC<BaseElementProps<{}>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="section"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Button:FC<BaseElementProps<HTMLButtonElement>> = function({className,children,id,Ref,type = "button",onClick,...props}:any){
  return <BaseElement tag="button"  {...props} type = {type} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Input:FC<BaseElementProps<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>> = function({className,children,id,Ref,type = "text",placeholder,onClick,...props}){
  return <BaseElement tag="input"  {...props} type = {type} placeholder = {placeholder} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const TextArea:FC<BaseElementProps<HTMLTextAreaElement>  & {Ref?:any,cols?:string,rows?:string,placeholder?:string}> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="textarea"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Img:FC<BaseElementProps<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>> = function({className,children,id,Ref,src,onClick,...props}){
  return <BaseElement tag="img"   {...props}  ReElement = {({children,...attr}:any)=><img src={src} {...attr}/>} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const CAudio:FC<BaseElementProps<HTMLAudioElement>> = function({className,children,id,Ref,src,onClick,...props}:any){
  return <BaseElement tag="audio"  {...props}  ReElement={({children,...attr}:any)=><audio src={src} {...attr}> {children}</audio>} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const CVideo:FC<BaseElementProps<HTMLAudioElement>> = function({className,children,id,Ref,src,onClick,...props}:any){
  return <BaseElement tag="video"  {...props}  ReElement={({children,...attr}:any)=><video src={src} {...attr}> {children}</video>}onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const H1:FC<BaseElementProps<{}>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="h1" fontSize ="20px" fontWeight="bolder" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Hr:FC<BaseElementProps<HTMLHRElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="hr" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const EButton:FC<BaseElementProps<{}>> = function({className,children,id,Ref,onClick,...props}:any){
  return <Div borderRadius="8px" paddingInline="22px" paddingBlock="10px" {...props} onClick={onClick} Ref={Ref} id={id} className={className}>{children}</Div>
}
