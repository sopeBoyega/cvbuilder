import React from 'react'
import { notoSans } from '../fonts/fonts';

interface ListProps {
  list: string[];
}

const List = ({list}: ListProps) => {
  return (
    <ul className={`${notoSans.className} text-[#8B949E] text-[12.5px] md:grid cursor-pointer  hidden  `}>
      {list.map((item,key) => (
       <li key={key} className={`${notoSans.className}  hover:underline`}>{item}</li>
      ))
      }
    </ul>
  )
}

export default List