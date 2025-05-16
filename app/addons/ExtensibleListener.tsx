import { dict } from "./anys";
import DataSaver from "./DataSaver";
import { ObjectEvent } from "./ObjectEvent";

export interface XEvent{
    called?:number
    data:any
    key?:string
    interval?:any
    target?:Element
}

export interface Listener{
    called:number
    listenid:string
    intervals:any[]
    key:string
    destroyed?:boolean
}

export default class XListener{
    events:DataSaver
    listeners:DataSaver
    objectEvent:ObjectEvent
    constructor(id:string){
        this.events = new DataSaver(id+"--events")
        this.listeners = new DataSaver(id+"--lnrs")
        this.objectEvent = new ObjectEvent
    }


    Listen(key:string,func:(e:XEvent)=>void){
        let numid = Object.keys(this.listeners.access).length
        const listenid:string = String(func)
        let listener:Listener = this.listeners.has(listenid)?this.listeners.load(listenid):{
                called:0,
                listenid:listenid,
                intervals:[],
                key:key
            }as Listener

        const Caller = func
        let xevent:XEvent
         if (this.listeners.has(listenid)){
                if (this.listeners.load(listenid).intervals.length > 0){
                    return 
                }
        }
        let interval = setInterval(() => {
           
            if (this.events.has(key)){
                xevent = this.events.load(key)
                if ((xevent.called as any) > listener.called){
                    /* console.log(xevent.called)
                    console.log(called) */
                    listener.called = xevent.called as any
                    xevent.interval = interval
                    listener.intervals.push(interval)
                    this.listeners.Clientable(()=>{
                        this.listeners.save(listenid,listener)
                    })
                    Caller(xevent)
                
                }
            }
        this.listeners.Clientable(()=>{
            if (this.listeners.has(listenid)){
                if (this.listeners.load(listenid).intervals.length > 0){
                    return 
                }
            }   
            this.listeners.save(listenid,listener)
        })
        }, 1);
    }

    Distract(key:string){
        for (var lnrid of Object.keys(this.listeners.access)){
            const lnr =  this.listeners.load(lnrid) as Listener
            if (lnr.key == key){
                for(var int of lnr.intervals){
                    clearInterval(int)
                }
            }
            lnr.intervals = []
            this.listeners.save(lnrid,lnr)
        }
    }

    Announce(key:string,xevent:XEvent){
        if (this.events.has(key)){
            xevent.called = this.events.load(key).called
        }else{
            xevent.called = 0
        }
        (xevent as any).called += 1
        xevent.key = key
        // console.log("pre--",preEvent)
        this.events.save(key,xevent)
    }

}