"use client"
import { useEffect, useState } from "react";
import Alerter from "../addons/alerter";
import { dict, useStateUpdate } from "../addons/anys";
import { A, Div } from "../addons/csml";
import { CENTER, FLEX, GRID } from "../addons/css";
import DataSaver from "../addons/DataSaver";
import BaseHOC, { AtMedia, SpiritHOC } from "../addons/HOC";
import { getUserToDataSaver } from "./anys";
import { usePathname } from "next/navigation";
import { FaceSharp } from "@mui/icons-material";
import XListener from "../addons/ExtensibleListener";

const BtnHOC = new SpiritHOC<{href?:string}>({Component:A, soulprops:{fontSize:"12px",display:FLEX,alignItems:CENTER,justifyContent:CENTER, gap:"10px", borderRadius:"30px",width:"fit-content",paddingInline:"20px",paddingBlock:"10px"}})
export const bdcolor = "rgb(226,232,240)"
export const bd = "2px solid " + bdcolor

// BtnHOC["CreateBody"]

function NavBar({user, alerter}:{user:dict | undefined,alerter:Alerter}){
    const name = new BaseHOC()
    let homebtn = BtnHOC.CreateBody({background:"rgb(37,99,235)"})
    let newbtn = BtnHOC.CreateBody({border:"1px solid rgb(203,213,225)"})

    useEffect(()=>{
        name.Listen("sidebarwidth",(e)=>{
            if (Number(e.data.width.replace("px","")) >= 100){
                homebtn.style.display("none")
                newbtn.style.display("none")
                // console.log("sidebarwidth-max:",e.data.width)
            }
            else{
                homebtn.style.display("flex")
                newbtn.style.display("flex")
                // console.log("sidebarwidth-min:",e.data.width)
            }
        })
    })
    return <Div display="flex" minWidth="300px" justifyContent="space-between" borderBottom={bd} paddingInline="10px" paddingBlock="10px" alignItems="center">
        <Div display="flex" gap="10px">
            <homebtn.Render href=""> <svg width="15px" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.2007 15.7219L21.5602 1.0814C20.8738 0.395233 19.943 0.00976562 18.9725 0.00976562C18.002 0.00976562 17.0712 0.395233 16.3848 1.0814L1.74431 15.7219C1.40305 16.061 1.13253 16.4646 0.948441 16.9091C0.764349 17.3536 0.670349 17.8303 0.671894 18.3114V35.88C0.671894 36.4624 0.903265 37.021 1.31511 37.4329C1.72695 37.8447 2.28553 38.0761 2.86797 38.0761H35.077C35.6595 38.0761 36.218 37.8447 36.6299 37.4329C37.0417 37.021 37.2731 36.4624 37.2731 35.88V18.3114C37.2746 17.8303 37.1806 17.3536 36.9966 16.9091C36.8125 16.4646 36.5419 16.061 36.2007 15.7219ZM32.881 33.6839H5.06404V18.6134L18.9725 4.70492L32.881 18.6134V33.6839Z" fill="white"/>
                </svg>
                Home
            </homebtn.Render>
            <newbtn.Render>
                <svg width="15px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5622 23.7752C42.5622 24.3577 42.3308 24.9162 41.9189 25.3281C41.5071 25.7399 40.9485 25.9713 40.3661 25.9713H26.4576V39.8797C26.4576 40.4622 26.2262 41.0208 25.8144 41.4326C25.4026 41.8444 24.844 42.0758 24.2615 42.0758C23.6791 42.0758 23.1205 41.8444 22.7087 41.4326C22.2968 41.0208 22.0655 40.4622 22.0655 39.8797V25.9713H8.15701C7.57458 25.9713 7.016 25.7399 6.60415 25.3281C6.19231 24.9162 5.96094 24.3577 5.96094 23.7752C5.96094 23.1928 6.19231 22.6342 6.60415 22.2224C7.016 21.8105 7.57458 21.5791 8.15701 21.5791H22.0655V7.67068C22.0655 7.08825 22.2968 6.52967 22.7087 6.11782C23.1205 5.70598 23.6791 5.47461 24.2615 5.47461C24.844 5.47461 25.4026 5.70598 25.8144 6.11782C26.2262 6.52967 26.4576 7.08825 26.4576 7.67068V21.5791H40.3661C40.9485 21.5791 41.5071 21.8105 41.9189 22.2224C42.3308 22.6342 42.5622 23.1928 42.5622 23.7752Z" fill="white"/>
                </svg>
                New
            </newbtn.Render>
        </Div>
        <Div display="flex" gap="10px">
            Hello,<name.Render> { !user?"NO NAME":user.username}</name.Render>
        </Div>
    </Div>
}

