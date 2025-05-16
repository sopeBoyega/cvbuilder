import React from "react";
import { ICssHelper } from "./css";
import { dict, pairIf } from "./anys";



 namespace HeadWind{
    export function Square(val:string){
        let width = val
        let height = val
        if (val == "doc" || val == "v"){
            width = "100vw"
            height = "100vh"
        }
        else if (val == "exp" || val == "%"){
            width = "100%"
            height = "100%"
        }
        return {
           width:width,
           height:height, 
        }
    }

    // # Flex
    export function  FlexRow(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",

        } 
    }
    export function  FlexColumn(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",

        } 
    }
    export function  FlexRowAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        } 
    }
    export function  FlexColumnJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        } 
    }
    export function  FlexColumnAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
        } 
    }
    export function  FlexRowAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
        } 
    }
    export function  FlexColumnJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        } 
    }
    export function  FlexRowAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
        } 
    }
    export function  FlexColumnJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
        } 
    }
    export function  FlexRowAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            alignItems:"center"
        } 
    }

    // # Grid
    export function GridRowCenter(gridTemplateRows?:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            ...pairIf("gridTemplateRows",gridTemplateRows),
            placeItems:"center"
        } 
    }

    export function GridColumnRowCenter(gridTemplateColumns?:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            ...pairIf("gridTemplateColumns",gridTemplateColumns),
            placeItems:"center"
        } 
    }


    export function bg(val:string){
        return {
            backgroundColor:val,
            background:val
            
        }
    }

}



export default HeadWind