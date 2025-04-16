import Alerter from "@/app/addons/alerter";
import { CredentioFetch } from "@/app/addons/anys";
import BaseHOC from "@/app/addons/HOC";
import { ApiLinkRoute } from "@/app/steps/page";


export function getUser(setter:BaseHOC,alerter:Alerter,update?:any){
    if (setter.GetVariable("user") == undefined){CredentioFetch(ApiLinkRoute("auth/getuser")).then(res=>{
          res.json().then(json=>{
            setter.SetVariable("user",json.user)
            console.log(json)
            // alerter.Alert("welcome")
            update()
          })
        }).catch(()=>{
          alerter.Alert("An error ocurred while accessing the server.") 
        })}
}