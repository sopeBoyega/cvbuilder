"use client"
import { Div, Center, TextArea,Input, BaseElementProps,EButton,Form } from "../addons/csml"
import BaseHOC, { HOCS, InputHOC } from "../addons/HOC"
import SliderHOC from "../addons/Slider"
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react"
import {CredentioFetch, dict, mergeText, useStateUpdate, useUpdate} from "../addons/anys"
import styles from "./styles.module.css"
import {CEXModel, CIEvent} from "@/app/addons/cexmodel";
import { FormatListNumbered } from "@mui/icons-material"
import Alerter, { DangerousLoadify } from "../addons/alerter"

const SubmitHandle = new CEXModel("SubmitEventDispatcherModel")
const jdVarName = "jobDescription"
export const ApiLink = "http://localhost:8089"
export const ApiLinkRoute = (route:string)=> route[0] == "/"? ApiLink + route : `${ApiLink}/${route}`
class ICOn{
    JobDes
    upCV
    analysis
    bar1
    bar2
    pFrameStyle:BaseElementProps<HTMLDivElement>
    slider
    constructor(slider:SliderHOC){
        this.slider = slider
        this.JobDes = new BaseHOC()
        this.upCV = new BaseHOC()
        this.analysis = new BaseHOC()
        this.bar1 = new BaseHOC()
        this.bar2 = new BaseHOC()
        this.pFrameStyle = {display:"flex",
            flexDirection:"column", alignItems:"center",
            justifyContent:"center",gap:"10px"
        }
    }
    indexi(val:number){
        if (val==0){ 
            this.bar1.style.width("0px")
            this.bar2.style.width("0px")
            this.JobDes.style.backgroundColor("rgba(59, 130, 246, 1)")
            this.upCV.style.backgroundColor("rgba(31, 41, 55, 1)")
            this.analysis.style.backgroundColor("rgba(31, 41, 55, 1)")
        }
        else if (val==1){
            this.bar1.style.width("100%")
            this.bar2.style.width("0px")
            this.JobDes.style.backgroundColor("rgba(34, 197, 94, 1)")
            this.upCV.style.backgroundColor("rgba(59, 130, 246, 1)")
            this.analysis.style.backgroundColor("rgba(31, 41, 55, 1)")
        }
        else if (val==2){
            this.bar1.style.width("100%")
            this.bar2.style.width("100%")
            this.JobDes.style.backgroundColor("rgba(34, 197, 94, 1)")
            this.upCV.style.backgroundColor("rgba(34, 197, 94, 1)")
            this.analysis.style.backgroundColor("rgba(59, 130, 246, 1)")
        }
    }
    Render=()=>{
        useEffect(()=>{
            this.indexi(0)
        })
        const gridIconDivision = `${1/5}fr`
        const gridBarDivision = `${1/4}fr`
        const gridTemplateColumns = [
            gridIconDivision,
            gridBarDivision,
            gridIconDivision,
            gridBarDivision,
            gridIconDivision
        ].join(' ')
        return <Div display = "grid" placeItems = "center" overflow={"visible"}   gridTemplateColumns={gridTemplateColumns} maxWidth="500px" minWidth={"300px"} width={"90%"}   gap="20px">
            <Div style={(this.pFrameStyle as never)}>
                <this.JobDes.Render display="grid" placeItems="center" onClick={()=>{this.slider.slide(0)}} backgroundColor="rgba(31, 41, 55, 1)"  width="50px" height="50px" 
                borderRadius="50%" ><svg width="30px" height="30px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.4583 3.33179H10.4583C9.57428 3.33179 8.72643 3.68298 8.10131 4.3081C7.47619 4.93322 7.125 5.78107 7.125 6.66512V33.3318C7.125 34.2158 7.47619 35.0637 8.10131 35.6888C8.72643 36.3139 9.57428 36.6651 10.4583 36.6651H30.4583C31.3424 36.6651 32.1902 36.3139 32.8154 35.6888C33.4405 35.0637 33.7917 34.2158 33.7917 33.3318V11.6651L25.4583 3.33179Z" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.7812 3.33179V9.99845C23.7812 10.8825 24.1324 11.7304 24.7576 12.3555C25.3827 12.9806 26.2305 13.3318 27.1146 13.3318H33.7812" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.1146 14.9978H13.7812" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.1146 21.6638H13.7812" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.1146 28.3318H13.7812" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </this.JobDes.Render>
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Job Description</Div>
            </Div>
            <Div width="100%" height="5px" backgroundColor="rgba(31, 41, 55, 1)" borderRadius="20px" overflow="hidden" >
                <this.bar1.Render backgroundColor="rgba(34, 197, 94, 1)" transition="width 0.3s ease-in-out" width="0px" height="5px"> </this.bar1.Render>
            </Div>
            <Div style={(this.pFrameStyle as any)}>
                <this.upCV.Render display="grid" placeItems="center" onClick={()=>{this.slider.slide(1)}}  backgroundColor="rgba(31, 41, 55, 1)" width="50px" height="50px"
                borderRadius="50%" ><svg width="30px" height="30px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.0156 24.9978V31.6645C35.0156 32.5485 34.6644 33.3964 34.0393 34.0215C33.4142 34.6466 32.5663 34.9978 31.6823 34.9978H8.34896C7.4649 34.9978 6.61706 34.6466 5.99194 34.0215C5.36681 33.3964 5.01563 32.5485 5.01562 31.6645V24.9978" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.3542 13.3311L20.0208 4.9978L11.6875 13.3311" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.0156 4.9978V24.9978" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                </this.upCV.Render>
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Upload CV</Div>
            </Div>
            <Div width="100%" height="5px" backgroundColor="rgba(31, 41, 55, 1)"borderRadius="20px" overflow = "hidden" >
                <this.bar2.Render backgroundColor="rgba(34, 197, 94, 1)" transition="width 0.3s ease-in-out" width="0px" height="5px"> </this.bar2.Render>
            </Div>
            <Div style={(this.pFrameStyle as any)}>
                <this.analysis.Render display="grid" placeItems="center" onClick={()=>{this.slider.slide(2)}} backgroundColor="rgba(31, 41, 55, 1)" width="50px" height="50px" 
                borderRadius="50%"><svg width="30px" height="30px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0781 25C35.0781 25.8841 34.7269 26.7319 34.1018 27.357C33.4767 27.9821 32.6288 28.3333 31.7448 28.3333H11.7448L5.07812 35V8.33333C5.07812 7.44928 5.42931 6.60143 6.05444 5.97631C6.67956 5.35119 7.5274 5 8.41146 5H31.7448C32.6288 5 33.4767 5.35119 34.1018 5.97631C34.7269 6.60143 35.0781 7.44928 35.0781 8.33333V25Z" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                </this.analysis.Render>
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Questions</Div>
            </Div>
        </Div>
    }
}
//software engineering
function AISession({base,jobDesHoc,alerter}:{base:BaseHOC,jobDesHoc:InputHOC,alerter:Alerter}){
    const questSlider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true})
    const update = useStateUpdate()
    const questCount = new BaseHOC()
    const bar = new BaseHOC()
    const jobDesView = new BaseHOC()
    alerter.loadingIconClassName = "loadingIcon5"
    let jobDescription = jobDesHoc.value()
    base.SetVariable('hba',base.GetVariable('hba') || false)
    function jobDesViewUpdate(){
        jobDesView.Execute(()=>{
            jobDesView.innerText(base.GetVariable(jdVarName))
            if (base.GetVariable(jdVarName) != jobDescription){
                if (base.GetVariable('AiStarted') == true){
                    if (base.GetVariable('hba') == false){
                        alerter.control.Element?.focus()
                    ResetQuestions()}
                }
            }
        })
    }

    base.SetVariable(jdVarName, base.GetVariable(jdVarName),jobDesViewUpdate)
    function FormFetch(){

        alerter.Loadify("Generating ...")
        CredentioFetch(ApiLink+"/ai/questions",{
            method:"POST",
            /* headers:{
                "Content-Type":"application/json"
            }, */
            body:JSON.stringify({
                jobDescription:jobDescription
            })
        }).then(res=>{
            res.json().then(data=>{
                console.log(data)
                base.SetVariable("AiStarted",true)
                base.SetVariable("form",data["questions"])
                alerter.close()
                base.SetVariable("hba",false)
                update()

            })
        }).catch(err=>{
            console.log(err)
            base.SetVariable("AiStarted",false)
            base.SetVariable("form",[])
            // setTimeout(()=>{alerter.close();update()},2000)
            alerter.close();update()
            // message.innerHTML("Could not connect to server",{color:"red",fontWeight:"bolder"})
            alerter.Alert("An error ocurred while accessing the server.")
            
        })
    }
    function FormGive(){
        
        alerter.Loadify("Generating CV ...")
        CredentioFetch(ApiLink+"/ai/cv",{
            method:"POST",
            /* headers:{
                "Content-Type":"application/json"
            }, */
            body:JSON.stringify({
                questions:base.GetVariable("form"),
                jobDescription:jobDescription
            })
        }).then(res=>{
            res.json().then(data=>{
                console.log(data)
                base.SetVariable("CVID",data["id"])
                alerter.Loadify("Redirecting ...")
                setTimeout(()=>{                                           
                    window.location.href =`/dashboard/${base.GetVariable("CVID")}`
                    alerter.close()
                }
                    ,2000)
                // alerter.close()
            })
        }).catch(err=>{
            console.log(err)
            base.SetVariable("CVID","")
            // setTimeout(()=>{alerter.close();update()},2000)
            alerter.close();update()
            // message.innerHTML("Could not connect to server",{color:"red",fontWeight:"bolder"})
            alerter.Alert("An error ocurred while accessing the server.")
            

        })
    }

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            alerter.Alert("You are OFFLINE.")
        })
        if (!window.navigator.onLine){
            alerter.Alert("You are OFFLINE.")
        }
    },[])
    function onSlide(){
        bar.style.width(`${Math.ceil(questSlider.currentIndex/(questSlider.children.length-1)*100)}%`)
        questCount.innerText(`${questSlider.currentIndex+1} of ${questSlider.children.length}`)
    }
    questSlider.onSlide = onSlide
    function ResetQuestions(){
        alerter.ask("you have changed your Job description.\n you have to reset your questions.",
            [
                {
                    innerText:"Cancel",
                    onClick:()=>{
                        alerter.close()
                        base.SetVariable("hba",true)
                        },
                    backgroundColor:"black",
                    color:"white"
                },
                {
                    innerText:"Reset",
                    onClick:()=>{
                        alerter.close()
                        base.SetVariable("hba",true)
                        base.SetVariable("AiStarted",false);
                        base.SetVariable("form",[]);
                        console.log(base.GetVariable('AiStarted'));
                        update()
                        },
                    color:"white"
                },
            ]
        )
    }
    function resetConfirm(){
        alerter.ask("Questions will be wiped out.\n Confirm to reset.",
            [
                {
                    innerText:"Cancel",
                    onClick:()=>{
                        alerter.close()
                    },
                    backgroundColor:"black",
                    color:"white"
                },
                {
                    innerText:"Reset",
                    onClick:()=>{
                        alerter.close()
                        base.SetVariable("AiStarted",false);
                        base.SetVariable("form",[]);
                        console.log(base.GetVariable('AiStarted'));
                        update()
                    }
                },
            ]
        )
    }
    function GenConfirm(){
        alerter.ask("Confirm to generate.\n Cross check your description.",
            [
                {
                    innerText:"Cancel",
                    onClick:()=>{
                        alerter.close()
                    },
                    backgroundColor:"black",
                    color:"white"
                },
                {
                    innerText:"Confirm",
                    onClick:()=>{
                        alerter.close()
                        FormFetch()
                    }
                },
            ]
        )
    }

    return <Div>

        <Div>
            <Div fontSize="16px" color="rgba(156, 163, 175, 1)">Job Description</Div>
            <jobDesView.Render fontSize="15px" color="rgba(156, 163, 175, 1)">{"\t"}{base.GetVariable(jdVarName)}</jobDesView.Render>
        </Div>
        <Div display="flex" gap="20px" justifyContent="right" width="100%">
            {base.GetVariable('AiStarted') && <EButton backgroundColor={"rgba(59, 130, 246, 0.7)"} color={"white"} onClick={()=>{
                resetConfirm()
                }}>Reset</EButton>}
        </Div>
        <br />
        
        {
            !base.GetVariable('AiStarted') ? <Div display="flex" flexDirection="column" gap="10px">
            <Div fontSize="20px">Generate Questions </Div>
            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Generate your Ai questions based on the job description</Div>

            <Div display={"grid"} placeItems={"center"} height={"150px"}>
                <EButton backgroundColor={"black"} color={"white"} onClick={GenConfirm}>Generate</EButton>
            </Div>
            </Div> : <>
            <Div className={styles.barww}>
                <questCount.Render fontSize="15px"> 1 of {base.GetVariable("form").length} </questCount.Render>
                <Div width="50%" height="5px" background="rgba(31, 41, 55, 1)" borderRadius="20px" overflow="hidden">
                    <bar.Render backgroundColor="rgba(34, 197, 94, 1)"  borderRadius="20px" transition="width 0.3s ease-in-out" width="0%" height="5px"></bar.Render>
                </Div>
            </Div>
            <br />
            <questSlider.Render width="100%">
                {base.GetVariable("form").map((question:any,index:number)=>{
                    // const answerInput = new InputHOC({Component:TextArea})
                    function change(event:any){
                        const form = base.GetVariable("form")
                        form[index].anwser = event.target.value
                        // console.log(form[index])
                        base.SetVariable("form",form)
            
                    }
                    return<Div display="flex" flexDirection="column" gap="20px" width="100%">
                                <Div fontSize="20px">{question.context}</Div>
                                
                                <Div fontSize="15px" color="rgba(156, 163, 175, 1)">{question.question}</Div>
                                <TextArea id="" onChange={change} outline="none" borderRadius="10px" width="100%" padding ="10px" placeholder = "Paste job description here..." background="rgba(55, 65, 81, 1)" ></TextArea>

                </Div>})}
                <Div display="flex" flexDirection="column" gap="10px">
                    <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Generate your CV based on the Questions</Div>

                    <Div display={"grid"} placeItems={"center"} height={"150px"}>
                        <EButton backgroundColor={"black"} color={"white"} onClick={FormGive}>Generate</EButton>
                    </Div>
            </Div>
            </questSlider.Render>
            <br />
            <Div display="flex" justifyContent="space-between" comment = "buttons">
                    <Div onClick={()=>{questSlider.slide((pidx:number)=> pidx-1)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(31,41,55)">Previous</Div>
                    <Div onClick={()=>{questSlider.slide((pidx:number) =>pidx+1)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(37,99,235)">Next</Div>
            </Div>
        </>}
    </Div>
}


export default function StepPage(){
    const slider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:false,direction:"row"})
    const base = new BaseHOC({Component:Center})
    const haveJobDes = new BaseHOC()
    const yesCVHaveOne = new BaseHOC({Component:Center})
    const noCVHaveOne = new BaseHOC({Component:Center})
    const haveCVDes = new BaseHOC()
    const alerter = new Alerter({backgroundColor:"rgba(69, 140, 256, 0.4)"})
    const loadify = new DangerousLoadify("loadingIcon4")
    
    alerter.defaultButton = {...alerter.defaultButton,fontWeight:"bolder"}
    base.SetVariable("form",[])
    const jobDes  = new InputHOC({Component:TextArea})
    const cvFileNameDis = new BaseHOC()
    const ico = new ICOn(slider)
    const form:dict<dict<string> | string>  = {}
    const nextBtn = new BaseHOC()
    const CVInput = new InputHOC({Component:Input})
    
    base.addEventListener("click",()=>{console.log("base clicked")})

    React.useEffect(()=>{
        loadify.close()
        window.onbeforeunload = (e)=>{
            alerter.Loadify("ON-BEFOREUNLOAD ...",{className:"loadingIcon4"})
        }
        setTimeout(()=>{
            // setDatas(()=>[1])9
        },2000)
        haveJobDes.style.display("flex")
        haveCVDes.style.display("flex")
        CVInput.Execute((el)=>{
             el.onchange = ()=>{

                if (el.files){
                    const file = el.files[0]
                    cvFileNameDis.Execute((dis)=>{
                        dis.innerText = `${file.name} | ${(Math.ceil(file.size/1024)/1024).toFixed(3)}mb | ${file.type}`
                    })}
             }
        })
    })
    function onSlide(index:number){
        ico.indexi(slider.currentIndex)
        /* if (index == slider.children.length-1){
            nextBtn.innerText("Submit")
            nextBtn.Execute((el)=>{el.onclick = ()=>{
                console.log("end")
               }})
        }else{
            nextBtn.innerText("Next")
            nextBtn.Execute((el)=>{el.onclick = ()=>{slider.slide((pidx:number) =>pidx+1)}})
        } */
    }

    function FormfillHandler(e:CIEvent){
        const data = e.detail.data
        const key = data.key
        const value = data.value
        form[key] = value
        // console.log("form fill Dispatch ")
        // console.log("form is ",form)
    }
    slider.onSlide  = onSlide;
    return <base.Render backgroundColor="rgb(13,17,23)">

         <alerter.Render ></alerter.Render>
        <loadify.Render></loadify.Render>
        <Div maxWidth="1000px" width="100vw" height="100vh" overflow="auto" display="flex" flexDirection="column" gap="30px" boxSizing="border-box" padding = "20px" paddingTop="30px" >
            <Div comment="top info view" display="flex" flexDirection="column" gap="20px">
                    <Center gap="20px" >
                        <Div fontSize="20px" fontWeight="bold">Resume Builder</Div>
                        <Div color="rgba(156, 163, 175, 1)">create a professional CV in minutes</Div>
                    </Center>
                    <Center>
                        <ico.Render></ico.Render>
                    </Center>
                </Div>
                <Div  borderRadius="10PX" padding="20px" backgroundColor="rgb(17,24,39)" boxSizing="border-box" width="100%" height="max-content">
                    <slider.Render >
                        <Div display="flex" flexDirection="column" gap="20px">
                            <Div fontSize="20px">Job Description</Div>
                            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Do you have a specific job dscription you'd like to tailor your resume to?</Div>

                            
                            <haveJobDes.Render comment="Job description" flexDirection="column" gap="20px" display="none" >
                                <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Please paste the job description below:</Div>
                                <jobDes.Render id="" onChange={(e)=>{base.SetVariable(jdVarName,jobDes.value())}} outline="none" borderRadius="10px" padding ="10px" placeholder = "Paste job description here..." background="rgba(55, 65, 81, 1)" ></jobDes.Render>
                            </haveJobDes.Render>

                        </Div>
                            <Div display="flex" flexDirection="column" gap="20px">
                                <Div fontSize="20px">Upload Your CV</Div>
                                <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Do you have an existing CV you'd like to use as a starting point?</Div>
                                <Div display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                                    <yesCVHaveOne.Render  textAlign="center" onClick={()=>{
                                        haveCVDes.style.display("flex")
                                        noCVHaveOne.style.border("none")
                                        yesCVHaveOne.style.border("4px solid rgba(59, 130, 246, 1)")
                                        }}padding ="20px" paddingBlock= "15px" border="4px solid rgba(59, 130, 246, 1)" borderRadius="10px" background="rgb(37,99,235)">Yes, i have one</yesCVHaveOne.Render>
                                    <noCVHaveOne.Render  textAlign="center" onClick={()=>{
                                        haveCVDes.style.display("none")
                                        yesCVHaveOne.style.border("none")
                                        noCVHaveOne.style.border("4px solid rgba(65, 75, 91, 1)")
                                        }} padding ="20px" paddingBlock= "15px"  borderRadius="10px" background="rgb(31,41,55)">No, skip this step</noCVHaveOne.Render>
                                </Div>
                                <haveCVDes.Render  marginInline="20px" flexDirection="column" gap="20px" display="none" >
                                    <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Upload your CV in PDF or Word format:</Div>
                                    <CVInput.Render type="file" id="" hidden/>
                                    <Div padding = "20px" borderStyle="dashed" onClick={()=>CVInput.Execute((el)=>{el.click()})} paddingBlock = "30px"  borderRadius="10px" border="2px solid rgba(65, 75, 91, 1)" display="grid" placeItems="center" gap="10px">
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
                        <Div display="flex" flexDirection="column" width={"100%"} gap="20px">
                            <AISession base={base} alerter={alerter}  jobDesHoc={jobDes} />
                        </Div>
                        {/* <Div display="flex" flexDirection="column" gap="20px">
                            <Div fontSize="20px">Submit</Div>
                            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Submit your work</Div>

                            <Div display={"grid"} placeItems={"center"} height={"200px"}>
                                <EButton backgroundColor={"black"} color={"white"}>Submit</EButton>
                            </Div>
                        </Div> */}
                    </slider.Render>
                </Div>
                <Div display="flex" justifyContent="space-between" comment = "buttons">
                    <Div onClick={()=>{slider.slide((pidx:number)=> pidx-1)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(31,41,55)">Previous</Div>
                    <nextBtn.Render onClick={()=>{slider.slide((pidx:number) =>pidx+1)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(37,99,235)">Next</nextBtn.Render>
                </Div>
        </Div>
    </base.Render>
}