"use client"
import { Div, Center, TextArea,Input } from "../addons/csml"
import BaseHOC from "../addons/HOC"
import SliderHOC from "../addons/Slider"
import React from "react"
export default function StepPage(){
    var slider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:false})
    var haveJobDes = new BaseHOC({Component:Div})
    var yesJobHaveOne = new BaseHOC({Component:Center})
    var noJobHaveOne = new BaseHOC({Component:Center})
    var yesCVHaveOne = new BaseHOC({Component:Center})
    var noCVHaveOne = new BaseHOC({Component:Center})
    var haveCVDes = new BaseHOC({Component:Div})
    var cvFileNameDis = new BaseHOC({Component:Div})
    var CVInput = new BaseHOC<{type?:string,hidden?:any}>({Component:(props:any)=><Input {...props}></Input>})
    React.useEffect(()=>{
        haveJobDes.style.display("flex")
        haveCVDes.style.display("flex")
        CVInput.Execute((el:HTMLInputElement)=>{
             el.onchange = ()=>{

                if (el.files){
                    var file = el.files[0]
                    cvFileNameDis.Execute((dis:HTMLDivElement)=>{
                        dis.innerText = `${file.name} | ${file.size/(1000*2)}mb | ${file.type}`
                    })}
             }
        })
    })
    return <Center background="rgb(13,17,23)">
        <Div maxWidth="1000px" width="100vw" height="100vh" overflow="auto" display="flex" flexDirection="column" gap="30px" boxSizing="border-box" padding = "20px" paddingTop="30px" >
                <Div comment="top info view">
                    <Center gap="20px" >
                        <Div fontSize="20px" fontWeight="bold">Resume Builder</Div>
                        <Div>create a professional CV in minutes</Div>
                    </Center>
                </Div>
                <Div  borderRadius="10PX" padding="20px" backgroundColor="rgb(17,24,39)" boxSizing="border-box" width="100%" height="max-content">
                    <slider.Render >
                        <Div display="flex" flexDirection="column" gap="20px">
                            <Div fontSize="20px">Job Description</Div>
                            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Do you have a specific job dscription you'd like to tailor your resume to?</Div>
                            <Div display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                                <yesJobHaveOne.Render  textAlign="center" onClick={()=>{
                                    haveJobDes.style.display("flex")
                                    noJobHaveOne.style.border("")
                                    yesJobHaveOne.style.border("4px solid rgba(59, 130, 246, 1)")
                                    }}padding ="20px" paddingBlock= "15px" border="4px solid rgba(59, 130, 246, 1)" borderRadius="10px" background="rgb(37,99,235)">Yes, i have one</yesJobHaveOne.Render>
                                <noJobHaveOne.Render  textAlign="center" onClick={()=>{
                                    haveJobDes.style.display("none")
                                    yesJobHaveOne.style.border("")
                                    noJobHaveOne.style.border("4px solid rgba(65, 75, 91, 1)")
                                    }} padding ="20px" paddingBlock= "15px"  borderRadius="10px" background="rgb(31,41,55)">No, skip this step</noJobHaveOne.Render>
                            </Div>
                            <haveJobDes.Render comment="Job description" flexDirection="column" gap="20px" display="none" >
                                <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Please paste the job description below:</Div>
                                <TextArea id="" outline="none" borderRadius="10px" padding ="10px" placeholder = "Paste job description here..." background="rgba(55, 65, 81, 1)" ></TextArea>
                            </haveJobDes.Render>

                        </Div>
                            <Div display="flex" flexDirection="column" gap="20px">
                                <Div fontSize="20px">Upload Your CV</Div>
                                <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Do you have an existing CV you'd like to use as a starting point?</Div>
                                <Div display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                                    <yesCVHaveOne.Render  textAlign="center" onClick={()=>{
                                        haveCVDes.style.display("flex")
                                        noCVHaveOne.style.border("")
                                        yesCVHaveOne.style.border("4px solid rgba(59, 130, 246, 1)")
                                        }}padding ="20px" paddingBlock= "15px" border="4px solid rgba(59, 130, 246, 1)" borderRadius="10px" background="rgb(37,99,235)">Yes, i have one</yesCVHaveOne.Render>
                                    <noCVHaveOne.Render  textAlign="center" onClick={()=>{
                                        haveCVDes.style.display("none")
                                        yesCVHaveOne.style.border("")
                                        noCVHaveOne.style.border("4px solid rgba(65, 75, 91, 1)")
                                        }} padding ="20px" paddingBlock= "15px"  borderRadius="10px" background="rgb(31,41,55)">No, skip this step</noCVHaveOne.Render>
                                </Div>
                                <haveCVDes.Render  marginInline="20px" flexDirection="column" gap="20px" display="none" >
                                    <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Upload your CV in PDF or Word format:</Div>
                                    <CVInput.Render type="file" id="" hidden/>
                                    <Div padding = "20px" borderStyle="dashed" onClick={()=>CVInput.Execute((el:HTMLInputElement)=>{el.click();console.log("input clicked")})} paddingBlock = "30px"  borderRadius="10px" border="2px solid rgba(65, 75, 91, 1)" display="grid" placeItems="center" gap="10px">
                                        <Center>
                                            <svg width="50px" height="50px" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M84 60.3296V76.3296C84 78.4513 83.1571 80.4862 81.6569 81.9864C80.1566 83.4867 78.1217 84.3296 76 84.3296H20C17.8783 84.3296 15.8434 83.4867 14.3431 81.9864C12.8429 80.4862 12 78.4513 12 76.3296V60.3296" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M68 32.3296L48 12.3296L28 32.3296" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M48 12.3296V60.3296" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Center>
                                        <Div fontSize="15px">Drag and drop your CV here, or click to browse</Div>
                                        <cvFileNameDis.Render  fontSize="12px">Supported formats: PDF, DOC, DOCX</cvFileNameDis.Render >
                                    </Div>
                                </haveCVDes.Render>

                            </Div>
                        <Center width="100%">
                            This is a test ghgyh+
                        </Center>
                    </slider.Render>
                </Div>
                <Div display="flex" justifyContent="space-between" comment = "buttons">
                    <Div onClick={()=>slider.slide((pidx:number)=> pidx-1)} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(31,41,55)">Previous</Div>
                    <Div onClick={()=>slider.slide((pidx:number)=>pidx+1)} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(37,99,235)">Next</Div>
                </Div>
        </Div>
    </Center>
}