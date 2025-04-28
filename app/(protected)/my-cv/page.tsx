"use client"
import Alerter from '@/app/addons/alerter'
import BaseHOC from '@/app/addons/HOC'
import Header from '@/app/components/home/header'

import CvContainer from '@/app/components/my-cv/cvContainer'
import React from 'react'

type Props = {}

const page = (props: Props) => {

  return (
  <>
  <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
    <Header base = {new BaseHOC()} alerter={new Alerter()}/>
    <CvContainer/>
  </div>
  </>
  )
}

export default page