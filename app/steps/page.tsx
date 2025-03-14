"use client"
import { Div, Center, TextArea,Input, BaseElementProps,EButton,Form } from "../addons/csml"
import BaseHOC from "../addons/HOC"
import SliderHOC from "../addons/Slider"
import React, { useEffect } from "react"
import {Dict, mergeText, useUpdate} from "../addons/anys"
import styles from "./styles.module.css"
class ICOn{
    JobDes
    upCV
    analysis
    bar1
    bar2
    pFrameStyle:BaseElementProps<HTMLDivElement>
    constructor(){
        this.JobDes = new BaseHOC({Component:Div})
        this.upCV = new BaseHOC({Component:Div})
        this.analysis = new BaseHOC({Component:Div})
        this.bar1 = new BaseHOC({Component:Div})
        this.bar2 = new BaseHOC({Component:Div})
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
                <this.JobDes.Render display="grid" placeItems="center" backgroundColor="rgba(31, 41, 55, 1)"  width="50px" height="50px" 
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
                <this.upCV.Render display="grid" placeItems="center"  backgroundColor="rgba(31, 41, 55, 1)" width="50px" height="50px"
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
                <this.analysis.Render display="grid" placeItems="center" backgroundColor="rgba(31, 41, 55, 1)" width="50px" height="50px" 
                borderRadius="50%"><svg width="30px" height="30px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0781 25C35.0781 25.8841 34.7269 26.7319 34.1018 27.357C33.4767 27.9821 32.6288 28.3333 31.7448 28.3333H11.7448L5.07812 35V8.33333C5.07812 7.44928 5.42931 6.60143 6.05444 5.97631C6.67956 5.35119 7.5274 5 8.41146 5H31.7448C32.6288 5 33.4767 5.35119 34.1018 5.97631C34.7269 6.60143 35.0781 7.44928 35.0781 8.33333V25Z" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                </this.analysis.Render>
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Form</Div>
            </Div>
        </Div>
    }
}

