import { json } from "stream/consumers"
import { dict } from "./anys"
import { ObjectEvent } from "./ObjectEvent"
import Enc, { Encryptor } from "./Encryptor"


export default class DataSaver{
    id:string
    elementId:string
    private element:HTMLElement | null = null
    variables:dict = {}
    enc:Encryptor
    secretKey:string
    constructor (id:string,secretKey ="AES-256-CBC"){
        this.secretKey = secretKey
        this.id = id
        this.enc = new Encryptor(this.secretKey)
        this.elementId = `DATASAVER-INIT-ID-${this.id}`
        this.__init__()
    }

    private collect(){
        this.Execute((element)=>{
            this.variables = JSON.parse(this.enc.decrypt(element.innerText))
        })
    }

    private dump(){
        this.Execute((element)=>{
            element.innerText = this.enc.encrypt(JSON.stringify(this.variables))
        })
    }

    load(name:string):any | undefined{
        this.collect()
        return this.variables[name]
    }
    
    save(name:string, value?:any){
        if (value != undefined){
            this.variables[name] = value
        }
        this.dump()
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
           
        }, 1);
    }

    Execute(func:(el:HTMLElement )=>any,unAble:Function = ()=>{}){
        if (this.element != null) {
            func(this.element)
        }else{
            unAble()
        }
    }

}