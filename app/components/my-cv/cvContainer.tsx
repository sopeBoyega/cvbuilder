"use client"
import React, { useEffect } from 'react'
import CV from '@/app/components/my-cv/cv'
import { cvStatus } from '@/global/data';
import { getUser, getUserToDataSaver } from '../home/anys';
import DataSaver from '@/app/addons/DataSaver';
import Alerter from '@/app/addons/alerter';
import { useStateUpdate } from '@/app/addons/anys';
import { Div } from '@/app/addons/csml';

type Props = {}

type StatusType = "drafts" | "downloaded" | "saved";

const CvContainer = (props: Props) => {
   const datasaver = new DataSaver("dgmofggok")
   const alerter = new Alerter()
   const update = useStateUpdate()
   useEffect(()=>{
      if (!datasaver.has("asked")){getUserToDataSaver(datasaver,alerter,update)
         console.log(datasaver.has("asked"))
      datasaver.save("asked",true)}
   })
 
  
 return (
  <>
  <alerter.Render>

  </alerter.Render>
  <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
     {datasaver.load("user") && datasaver.load("user")["Cvs"].length > 0 ? datasaver.load("user")["Cvs"].map((cv:any,index:number) =>(
      <CV title={cv.title} date = {cv.date} theme={cv.theme} ID = {cv.ID} statusTag={cv.status}/> 
     )) : <Div width='100%' height='100%' display='grid' placeItems='center' fontSize='20px' opacity='0.2' fontWeight='bolder'> No CV Found</Div>
     }
  </div>
  </>
  );
};

export default CvContainer