import Header from '@/app/components/home/header'
import File from '@/app/components/word-cloud/file-upload'
import WordCloud from '@/app/components/word-cloud/word-cloud'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <Header/>
        <p className='text-[#9CA3AF] font-[600] text-[30px] p-5N text-center'>Upload your CV in PDF or Word format to get or see your word cloud</p>
        <File/>
        {/* <WordCloud/> */}
    </div>
  )
}

export default page