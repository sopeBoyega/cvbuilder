"use client";
import Alerter from "@/app/addons/alerter";
import { CredentioFetch, getCookie, useStateUpdate } from "@/app/addons/anys";
import { Div } from "@/app/addons/csml";
import BaseHOC from "@/app/addons/HOC";
import TextEditor from "@/app/components/home/editor";
import Header from "@/app/components/home/header";
import Settings from "@/app/components/home/mobile-settings";
import RightBar from "@/app/components/home/right-bar";
import { PJS } from "@/app/fonts/fonts";
import { ApiLinkRoute } from "@/app/steps/page";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


type Props = {};



function TextEditorAPIFriend ({alerter,CVId,base}:{alerter:Alerter,CVId?:string,base:BaseHOC}){
  const id = CVId
  const update = useStateUpdate()
  
  useEffect(()=>{
      /* CredentioFetch(ApiLinkRoute("auth/login"),{method:"post",body:JSON.stringify({username:"testAgent",password:"golgotah",email:"ciaAgent@gmail.com"})}).then(
        res=>{
          console.log(res)
          console.log(Array.from(res.headers))
          console.log("json")
          res.json().then(data=>{
            console.log(data)
            console.log(document.cookie)
            console.log("localid")
            console.log(getCookie("localid"))

          })
        }
      ).catch(()=>{
        alerter.Alert("An error ocurred while accessing the server.")
      }) */
      if (base.GetVariable("ax") == false ){
          CredentioFetch(ApiLinkRoute("/ai/cvget"),{method:"post",body:JSON.stringify({cvid:id})},()=>{alerter.Iconify([<Div className="loadingIcon"></Div>])}).then(res=>{
          res.json().then(json=>{
            if (json.cv != undefined){
              base.SetVariable("CV",json.cv)
            }else{
              alerter.Alert(json.detail)
            }
            // console.log(base.GetVariable("CV"))
            alerter.close()
            console.log(json)
            base.SetVariable("ax",true)
            update()
          })
          }).catch(()=>{
            alerter.Alert("An error ocurred while accessing the server.")
          })
      }
  })
    return <>
      <TextEditor base = {base} defaultContent={base.GetVariable("CV")} />
    </>
}

const page = (props: Props) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const id = (useParams().id as string | undefined)
  const alerter = new Alerter()
  alerter.defaultButton = {...alerter.defaultButton,backgroundColor:"rgba(89, 140, 256, 0.4)",fontWeight:"bold"}
  const base = new BaseHOC()
  base.SetVariable("ax",false)
  useEffect(()=>{
    // alerter.Alert(`CV id: ${id}`)
  })
  return (
    <base.Render className={`${PJS.className} relative p-5`}>
      <alerter.Render></alerter.Render>
      {showSettings && (
        <div className="w-full h-full bg-black absolute left-0 top-0 right-0 z-[1001]  ">
      
            <Settings base={base} alerter={alerter} setShowSettings={setShowSettings} />
       
        </div>
      )}
      <Header base={base} alerter={alerter} setShowSettings={setShowSettings} />
      <div className="w-full h-fit flex-row lg:flex-row  justify-center items-center gap-3  md:items-start ">
      <TextEditorAPIFriend alerter={alerter} CVId={id} base={base}></TextEditorAPIFriend>
        <div className="mt-3">
          <RightBar />
        </div>
      </div>
    </base.Render>
  );
};

export default page;
