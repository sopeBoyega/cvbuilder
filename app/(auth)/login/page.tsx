"use client"
import React, { useState } from 'react'

interface LoginDetails {
  email :string;
  password: string;
  confirmPassword?: string;
}

const page = (props: any) => {

  const [loginDetails,setLoginDetails] = useState<LoginDetails>({
    email :"",
    password: "",
    confirmPassword: ""
  })
  return (
  <div className='w-[330px] h-fit'>
   <div className="flex flex-col gap-2=1">
 <p className='text-white text-center font-semibold text-[22.55px] '>Sign In to your account</p>
 <p className='text-subheading text-center text-[12.88px] font-[400]'>Create your CV effortlessly - completely free!</p>
   </div>

   <div className="w-full bg-white h-[39px] rounded-full ">
    
   </div>
  </div>
  )
}

export default page;