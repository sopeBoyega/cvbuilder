"use client"
import React, { useEffect, useState } from 'react'
import CV from '@/app/components/my-cv/cv'
import { cvStatus } from '@/global/data';
import { getUser, getUserToDataSaver } from '../home/anys';
import DataSaver from '@/app/addons/DataSaver';
import Alerter from '@/app/addons/alerter';
import { useStateUpdate } from '@/app/addons/anys';
import { Div } from '@/app/addons/csml';

type Props = {}

type StatusType = "draft" | "downloaded" | "saved";

const CvContainer = (props: Props) => {
   const datasaver = new DataSaver("dgmofggok")
   const alerter = new Alerter()
   const update = useStateUpdate()
   const [user, setUser] = useState<any>(undefined)
   useEffect(()=>{
      if (!datasaver.has("asked")){getUserToDataSaver(datasaver,alerter,()=>{
         console.log(datasaver.load("user")["Cvs"])
         datasaver.save("asked",true)
         console.log("edfdf",datasaver.access)
         setUser(datasaver.access.user)
      })
      }


   })
 
  
 return (
  <>
  <alerter.Render>

  </alerter.Render>
  <div  className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
     {user ? user["Cvs"].length > 0 ? user["Cvs"].map((cv:any,index:number) =>(
      <CV title={cv.title} key={index} date = {cv.date} theme={cv.theme} ID = {cv.ID} statusTag={cv.status}/> 
     )) : <Div width='100%' height='100%' display='grid' placeItems='center' fontSize='20px' opacity='0.2' fontWeight='bolder'> No CV Found </Div>
     :<Div width='100%' height='100%' display='grid' placeItems='center' fontSize='20px' opacity='0.2' fontWeight='bolder'> No CV Found </Div>}
  </div>
  </>
  );
};

export default CvContainer