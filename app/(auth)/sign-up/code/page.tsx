"use client"
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {

const [code,setCode] = useState<(number | undefined)[]>([0,0,0,0,0,0])

const onChangeHandler = () => {

}

const handleSubmit = () => {

}
  return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <p className="text-white text-center font-semibold text-[22.55px] ">
       We've emailed you a code
      </p>
      <p className="text-subheading text-center text-[12.88px] font-[400]">
      To continue account setup, enter the code we’ve sent to: <br /> User@gmail.com
      </p>
    </div>
    <form>
      <div className="flex gap-3 items-center justify-center m-3">
      {code.map((item,index) => (
        <input type="number" key={index} value={item} className='bg-transparent w-[41px] h-[37px] border-[2px] border-white rounded-md text-center custom-number-input ' />
      ))
      }
      </div>

      <button
        className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between"
        type="submit"
      >
        <div className=""></div>
        <p className=" text-[13px] ">Sumbit</p>
        <div className="">
          <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
        </div>
      </button>
    </form>
  </div>
  )
}

export default page