"use client"

import { dict } from "./anys"
import { ObjectEvent } from "./ObjectEvent"
import Enc, { Encryptor } from "./Encryptor"
import { SixtyFpsSelect, SwipeLeftAlt } from "@mui/icons-material"


export default class DataSaver{
    id:string
    elementId:string
    private element:HTMLElement | null = null
    private _variables:dict = {}
    private _access:dict = {}
    enc:Encryptor
    secretKey:string
    constructor (id:string,secretKey ="AES-256-CBC"){
        this.secretKey = secretKey
        this.id = id
        this.enc = new Encryptor(this.secretKey)
        this.elementId = `DATASAVER|${this.id}`
        this.__init__()
    }

    get access(){
        this.collect()
        return this._variables
    }


    collect(){
        this.Execute((element)=>{
            try{
                this._variables = JSON.parse(this.enc.decrypt(element.innerText))
            }catch(e){
                this.dump()
            }
            
        })
    }

    dump(){
        this.Execute((element)=>{
            element.innerText = this.enc.encrypt(JSON.stringify(this._variables))

        })
    }

    load(name:string):any | undefined{
        this.collect()
        return this._variables[name]
    }
    
    save(name:string, value?:any){
        if (value != undefined){
            this._variables[name] = value
        }
        this.dump()
    }
    has(name:string){
        return this.load(name) != undefined
    }
    
    __init__(){
        this.Clientable(()=>{
            if (document.getElementById(this.elementId)){
                this.element = document.getElementById(this.elementId)
                this.collect()
            }else{
                const element = document.createElement("div")
                element.id = this.elementId
                element.style.display = "none"
                document.body.appendChild(element)
                this.element = element
                this.dump()
                
            }
        })
    }

    Clientable(func:Function){
        setTimeout(() => {
            try{while(window == undefined){}
                func()
            }catch(e){}
           
        }, 0.01);
    }

    Execute(func:(el:HTMLElement )=>any,unAble:Function = ()=>{}){
        if (this.element != null) {
            func(this.element)
        }else{
            unAble()
        }
    }

}