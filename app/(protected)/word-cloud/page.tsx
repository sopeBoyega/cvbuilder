import Header from '@/app/components/home/header'
import File from '@/app/components/word-cloud/file-upload'
import WordCloud from '@/app/components/word-cloud/word-cloud'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <Header/>
        {/* <File/> */}
        <WordCloud/>
    </div>
  )
}

export default page