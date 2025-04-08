"use client"
import React, { useState } from 'react'
import AccountSettings from './account-settings'

type Props = {}

const Settings = (props: Props) => {

    const [activeMenu,setActiveMenu] = useState<string>("Account Setting")
    const userMenu =  ["Account Setting","Login & Security","Coming Soon","Coming Soon","Coming Soon"]

    const renderBody = () => {
        switch (activeMenu) {
          case "Account Setting":
            return <AccountSettings/>;
          case "Login & Security":
            return <></>;
          case "Payment history":
            return <></>;
          case "Refferals":
            return <></>;
          case "Case Notes":
            return <></>;
          default:
            return null;
        }
      };
  return (
    <>
        <div className="w-full flex flex-row h-full items-end justify-start mt-3 gap-[15px]">
       {userMenu.map((item,key) =>(
       <p key={key} className={`${item === activeMenu && "border-b-[2px] border-b-[#375DFB]"} text-[#525866] w-fit font-[500] cursor-pointer text-center `}
       onClick={()=>setActiveMenu(item)}>
        {item}
        </p>
       ))}
       </div>
       {renderBody()}
    </>
  )
}

export default Settings