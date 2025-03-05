import Image from 'next/image'
import React from 'react'


type Props = {}

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
   <div className="bg-[url(/hero.png)] w-full h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center">
    <div className="w-[70%] h-[90vh] bg-[#111827] rounded-[19.33px] flex  ">
        <div className=" w-[430px]  place-self-center relative ">
            <Image
            src="./resumelady.svg"
            width={430}
            height={200}
            alt='resumeLady'
            layout='responsive'
            />

            <Image
            src="/logo.svg"
            width={141.74}
            height={25.38}
            alt='CV_Builder Logo '
            className='absolute right-5 top-5'/>
        </div>
        <div className="flex-1 flex flex-col mx-[16px] my-[10px]   justify-center items-center">
        {children}
        </div>
    </div>
   </div>
  )
}

export default layout