function Sidebar({user,alerter}:{user:any,alerter:Alerter}){
    const widthControl = new XListener("sidebarwidthcontroller")
    const bar = new BaseHOC()
    const pathname = usePathname()
    const SideBarLink = new SpiritHOC<{href?:string}>({Component:A,soulprops:{borderRadius:BtnHOC.soulprops.borderRadius,boxSizing:"border-box",transition:"border-color 0.3s ease-in-out", className:"sidebarLinks", overflow:"hidden", display:"flex",alignItems:"center", gap:"10px",paddingLeft:"8px", paddingBlock:"8px", border:"3px solid " + bdcolor, width:"100%"}})
    const SideBarText = new SpiritHOC({soulprops:{className:"side-bar-text",boxSizing:"border-box",minWidth:"200px", width:"200px",display:"flex"}})
    const maxWidth = "300px"
    const minWidth = "64px"

    // listener.Listen("pop",(e)=>{
    //     console.log(listener.intervals.access)
    //     console.log(e.data)})

    useEffect(()=>{
            bar.onStyleChange("width",(value:string)=>{
            
            document.querySelectorAll(".side-bar-text").forEach(el=>{
                let element = el as HTMLElement
                if (value.trim().toLowerCase() == minWidth){
                    element.style.display = "none"
                    bar.Announce("sidebarwidth",{data:{width:value}})
                    document.querySelectorAll(".sidebarLinks").forEach(parent=>{(parent as HTMLElement).style.borderColor = "transparent"})
                    
                }else{
                    element.style.display = "flex"
                    bar.medias.sidebar.hasOnMedia && bar.Announce("sidebarwidth",{data:{width:value}})
                    document.querySelectorAll(".sidebarLinks").forEach(parent=>{(parent as HTMLElement).style.borderColor = bdcolor})

                }
            })
        })
                
        bar.onenter = ()=>{bar.set("open",true);bar.style.width(maxWidth);}
        bar.onleave = ()=>{bar.set("open",false);bar.medias.sidebar.hasOnMedia && bar.style.width(minWidth)}


    })
    bar.set("open",false)
    bar.AddMedia("sidebar",{onMedia(hoc){
        bar.get("open") == false && bar.style.width(minWidth)
    },
    offMedia(hoc){
         bar.style.width(maxWidth)
         bar.Announce("sidebarwidth",{data:{width:minWidth}})
    },})
 
    


    return <bar.Render  padding = '10px' gap="20px" boxSizing="border-box" width={maxWidth} overflow="hidden" display="grid" gridAutoRows="auto 1fr" transition="width 0.3s ease-in-out" height="100%" borderRight={bd}>
        <SideBarLink.CreateSoul className="" borderColor="transparent" gap="0px"><Div color="transparent">▮</Div> <SideBarText.CreateSoul fontSize="17px" fontWeight="bold">CV Builder</SideBarText.CreateSoul> </SideBarLink.CreateSoul>
        <Div square="100%" overflow="hidden" display="flex" flexDirection="column" justifyContent={"space-between"}>
            <Div width="100%" display="flex" flexDirection="column" gap="30px">
                <SideBarLink.CreateSoul><svg width="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.1348 39.7832L34.4439 31.0886C37.0497 27.6929 38.2663 23.4331 37.8468 19.1733C37.4274 14.9136 35.4034 10.9729 32.1853 8.15062C28.9672 5.32833 24.7961 3.83582 20.518 3.97583C16.24 4.11584 12.1753 5.87789 9.14869 8.90455C6.12203 11.9312 4.35998 15.9958 4.21997 20.2739C4.07996 24.5519 5.57247 28.7231 8.39476 31.9411C11.217 35.1592 15.1577 37.1833 19.4175 37.6027C23.6772 38.0221 27.937 36.8055 31.3328 34.1997L40.031 42.8998C40.2353 43.1041 40.4778 43.2661 40.7447 43.3767C41.0116 43.4873 41.2977 43.5442 41.5866 43.5442C41.8755 43.5442 42.1615 43.4873 42.4284 43.3767C42.6953 43.2661 42.9379 43.1041 43.1421 42.8998C43.3464 42.6955 43.5085 42.453 43.619 42.1861C43.7296 41.9192 43.7865 41.6332 43.7865 41.3443C43.7865 41.0554 43.7296 40.7693 43.619 40.5024C43.5085 40.2355 43.3464 39.993 43.1421 39.7887L43.1348 39.7832ZM8.64001 20.8403C8.64001 18.379 9.36986 15.973 10.7373 13.9265C12.1047 11.8801 14.0482 10.285 16.3221 9.34314C18.5961 8.40125 21.0982 8.15481 23.5122 8.63498C25.9262 9.11515 28.1436 10.3004 29.8839 12.0407C31.6243 13.7811 32.8095 15.9985 33.2897 18.4125C33.7699 20.8265 33.5234 23.3286 32.5816 25.6025C31.6397 27.8765 30.0446 29.82 27.9982 31.1874C25.9517 32.5548 23.5457 33.2847 21.0844 33.2847C17.785 33.2813 14.6217 31.9691 12.2886 29.6361C9.95559 27.303 8.6434 24.1397 8.64001 20.8403Z" fill="white"/>
                </svg>
                <SideBarText.CreateSoul>Search ...</SideBarText.CreateSoul> </SideBarLink.CreateSoul>
                <Div width="100%" display="flex" flexDirection="column" gap="10px">
                    <SideBarLink.CreateSoul href="/dashboard" {...(pathname.toLowerCase().includes("/dashboard")? {bg:bdcolor, color:"black"}: {})} ><svg width="20px" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.3768 23.9327L31.8082 6.36409C30.9845 5.54069 29.8676 5.07812 28.7029 5.07812C27.5383 5.07812 26.4213 5.54069 25.5977 6.36409L8.02911 23.9327C7.6196 24.3397 7.29498 24.8239 7.07407 25.3573C6.85316 25.8908 6.74036 26.4628 6.74221 27.0401V48.1224C6.74221 48.8213 7.01986 49.4916 7.51407 49.9858C8.00828 50.48 8.67858 50.7577 9.3775 50.7577H48.0284C48.7273 50.7577 49.3976 50.48 49.8918 49.9858C50.386 49.4916 50.6637 48.8213 50.6637 48.1224V27.0401C50.6655 26.4628 50.5527 25.8908 50.3318 25.3573C50.1109 24.8239 49.7863 24.3397 49.3768 23.9327ZM45.3931 45.4871H12.0128V27.4025L28.7029 10.7123L45.3931 27.4025V45.4871Z" fill="#94A3B8"/>
                    </svg>
                    <SideBarText.CreateSoul>Home</SideBarText.CreateSoul> </SideBarLink.CreateSoul>
                    <SideBarLink.CreateSoul href = "/CV" display="flex" alignItems="center" {...(pathname.toLowerCase().includes("/cv")? {bg:bdcolor, color:"black"}: {})}><svg width="20px" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.3206 25.3986L49.025 35.1902C47.0573 43.6465 43.1688 47.0665 35.8602 46.3638C34.689 46.2701 33.4241 46.0592 32.0654 45.7313L28.1301 44.7943C18.3619 42.4753 15.3401 37.6498 17.6358 27.8582L19.9314 18.0432C20.3999 16.0521 20.9621 14.3187 21.6648 12.8898C24.4055 7.22097 29.0671 5.69836 36.8909 7.54891L40.8029 8.46248C50.6179 10.7581 53.6162 15.607 51.3206 25.3986Z" stroke="#94A3B8" strokeWidth="4.68496" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M35.86 46.3607C34.4076 47.3446 32.5805 48.1644 30.3551 48.8906L26.654 50.1087C17.3544 53.1071 12.4586 50.6006 9.43681 41.301L6.43844 32.0482C3.44007 22.7485 5.92309 17.8293 15.2227 14.831L18.9238 13.6129C19.8843 13.3084 20.7978 13.0507 21.6645 12.8867C20.9618 14.3156 20.3996 16.0491 19.9311 18.0402L17.6355 27.8552C15.3399 37.6467 18.3617 42.4722 28.1298 44.7913L32.0651 45.7283C33.4238 46.0562 34.6887 46.267 35.86 46.3607Z" stroke="#94A3B8" strokeWidth="4.68496" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30.1953 20.9219L41.5563 23.8031" stroke="#94A3B8" strokeWidth="4.68496" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.8906 29.9883L34.6838 31.7217" stroke="#94A3B8" strokeWidth="4.68496" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <SideBarText.CreateSoul justifyContent="space-between" alignItems="center">My CVs <Div background={bdcolor} color = "rgb(37,99,235)" square="fit-content" padding="2px" paddingInline="5px"  borderRadius="20px" display="grid" placeItems="center"> {user?user.Cvs.length:0} </Div></SideBarText.CreateSoul> </SideBarLink.CreateSoul>
                    <SideBarLink.CreateSoul href = "/wordcloud" {...(pathname.toLowerCase().includes("/wordcloud")? {bg:bdcolor, color:"black"}: {})}><svg width="20px" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6106 30.6719C16.3691 30.0394 14.987 29.7114 13.5815 29.7114C2.61865 30.4845 2.61865 46.4369 13.5815 47.2099H39.5599C42.7222 47.2333 45.7675 46.0621 48.0866 43.9304C55.7934 37.2074 51.6706 23.6912 41.5276 22.4028C37.8733 0.453607 6.17925 8.79291 13.6987 29.7114" stroke="#94A3B8" strokeWidth="5.1535" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37.7188 23.4311C38.9368 22.8221 40.2721 22.4941 41.6307 22.4707" stroke="#94A3B8" strokeWidth="5.1535" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <SideBarText.CreateSoul display="flex" alignItems="center" justifyContent="space-between">Word Cloud</SideBarText.CreateSoul> </SideBarLink.CreateSoul>
                    <SideBarLink.CreateSoul href = "/setting" {...(pathname.toLowerCase().includes("/setting")? {bg:bdcolor, color:"black"}: {})}><svg width="20px" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6863 17.0636C26.4278 17.0636 24.2199 17.7334 22.342 18.9882C20.464 20.243 19.0004 22.0265 18.136 24.1131C17.2717 26.1998 17.0456 28.4959 17.4862 30.711C17.9268 32.9262 19.0144 34.961 20.6115 36.5581C22.2085 38.1551 24.2433 39.2427 26.4585 39.6833C28.6737 40.124 30.9698 39.8978 33.0564 39.0335C35.1431 38.1692 36.9266 36.7055 38.1814 34.8276C39.4362 32.9496 40.1059 30.7418 40.1059 28.4832C40.1024 25.4556 38.8982 22.553 36.7574 20.4122C34.6165 18.2714 31.7139 17.0671 28.6863 17.0636ZM28.6863 34.6322C27.4702 34.6322 26.2813 34.2716 25.2701 33.5959C24.2589 32.9202 23.4708 31.9599 23.0054 30.8363C22.54 29.7127 22.4182 28.4764 22.6555 27.2836C22.8928 26.0908 23.4784 24.9951 24.3383 24.1352C25.1983 23.2752 26.2939 22.6896 27.4867 22.4523C28.6795 22.2151 29.9159 22.3368 31.0395 22.8023C32.1631 23.2677 33.1234 24.0558 33.7991 25.067C34.4747 26.0782 34.8354 27.267 34.8354 28.4832C34.8354 30.114 34.1875 31.678 33.0344 32.8312C31.8812 33.9844 30.3172 34.6322 28.6863 34.6322ZM53.6908 23.7463C53.6165 23.3751 53.4631 23.0243 53.241 22.7177C53.019 22.4111 52.7335 22.156 52.4039 21.9696L46.301 18.4889L46.2769 11.613C46.2756 11.2315 46.1914 10.8548 46.0303 10.509C45.8691 10.1632 45.6348 9.85652 45.3436 9.61014C42.8842 7.52931 40.0525 5.93385 36.9985 4.90835C36.6501 4.79084 36.281 4.74752 35.9149 4.78118C35.5488 4.81484 35.1938 4.92474 34.8727 5.1038L28.6863 8.55822L22.5 5.1016C22.1785 4.92156 21.8228 4.81094 21.4559 4.7769C21.089 4.74285 20.719 4.78614 20.3698 4.90396C17.315 5.93372 14.4832 7.53366 12.0247 9.61893C11.7344 9.86504 11.5009 10.1711 11.3401 10.5161C11.1794 10.8611 11.0953 11.2368 11.0936 11.6174L11.0629 18.4998L4.96876 21.9718C4.63915 22.1589 4.35376 22.4148 4.13206 22.7221C3.91035 23.0295 3.75754 23.3811 3.68406 23.7529C3.06365 26.8781 3.06365 30.0949 3.68406 33.2201C3.75813 33.5911 3.9112 33.9418 4.13288 34.2484C4.35456 34.5549 4.63965 34.8102 4.96876 34.9967L11.0782 38.4775L11.1024 45.3534C11.1037 45.7349 11.1879 46.1116 11.349 46.4574C11.5102 46.8032 11.7445 47.1099 12.0357 47.3562C14.4951 49.4371 17.3268 51.0325 20.3808 52.058C20.7292 52.1755 21.0983 52.2189 21.4644 52.1852C21.8305 52.1515 22.1855 52.0416 22.5066 51.8626L28.6863 48.4082L34.8661 51.8648C35.1876 52.0448 35.5433 52.1554 35.9102 52.1895C36.2772 52.2235 36.6471 52.1802 36.9963 52.0624C40.0511 51.0327 42.8829 49.4327 45.3414 47.3475C45.6317 47.1013 45.8652 46.7953 46.026 46.4503C46.1867 46.1053 46.2708 45.7296 46.2725 45.349L46.3032 38.4665L52.4105 34.9945C52.7401 34.8075 53.0255 34.5516 53.2472 34.2442C53.4689 33.9369 53.6217 33.5853 53.6952 33.2135C54.3142 30.088 54.3127 26.8712 53.6908 23.7463ZM48.7211 31.0328L42.8181 34.3884C42.3987 34.6262 42.0529 34.975 41.8189 35.3964C41.7003 35.616 41.5751 35.8203 41.4455 36.0289C41.1853 36.4444 41.0461 36.9243 41.0437 37.4146L41.0129 44.0753C39.5922 45.1444 38.0363 46.0209 36.3858 46.682L30.4234 43.3462C30.0303 43.126 29.5872 43.0103 29.1365 43.0102H29.0729C28.8225 43.0102 28.5678 43.0102 28.3174 43.0102C27.8465 42.9991 27.3811 43.1135 26.969 43.3418L21.0001 46.6711C19.3468 46.0132 17.7873 45.1405 16.362 44.0753L16.3378 37.4344C16.3358 36.9433 16.1966 36.4626 15.9359 36.0465C15.8086 35.84 15.6812 35.627 15.5626 35.414C15.3284 34.9951 14.9835 34.6487 14.5656 34.4126L8.65816 31.0372C8.42867 29.3437 8.42867 27.627 8.65816 25.9336L14.5612 22.578C14.9799 22.3403 15.3255 21.9924 15.5604 21.5721C15.679 21.3525 15.8042 21.1461 15.9338 20.9375C16.194 20.522 16.3332 20.0421 16.3356 19.5518L16.3598 12.8911C17.781 11.8251 19.3368 10.9515 20.9869 10.2931L26.9493 13.629C27.3611 13.86 27.8278 13.9753 28.2998 13.9628C28.5502 13.9628 28.8049 13.9628 29.0553 13.9628C29.5262 13.9739 29.9916 13.8594 30.4037 13.6312L36.3726 10.2953C38.0259 10.9532 39.5853 11.8259 41.0107 12.8911L41.0349 19.532C41.0369 20.023 41.1761 20.5038 41.4367 20.9199C41.5641 21.1263 41.6915 21.3394 41.8101 21.5524C42.0443 21.9713 42.3892 22.3177 42.8071 22.5538L48.7145 25.9204C48.947 27.6165 48.9492 29.3362 48.7211 31.0328Z" fill="#94A3B8"/>
                    </svg>
                    <SideBarText.CreateSoul>Settings</SideBarText.CreateSoul> </SideBarLink.CreateSoul>

                </Div>
            </Div>
            <Div display="flex" flexDirection="column" gap="10px" width="100%" boxSizing="border-box" overflow="hidden">
                <SideBarLink.CreateSoul  padding="0" borderRadius="20px" height="180px" >
                    <SideBarText.CreateSoul flexDirection="column" padding="10px"  gap="10px">
                        <Div fontSize="14px">Pro Plan</Div>
                        <Div display="flex" fontSize="14px" alignItems="end" gap="5px"><Div fontWeight="bolder" fontSize="18px">$15.99</Div>/mo</Div>
                        <Div fontSize="11px" >Enjoy unlimited access to our app with only a small price monthly.</Div>
                        <Div display="flex" gap="20px"> <Div  fontSize="14px" >Dismiss</Div> <Div fontSize="14px"  color="blue">Go Pro</Div></Div>
                    </SideBarText.CreateSoul>
                </SideBarLink.CreateSoul>
                <SideBarLink.CreateSoul  padding="0" borderRadius="0"  border="0px solid transparent" borderTop={bd} width="100%" overflow="hidden">
                    <FaceSharp />
                    <SideBarText.CreateSoul flexDirection="row" alignItems="center" width="250px" justifyContent="space-between" padding="10px" paddingLeft="0"  gap="10px">
                        <Div display="flex" flexDirection="column" gap="5px">
                            <Div fontWeight="bolder">{user?user.username:"NO NAME"}</Div>
                            <Div fontSize="12px">{user?"BASIC MEMBER":"Loading ..."}</Div>
                        </Div>
                        <svg height="40px" viewBox="0 0 95 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.9561 25.1172H44.0107C44.5968 25.1173 45.162 25.3212 45.6113 25.6895L45.7959 25.8574C46.2695 26.331 46.5361 26.9738 46.5361 27.6436C46.536 28.2294 46.3319 28.7939 45.9639 29.2432L45.7959 29.4287C45.3224 29.9022 44.6804 30.1689 44.0107 30.1689H32.4814V63.7686H44.0107C44.5969 63.7686 45.1619 63.9725 45.6113 64.3408L45.7959 64.5078C46.2695 64.9814 46.5361 65.6242 46.5361 66.2939C46.5361 66.8801 46.3321 67.4451 45.9639 67.8945L45.7959 68.0801C45.3224 68.5534 44.6803 68.8193 44.0107 68.8193H29.9561C29.37 68.8193 28.8049 68.6153 28.3555 68.2471L28.1699 68.0801C27.6963 67.6065 27.4297 66.9637 27.4297 66.2939V27.6436C27.4297 27.0576 27.6339 26.4923 28.002 26.043L28.1699 25.8574C28.5844 25.443 29.1279 25.1873 29.7061 25.1299L29.9561 25.1172ZM59.8203 35.6562C60.4075 35.6563 60.9737 35.8605 61.4238 36.2295L61.6094 36.3975L70.3936 45.1816C70.6289 45.4164 70.8151 45.6959 70.9424 46.0029C71.0378 46.2331 71.0988 46.4756 71.123 46.7227L71.1348 46.9707C71.1346 47.3031 71.0691 47.6326 70.9414 47.9395C70.8457 48.1695 70.7165 48.3836 70.5586 48.5752L70.3916 48.7598H70.3906L61.6064 57.5439C61.132 58.0183 60.4883 58.2852 59.8174 58.2852C59.2302 58.2851 58.664 58.0809 58.2139 57.7119L58.0283 57.5439C57.554 57.0695 57.2881 56.4258 57.2881 55.7549C57.2881 55.1678 57.4915 54.6015 57.8604 54.1514L58.0283 53.9658L62.3154 49.6816L62.5029 49.4941H44.0107C43.4247 49.4941 42.8595 49.2901 42.4102 48.9219L42.2246 48.7539C41.7512 48.2804 41.4854 47.6384 41.4854 46.9688C41.4854 46.3828 41.6885 45.8175 42.0566 45.3682L42.2246 45.1826C42.6982 44.709 43.341 44.4434 44.0107 44.4434H62.5029L62.3154 44.2559L58.0312 39.9756C57.5568 39.5011 57.2901 38.8575 57.29 38.1865C57.29 37.5155 57.5568 36.8719 58.0312 36.3975C58.5057 35.9231 59.1494 35.6562 59.8203 35.6562Z" fill="white" stroke="#475569" strokeWidth="0.219607"/>
                        </svg>

                    </SideBarText.CreateSoul>
                    
                </SideBarLink.CreateSoul>
                
            </Div>
        </Div>
    </bar.Render>
}


