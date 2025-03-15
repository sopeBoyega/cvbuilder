import Header from '@/app/components/home/header'
import Settings from '@/app/components/settings/settings-container'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header/>
        <Settings/>
    </div>
  )
}

export default page