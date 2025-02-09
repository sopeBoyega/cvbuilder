import React from 'react'
import { notoSans } from '../fonts/fonts';

interface ListProps {
  list: string[];
}

const List = ({list}: ListProps) => {
  return (
    <ul className={`${notoSans.className} text-[#8B949E] text-[12.5px] grid `}>
      {list.map((item,key) => (
       <li className={`${notoSans.className} `}>{item}</li>
      ))
      }
    </ul>
  )
}

export default List