function Experience(props){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const EditorForm =  new BaseHOC({Component:Form})
    const Editor:BaseHOC = props.editor;
    let editId:number = 0
    const [editorType, setEditorType] = React.useState<string>("")

    let experiences:Dict[] = []
    const [experience, setExperience] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const form:Dict<Dict<string> | string> = props.form;

    function handleSubmit(){
        const formData = new FormData(EditorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        console.log(formObject);
        console.log(editorType);
        if (editorType == "create"){
            console.log('create', formObject)
            experiences = [...experiences, {...formObject,id:experiences.length}]
        }
        if(editorType == "update"){
            console.log('update', formObject)

                const newex = experiences.map((fo:Dict)=>{
                    let newfo = fo
                    if (fo.id == editId){
                        newfo =  {...formObject,id:experiences.length}
                    }
                    return newfo
                })
                experiences =  newex

        }
        // Update();
        console.log(experiences);
        setExperience(experiences);
    }

    return <Div {...props} className={styles.formField}>
        <Div className ={styles.formLabel}>Experience</Div>
        {experience.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.jobTitle}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             Editor.style.display("flex")
                             etd.innerText("Edit Experience")
                             btn.innerText("edit")
                             setEditorType("edit")
                             editId = form.id;
                         }}
                >Edit </EButton>
                <EButton backgroundColor={"rgba(235, 99, 37, 1)"}>delete </EButton>
            </Div>
        })}
        <Editor.ToRender renderId ={"0dfd"}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Experience</etd.Render>
        </Editor.ToRender>
        <Editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.39)"} backdropFilter = "blur(10px)">
            <EditorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Job Title</Div>
                    <Input name={"jobTitle"} placeholder={"Enter Job Title"} className ={mergeText(styles.formInput)}></Input>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Company Name</Div>
                    <Input name={"companyName"} placeholder={"Enter Company Name"} className ={mergeText(styles.formInput)}></Input>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>location</Div>
                    <Input name ={"location"} placeholder={"Enter location"} className ={mergeText(styles.formInput)}></Input>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Start Date</Div>
                    <Input name={"startDate"} placeholder={"Enter Start Date"} className ={mergeText(styles.formInput)}></Input>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>End Date</Div>
                    <Input name={"endDate"} placeholder={"Enter End Date"} className ={mergeText(styles.formInput)}></Input>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Responsibility</Div>
                    <Input name={"res"} placeholder={"Enter Responsibility"} className ={mergeText(styles.formInput)}></Input>
                </Div>
            </EditorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
            onClick={()=>{
                Editor.style.display("none")
                handleSubmit()
            }}
            > Create </btn.Render>

        </Editor.ToRender>
        <EButton
            onClick={()=>{
               Editor.style.display("flex")
                etd.innerText("Create Experience")
                setEditorType("create")
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}

export default function StepPage(){
    const slider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true,direction:"row"})
    // const parentSlider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true})
    // const questSlider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true})
    const haveJobDes = new BaseHOC({Component:Div})
    const yesJobHaveOne = new BaseHOC({Component:Center})
    const noJobHaveOne = new BaseHOC({Component:Center})
    const yesCVHaveOne = new BaseHOC({Component:Center})
    const noCVHaveOne = new BaseHOC({Component:Center})
    const haveCVDes = new BaseHOC({Component:Div})
    const cvFileNameDis = new BaseHOC({Component:Div})
    const analysis = new BaseHOC({Component:Div})
    const ico = new ICOn()
    const form:Dict<Dict<string> | string>  = {}
    const Editor = new BaseHOC()
    const CVInput = new BaseHOC<{type?:string,hidden?:boolean}>({Component:(props:any)=><Input {...props}></Input>})
    React.useEffect(()=>{
        setTimeout(()=>{
            // setExperiences(()=>[1])
        },2000)
        haveJobDes.style.display("flex")
        haveCVDes.style.display("flex")
        CVInput.Execute((el:HTMLInputElement)=>{
             el.onchange = ()=>{

                if (el.files){
                    const file = el.files[0]
                    cvFileNameDis.Execute((dis:HTMLDivElement)=>{
                        dis.innerText = `${file.name} | ${(Math.ceil(file.size/1024)/1024).toFixed(3)}mb | ${file.type}`
                    })}
             }
        })
    })
    function onSlide(index:number){
        if (index == slider.children.length-1){
            analysis.style.animation("rotate 2s infinite linear")
        }else{
            analysis.style.animation("none")
        }
    }
    slider.onSlide  = onSlide;
    return <Center backgroundColor="rgb(13,17,23)">
        <Editor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

        </Editor.Render>
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
                            <Div display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                                <yesJobHaveOne.Render  textAlign="center" onClick={()=>{
                                    haveJobDes.style.display("flex")
                                    noJobHaveOne.style.border("none")
                                    yesJobHaveOne.style.border("4px solid rgba(59, 130, 246, 1)")
                                    }}padding ="20px" paddingBlock= "15px" border="4px solid rgba(59, 130, 246, 1)" borderRadius="10px" background="rgb(37,99,235)">Yes, i have one</yesJobHaveOne.Render>
                                <noJobHaveOne.Render  textAlign="center" onClick={()=>{
                                    haveJobDes.style.display("none")
                                    yesJobHaveOne.style.border("none")
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
                        <Div display="flex" flexDirection="column" width={"100%"} gap="20px">
                            <Div fontSize="20px">Form</Div>
                            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">Fill in the information to help us understand your profile better</Div>
                            <Div width="100%" justifyContent={"center"} alignItems={"center"} display="flex" flexDirection="column" gap="20px">
                                <Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Full Name</Div>
                                    <Input placeholder={"Enter Full Name"} className ={mergeText(styles.formInput)}></Input>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Email</Div>
                                    <Input placeholder={"Enter Email"} className ={mergeText(styles.formInput)}></Input>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>LinkedIn (Optional)</Div>
                                    <Input placeholder={"Enter LinkedIn"} className ={mergeText(styles.formInput)}></Input>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Phone</Div>
                                    <Input placeholder={"Enter Phone"} className ={mergeText(styles.formInput)}></Input>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Portfolio (Optional)</Div>
                                    <Input placeholder={"Enter Portfolio"} className ={mergeText(styles.formInput)}></Input>
                            </Div><Experience editor = {Editor} form ={form}></Experience>
                            </Div>
                        </Div>
                    </slider.Render>
                </Div>
                <Div display="flex" justifyContent="space-between" comment = "buttons">
                    <Div onClick={()=>{slider.slide((pidx:number)=> pidx-1);ico.indexi(slider.currentIndex)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(31,41,55)">Previous</Div>
                    <Div onClick={()=>{slider.slide((pidx:number) =>pidx+1);ico.indexi(slider.currentIndex)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(37,99,235)">Next</Div>
                </Div>
        </Div>
    </Center>
}