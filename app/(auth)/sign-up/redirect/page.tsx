import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-3'>
          <div className="flex flex-col gap-2">
        <p className="text-white text-center font-semibold text-[22.55px]">
         Congratulations on taking the first step
        </p>
        <p className="text-subheading text-center text-[12.88px] font-[400]">
        Let's Dive into our personalized CV making experience
        </p>
      </div>

      <button className="w-full border-[1.21px] h-[39px] rounded-full border-white  items-center flex justify-between"
        type="submit">
          <div className=""></div>
          <p className=" text-[13px] ">Continue</p>
          <div className="">
            <p className="text-[13px] font-[600] mr-[10px]  ">→</p>
          </div>
        </button>

        <p className="text-subheading text-center text-[12.88px] font-[400]">Redirecting in 5 seconds, or click the ‘Continue’ button to proceed now .</p>
    </div>
  )
}

export default page