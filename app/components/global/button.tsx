import React from 'react'

type Props = {
  text: string;
}

const Button = ({text}: Props) => {
  return (
    <div className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between">

    <div className=""></div>
    <p className=" text-[13px] ">{text}</p>
    <div className="">
    <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
    </div>

  </div>
  )
}

export default Button