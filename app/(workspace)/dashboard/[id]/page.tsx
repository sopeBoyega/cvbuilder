"use client"
import { useParams } from "next/navigation";
import Main from "../main";


export default function (){
    const {id} = useParams()
    return <Main id ={id as string}/>
}