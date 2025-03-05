"use client"
import React, { ReactEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation';

interface resetPassword {
    password: string;
    confirmPassword: string;
}

const page = (props: any) => {

const router = useRouter()   
const [resetPassword,setResetPassword] = useState<resetPassword>({
password: "",
confirmPassword:"",
})
const [passwordUpdated,setPasswordUpdated] = useState<boolean>(false)

const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target.name
    const value = event.target.value

    setResetPassword({...resetPassword,[name]: value})
}

const handleSumbit = (event: any) => {
    event.preventDefault()
    if (resetPassword.password === resetPassword.confirmPassword) {
    router.push("")
    setPasswordUpdated(true)
    }
    else{
        alert("Make sure passwords match")
    }
}
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-white text-center font-semibold text-[22.55px] ">
          {!passwordUpdated ? " Create new password":" Password Updated successfully"}
        </p>
        <p className="text-subheading text-center text-[12.88px] font-[400]">
         {!passwordUpdated ? "Enter a new password to secure your account"  : "Your password has been changed. You can now log in with your new password."}
        </p>
      </div>
      <form onSubmit={handleSumbit}>
      {!passwordUpdated && <div className="flex-col gap-3">
          <input
            className="w-full text-[13px] h-[39px] rounded-full pl-3 mb-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
            placeholder="Password"
            type="password"
            name="password"
              value={resetPassword.password}
           onChange={onChangeHandler}
            required
          />
          <input
            className="w-full text-[13px] h-[39px] rounded-full pl-3 mb-3 placeholder:text-[14px] bg-white text-black focus:outline-none focus:ring-0"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
              value={resetPassword.confirmPassword}
           onChange={onChangeHandler}
            required
          />
        </div>
}
       {!passwordUpdated ?
        <button
        className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between"
        type="submit"
      >
        <div className=""></div>
        <p className=" text-[13px] ">Sumbit</p>
        <div className="">
          <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
        </div>
      </button> :

        <button
        className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between"
      >
        <div className=""></div>
        <p className=" text-[13px] ">Continue</p>
        <div className="">
          <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
        </div>
      </button> 
       } 
      </form> 
      
      {passwordUpdated && <p className="text-subheading text-center text-[12.88px] font-[400]">
      Redirecting in 5 seconds, or click the ‘Continue’ button to <br />
       proceed now
        </p>}
    </div>
  )
}

export default page