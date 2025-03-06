import { ListChildren } from "./basicrouter"
import { BaseElementProps } from "./csml"
import BaseHOC from "./HOC"


export default class Slider{
    children:any[] = []
    constructor(props:any){
        
    }
    _SliderComponent({self,...props}:BaseElementProps<HTMLDivElement>&{self:Slider}){
        const children = props.children
        self.children = ListChildren(children,{})
    }
}