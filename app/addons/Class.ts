import { dict } from "./anys"


export default function Class(...option:any[]){
    let Extends:Function[] = []
    let Attr:dict = {}
    if (option.length == 1){
        if (option[0][0]){
            Extends = option[0]
        }else{
            Attr = option[0]
        }
    }
    if (option.length == 2){
        if (option[0][0]){
            Extends = option[0]
            Attr = option[1]
        }else{
            Attr = option[0]
            Extends = option[1]
        }
    }
    return (...args:any)=>{
        var obj:dict = {
            __str__(){return JSON.stringify(this)},
            __type__(){
                let ty:dict = {}
                Object.keys(this).map(member=>{ty[member] = typeof(this[member]) })
                return ty},
            __clone__(){return {...this}},
            ...Attr,
            __extends__(){
                return Extends.map(ex=>ex())
            },

            init(...args:any){
                if (Extends){
                    Extends.forEach(ex=>{
                        let adobj = ex()
                        Object.keys(adobj).map(key=>{
                            if (key != "init"){
                                this[key] = adobj[key]
                            }
                        })
                    })
                }
                if (Object.keys(Attr).includes("init")){
                    
                    let init = this.init
                    this.init = Attr.init
                    this.init(...args)
                    this.init = init
                }
                return this
            },
            __attr__:Attr
        }
        return obj.init(...args)
    }
}