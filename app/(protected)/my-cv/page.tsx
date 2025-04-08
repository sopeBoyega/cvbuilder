import Header from '@/app/components/home/header'

import CvContainer from '@/app/components/my-cv/cvContainer'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
  <>
  <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
    <Header/>
    <CvContainer/>
  </div>
  </>
  )
}

export default page