export default function layout({children}:{children:any}){
    const datasaver = new DataSaver("user-init")
    const listener = new XListener("layout")
    const [user, setUser] = useState<dict | undefined>(undefined)
    const alerter = new Alerter()
    const base = new BaseHOC()
    const main = new BaseHOC()
    
    useEffect(()=>{

        main.Listen("sidebarwidth",e=>{
        if (Number(e.data.width.replace("px","")) >= 100){
                main.style.opacity("0")
                console.log("sidebarwidth-max:",e.data.width)
            }
            else{
                main.style.opacity("1")
                console.log("sidebarwidth-min:",e.data.width)
            }
         })
        base.rootdata.save("bfg","rgba(30, 41, 59, 1)")
        base.Announce("bfg",{data:"rgba(30, 41, 59, 1)"})
        !user && getUserToDataSaver(datasaver,alerter,()=>{ 
            setUser(datasaver.access.user)
            base.rootdata.save("user",datasaver.access.user)
            base.Announce("user-init",{data:{user:datasaver.access.user}})
        })
        
    
    })
    return <Div onClick={()=>{listener.Announce("pop",{data:"success"})}} display="grid" square="doc" bg="rgb(13,17,23)" overflow="hidden" gridTemplateColumns="auto 1fr">
        <Sidebar user = {user} alerter = {alerter}></Sidebar>
        <alerter.Render></alerter.Render>
        <Div overflow="hidden" minWidth="300px" display="grid" gridTemplateRows="auto 1fr">
            <NavBar user={user} alerter={alerter}></NavBar>
            <main.Render transition="opacity 0.3s ease-in-out" overflow="hidden" minWidth="300px" square="100%">{children}</main.Render>
        </Div>
    </Div>

}