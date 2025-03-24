"use client"
import { Div, Center, TextArea,Input, BaseElementProps,EButton,Form } from "../addons/csml"
import BaseHOC, { HOCS, InputHOC } from "../addons/HOC"
import SliderHOC from "../addons/Slider"
import React, { HTMLInputTypeAttribute, useEffect } from "react"
import {Dict, mergeText, useUpdate} from "../addons/anys"
import styles from "./styles.module.css"
import {CEXModel, CIEvent} from "@/app/addons/cexmodel";
import { FormatListNumbered } from "@mui/icons-material"

const SubmitHandle = new CEXModel("SubmitEventDispatcherModel")

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
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Form</Div>
            </Div>
        </Div>
    }
}

function Experience(props){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const editorForm =  new BaseHOC({Component:Form})
    const editor:BaseHOC = props.editor;
    editor.SetVariable("editorType","")
    editor.SetVariable("editId",0)

    const [data, setData] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const form:Dict<Dict<string> | string> = props.form;
    const jobTitle = new InputHOC({Component:Input})
    const companyName = new InputHOC({Component:Input})
    const location = new InputHOC({Component:Input})
    const startDate = new InputHOC({Component:Input})
    const endDate = new InputHOC({Component:Input})
    const res = new InputHOC({Component:TextArea})
    const inputs = [jobTitle,companyName,location,startDate,endDate,res]


    var handleSubmit = (key?:number) =>{
        const formData = new FormData(editorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        if (editor.GetVariable("editorType") == "create"){
            setData((ex)=>{
                return [...ex, {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}]
            });
        }
        if(editor.GetVariable("editorType") == "edit"){
            const id = editor.GetVariable("editId")
                setData((ex)=>{
                    return ex.map((fo:Dict)=>{
                        let newfo = fo
                        if (fo.id == id){
                            newfo =  {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}
                        }
                        return newfo
                    })
                });

        }
        if (editor.GetVariable("editorType") == "delete"){
            if (key != undefined){setData((ex)=>{
                const newex:Dict[] = []
                ex.forEach((fo:Dict,idx)=>{
                    if (idx != key){
                        newex.push(fo)
                    }
                })
                // data = [...newex]
                return newex
            });}
            
        }
            setData((d)=>{
                SubmitHandle.dispatcher.FormFill({
                    key: "Experience",
                    value: d.map((form) => {
                        const newDict: Dict = {}
                        newDict.jobTitle = form.jobTitle
                        newDict.companyName = form.companyName
                        newDict.location = form.location
                        newDict.startDate = form.startDate
                        newDict.endDate = form.endDate
                        newDict.res = form.res
                        return newDict
                    })
                })
                return d
            })

    }

    return <Div {...props} className={styles.formField}>

        <Div className ={styles.formLabel}>Experience</Div>
        {data.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.jobTitle}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             editor.style.display("flex")
                             etd.innerText("Edit Experience")
                             btn.innerText("edit")
                             editor.SetVariable("editorType","edit")
                             editor.SetVariable("editId",form.id)
                             jobTitle.Execute((el:HTMLInputElement)=>{
                                 el.value = form.jobTitle
                             })
                             companyName.Execute((el:HTMLInputElement)=>{
                                 el.value = form.companyName
                             })
                             location.Execute((el:HTMLInputElement)=>{
                                 el.value = form.location
                             })
                             startDate.Execute((el:HTMLInputElement)=>{
                                 el.value = form.startDate
                             })
                             endDate.Execute((el:HTMLInputElement)=>{
                                 el.value = form.endDate
                             })
                             res.Execute((el:HTMLInputElement)=>{
                                 el.value = form.res
                             })
                             
                         }}
                >Edit </EButton>
                <EButton
                onClick={()=>{
                    etd.innerText("Edit Experience")
                    btn.innerText("delete")
                    editor.SetVariable("editorType","delete")
                    handleSubmit(key)
                    // Update();
                    }} backgroundColor={"rgba(235,99,37,0.77)"}>delete </EButton>
            </Div>
        })}
        <editor.ToRender renderId ={"0dfd"} onClick={(e)=>{
            if (e.target == editor.Element){
                editor.style.display("none")
        }}}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Experience</etd.Render>
        </editor.ToRender>
        <editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.58)"} backdropFilter = "blur(10px)">
            <editorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Job Title</Div>
                    <jobTitle.Render name={"jobTitle"} placeholder={"Enter Job Title"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Company Name</Div>
                    <companyName.Render name={"companyName"} placeholder={"Enter Company Name"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>location</Div>
                    <location.Render name ={"location"} placeholder={"Enter location"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                    <Div  className ={styles.formLabel}>Start Date</Div>
                    <startDate.Render name={"startDate"} type="date" placeholder={"Enter Start Date"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>End Date</Div>
                    <endDate.Render name={"endDate"} type="date" placeholder={"Enter End Date"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Responsibility</Div>
                    <res.Render name={"res"} placeholder={"Enter Responsibility"} className ={mergeText(styles.formInput)}/>
                </Div>
            </editorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
            onClick={()=>{
                editor.style.display("none")
                handleSubmit()

            }}
            > Create </btn.Render>

        </editor.ToRender>
        <EButton
            onClick={()=>{
               editor.style.display("flex")
                etd.innerText("Create Experience")
                btn.innerText("create")
                editor.SetVariable("editorType","create")
                inputs.forEach(input=>{
                    input.Execute((el:HTMLInputElement)=>{
                        el.value = ""
                    })
                })
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}


function Education(props){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const editorForm =  new BaseHOC({Component:Form})
    const editor:BaseHOC = props.editor;
    editor.SetVariable("editorType","")
    editor.SetVariable("editId",0)
    const [data, setData] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const degree = new InputHOC({Component:Input})
    const university = new InputHOC({Component:Input})
    const graduation_year = new InputHOC({Component:Input})
    const relevant_coursework = new InputHOC({Component:Input})

    const inputs = [degree,university,graduation_year,relevant_coursework]

    var handleSubmit = (key?:number) =>{
        const formData = new FormData(editorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        if (editor.GetVariable("editorType") == "create"){
            setData((ex)=>{
                return [...ex, {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}]
            });
        }
        if(editor.GetVariable("editorType") == "edit"){
            const id = editor.GetVariable("editId")
            setData((ex)=>{
                return ex.map((fo:Dict)=>{
                    let newfo = fo
                    if (fo.id == id){
                        newfo =  {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}
                    }
                    return newfo
                })
            });

        }
        if (editor.GetVariable("editorType") == "delete"){
            if (key != undefined){setData((ex)=>{
                const newex:Dict[] = []
                ex.forEach((fo:Dict,idx)=>{
                    if (idx != key){
                        newex.push(fo)
                    }
                })
                // data = [...newex]
                return newex
            });}

        }
            setData((d)=> {
                SubmitHandle.dispatcher.FormFill({
                    key: "Education",
                    value: d.map((form) => {
                        const newDict: Dict = {}
                        newDict.degree = form.degree
                        newDict.university = form.university
                        newDict.graduation_year = form.graduation_year
                        newDict.relevant_coursework = form.relevant_coursework
                        return newDict
                    })
                })
                return d
            })
    }

    return <Div {...props} className={styles.formField}>
        <Div className ={styles.formLabel}>Education</Div>
        {data.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.degree}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             editor.style.display("flex")
                             etd.innerText("Edit Education")
                             btn.innerText("edit")
                             editor.SetVariable("editorType","edit")
                             editor.SetVariable("editId",form.id)
                             degree.Execute((el:HTMLInputElement)=>{
                                 el.value = form.degree
                             })
                             university.Execute((el:HTMLInputElement)=>{
                                 el.value = form.university
                             })
                             graduation_year.Execute((el:HTMLInputElement)=>{
                                 el.value = form.graduation_year
                             })
                             relevant_coursework.Execute((el:HTMLInputElement)=>{
                                 el.value = form.relevant_coursework
                             })


                         }}
                >Edit </EButton>
                <EButton
                    onClick={()=>{
                        etd.innerText("Edit Education")
                        btn.innerText("delete")
                        editor.SetVariable("editorType","delete")
                        handleSubmit(key)
                        // Update();
                    }} backgroundColor={"rgba(235,99,37,0.77)"}>delete </EButton>
            </Div>
        })}
        <editor.ToRender renderId ={"0dfd"} onClick={(e)=>{
            if (e.target == editor.Element){
                editor.style.display("none")
            }}}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Education</etd.Render>
        </editor.ToRender>
        <editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.58)"} backdropFilter = "blur(10px)">
            <editorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Degree</Div>
                    <degree.Render name={"degree"} placeholder={"Enter Degree"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>University</Div>
                <university.Render name={"university"} placeholder={"Enter University"} className ={mergeText(styles.formInput)}/>
            </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>Graduation Year</Div>
                <graduation_year.Render name ={"graduation_year"} type="date" placeholder={"Enter Graduation Year"} className ={mergeText(styles.formInput)}/>
            </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>Relevant Coursework</Div>
                <relevant_coursework.Render name={"relevant_coursework"} placeholder={"Enter Relevant Coursework e.g \"Data Structures\", \"Algorithms\", \"Database Management\""} className ={mergeText(styles.formInput)}/>
            </Div>
            </editorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
                        onClick={()=>{
                            editor.style.display("none")
                            handleSubmit()
                        }}
            > Create </btn.Render>

        </editor.ToRender>
        <EButton
            onClick={()=>{
                editor.style.display("flex")
                etd.innerText("Create Education")
                btn.innerText("create")
                editor.SetVariable("editorType","create")
                inputs.forEach(input=>{
                    input.Execute((el:HTMLInputElement)=>{
                        el.value = ""
                    })
                })
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}


function Certification(props:Dict){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const editorForm =  new BaseHOC({Component:Form})
    const editor:BaseHOC = props.editor;
    editor.SetVariable("editorType","")
    editor.SetVariable("editId",0)
    const [data, setData] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const name = new InputHOC({Component:Input})
    const issuing_organization = new InputHOC({Component:Input})
    const issue_date = new InputHOC({Component:Input})

    const inputs = [name,issuing_organization,issue_date]

    var handleSubmit = (key?:number) =>{
        const formData = new FormData(editorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        if (editor.GetVariable("editorType") == "create"){
            setData((ex)=>{
                return [...ex, {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}]
            });
        }
        if(editor.GetVariable("editorType") == "edit"){
            const id = editor.GetVariable("editId")
            setData((ex)=>{
                return ex.map((fo:Dict)=>{
                    let newfo = fo
                    if (fo.id == id){
                        newfo =  {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}
                    }
                    return newfo
                })
            });

        }
        if (editor.GetVariable("editorType") == "delete"){
            if (key != undefined){setData((ex)=>{
                const newex:Dict[] = []
                ex.forEach((fo:Dict,idx)=>{
                    if (idx != key){
                        newex.push(fo)
                    }
                })
                // data = [...newex]
                return newex
            });}

        }
            setData((d)=> {
                SubmitHandle.dispatcher.FormFill({
                    key: "Certification",
                    value: d.map((form) => {
                        const newDict: Dict = {}
                        newDict.name = form.name
                        newDict.issuing_organization = form.issuing_organization
                        newDict.issue_date = form.issue_date
                        return newDict
                    })
                })
                return d
            })
    }

    return <Div {...props} className={styles.formField}>
        <Div  className ={styles.formLabel}>Certification</Div>
        {data.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.name}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             editor.style.display("flex")
                             etd.innerText("Edit Certification")
                             btn.innerText("edit")
                             editor.SetVariable("editorType","edit")
                             editor.SetVariable("editId",form.id)
                             name.Execute((el:HTMLInputElement)=>{
                                 el.value = form.name
                             })
                             issuing_organization.Execute((el:HTMLInputElement)=>{
                                 el.value = form.issuing_organization
                             })
                             issue_date.Execute((el:HTMLInputElement)=>{
                                 el.value = form.issue_date
                             })
                         }}
                >Edit </EButton>
                <EButton
                    onClick={()=>{
                        etd.innerText("Edit Certification")
                        btn.innerText("delete")
                        editor.SetVariable("editorType","delete")
                        handleSubmit(key)
                        // Update();
                    }} backgroundColor={"rgba(235,99,37,0.77)"}>delete </EButton>
            </Div>
        })}
        <editor.ToRender renderId ={"0dfd"} onClick={(e)=>{
            if (e.target == editor.Element){
                editor.style.display("none")
            }}}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Certification</etd.Render>
        </editor.ToRender>
        <editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.58)"} backdropFilter = "blur(10px)">
            <editorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Name</Div>
                    <name.Render name={"name"} placeholder={"Enter Name"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>Issuing Organization</Div>
                <issuing_organization.Render name={"issuing_organization"} placeholder={"Enter Issuing Organization"} className ={mergeText(styles.formInput)}/>
            </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>Issue Date</Div>
                <issue_date.Render type="date" name ={"issue_date"} placeholder={"Enter Issue Date"} className ={mergeText(styles.formInput)}/>
            </Div>
            </editorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
                        onClick={()=>{
                            editor.style.display("none")
                            handleSubmit()
                        }}
            > Create </btn.Render>

        </editor.ToRender>
        <EButton
            onClick={()=>{
                editor.style.display("flex")
                etd.innerText("Create Certification")
                btn.innerText("create")
                editor.SetVariable("editorType","create")
                inputs.forEach(input=>{
                    input.Execute((el:HTMLInputElement)=>{
                        el.value = ""
                    })
                })
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}


function Project(props:any){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const editorForm =  new BaseHOC({Component:Form})
    const editor:BaseHOC = props.editor;
    editor.SetVariable("editorType","")
    editor.SetVariable("editId",0)
    const [data, setData] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const name = new InputHOC({Component:Input})
    const description = new InputHOC({Component:TextArea})
    const technologies_used = new InputHOC({Component:Input})
    const link = new InputHOC({Component:Input})

    const inputs = [name,description,technologies_used,link]

    var handleSubmit = (key?:number) =>{
        const formData = new FormData(editorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        if (editor.GetVariable("editorType") == "create"){
            setData((ex)=>{
                return [...ex, {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}]
            });
        }
        if(editor.GetVariable("editorType") == "edit"){
            const id = editor.GetVariable("editId")
            setData((ex)=>{
                return ex.map((fo:Dict)=>{
                    let newfo = fo
                    if (fo.id == id){
                        newfo =  {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}
                    }
                    return newfo
                })
            });

        }
        if (editor.GetVariable("editorType") == "delete"){
            if (key != undefined){setData((ex)=>{
                const newex:Dict[] = []
                ex.forEach((fo:Dict,idx)=>{
                    if (idx != key){
                        newex.push(fo)
                    }
                })
                // data = [...newex]
                return newex
            });}

        }
            setData((d)=> {
                SubmitHandle.dispatcher.FormFill({
                    key: "Project",
                    value: d.map((form) => {
                        const newDict: Dict = {}
                        newDict.name = form.name
                        newDict.description = form.description
                        newDict.technologies_used = (form.technologies_used as string).split(",") || []
                        newDict.link = form.link
                        return newDict
                    })
                })
                return d
            })
    }

    return <Div {...props} className={styles.formField}>
        <Div className ={styles.formLabel}>Project</Div>
        {data.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.name}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             editor.style.display("flex")
                             etd.innerText("Edit Project")
                             btn.innerText("edit")
                             editor.SetVariable("editorType","edit")
                             editor.SetVariable("editId",form.id)
                             name.Execute((el:HTMLInputElement)=>{
                                 el.value = form.name
                             })
                             description.Execute((el:HTMLInputElement)=>{
                                 el.value = form.description
                             })
                             technologies_used.Execute((el:HTMLInputElement)=>{
                                 el.value = form.technologies_used
                             })
                             link.Execute((el:HTMLInputElement)=>{
                                 el.value = form.link
                             })
                         }}
                >Edit </EButton>
                <EButton
                    onClick={()=>{
                        etd.innerText("Edit Project")
                        btn.innerText("delete")
                        editor.SetVariable("editorType","delete")
                        handleSubmit(key)
                        // Update();
                    }} backgroundColor={"rgba(235,99,37,0.77)"}>delete </EButton>
            </Div>
        })}
        <editor.ToRender renderId ={"0dfd"} onClick={(e)=>{
            if (e.target == editor.Element){
                editor.style.display("none")
            }}}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Project</etd.Render>
        </editor.ToRender>
        <editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.58)"} backdropFilter = "blur(10px)">
            <editorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Name</Div>
                    <name.Render name={"name"} placeholder={"Enter Name"} className ={mergeText(styles.formInput)}/>
                </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>description</Div>
                <description.Render name={"description"} placeholder={"Enter description"} className ={mergeText(styles.formInput)}/>
            </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>Technologies Used</Div>
                <technologies_used.Render name ={"technologies_used"} placeholder={"Separate by a comma e.g react, python"} className ={mergeText(styles.formInput)}/>
            </Div><Div className={styles.formField}>
                <Div className ={styles.formLabel}>link</Div>
                <link.Render name ={"link"} placeholder={"Enter link"} className ={mergeText(styles.formInput)}/>
            </Div>
            </editorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
                        onClick={()=>{
                            editor.style.display("none")
                            handleSubmit()
                        }}
            > Create </btn.Render>

        </editor.ToRender>
        <EButton
            onClick={()=>{
                editor.style.display("flex")
                etd.innerText("Create Project")
                btn.innerText("create")
                editor.SetVariable("editorType","create")
                inputs.forEach(input=>{
                    input.Execute((el:HTMLInputElement)=>{
                        el.value = ""
                    })
                })
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}

function Skill(props:any){
    const etd = new BaseHOC()
    const btn = new BaseHOC({Component:EButton})
    const editorForm =  new BaseHOC({Component:Form})
    const editor:BaseHOC = props.editor;
    editor.SetVariable("editorType","")
    editor.SetVariable("editId",0)
    const [data, setData] = React.useState<Dict[]>([])
    const Update = useUpdate();
    const name = new InputHOC({Component:Input})
    const inputs = [name]

    var handleSubmit = (key?:number) =>{
        const formData = new FormData(editorForm.Element)
        const formObject = Object.fromEntries(formData.entries());

        if (editor.GetVariable("editorType") == "create"){
            setData((ex)=>{
                return [...ex, {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}]
            });
        }
        if(editor.GetVariable("editorType") == "edit"){
            const id = editor.GetVariable("editId")
            setData((ex)=>{
                return ex.map((fo:Dict)=>{
                    let newfo = fo
                    if (fo.id == id){
                        newfo =  {...formObject,id:Math.random()*1000*(ex.length+(Math.random()*10))}
                    }
                    return newfo
                })
            });

        }
        if (editor.GetVariable("editorType") == "delete"){
            if (key != undefined){setData((ex)=>{
                const newex:Dict[] = []
                ex.forEach((fo:Dict,idx)=>{
                    if (idx != key){
                        newex.push(fo)
                    }
                })
                // data = [...newex]
                return newex
            });}

        }
            setData((d)=> {
                SubmitHandle.dispatcher.FormFill({
                    key: "Skill",
                    value: d.map((form) => {
                        
                        return form.name
                    })
                })
                return d
            })
    }

    return <Div {...props} className={styles.formField}>
        <Div className ={styles.formLabel}>Skill</Div>
        {data.map((form:Dict,key)=> {
            return <Div display={"grid"} gridTemplateColumns={"1fr auto auto"} gap={"10px"} key={key}>
                <EButton backgroundColor={"rgba(31, 41, 55, 1)"}>{form.name}</EButton>
                <EButton backgroundColor={"rgba(37, 99, 235, 1)"}
                         onClick={()=>{
                             editor.style.display("flex")
                             etd.innerText("Edit Skill")
                             btn.innerText("edit")
                             editor.SetVariable("editorType","edit")
                             editor.SetVariable("editId",form.id)
                             name.Execute((el:HTMLInputElement)=>{
                                 el.value = form.name
                             })
                            
                         }}
                >Edit </EButton>
                <EButton
                    onClick={()=>{
                        etd.innerText("Edit Skill")
                        btn.innerText("delete")
                        editor.SetVariable("editorType","delete")
                        handleSubmit(key)
                        // Update();
                    }} backgroundColor={"rgba(235,99,37,0.77)"}>delete </EButton>
            </Div>
        })}
        <editor.ToRender renderId ={"0dfd"} onClick={(e)=>{
            if (e.target == editor.Element){
                editor.style.display("none")
            }}}>
            <etd.Render fontSize={"30px"} fontWeight={"bolder"}>Create Skill</etd.Render>
        </editor.ToRender>
        <editor.ToRender renderId ={"dfdfdf"} backgroundColor={"rgba(0,0,0,0.58)"} backdropFilter = "blur(10px)">
            <editorForm.Render display={"flex"} flexDirection={"column"} gap={"10px"} width={"80%"} padding={"20px"} borderRadius={"10px"} maxWidth={'500px'} height = {"fit-content"} minHeight={"300px"} backgroundColor={"rgb(17,24,39)"}>
                <Div className={styles.formField}>
                    <Div className ={styles.formLabel}>Name</Div>
                    <name.Render name={"name"} placeholder={"Enter Name"} className ={mergeText(styles.formInput)}/>
                </Div>
            </editorForm.Render>
            <btn.Render backgroundColor={"rgba(37, 99, 235, 1)"}
                        onClick={()=>{
                            editor.style.display("none")
                            handleSubmit()
                        }}
            > Create </btn.Render>

        </editor.ToRender>
        <EButton
            onClick={()=>{
                editor.style.display("flex")
                etd.innerText("Create Skill")
                btn.innerText("create")
                editor.SetVariable("editorType","create")
                inputs.forEach(input=>{
                    input.Execute((el:HTMLInputElement)=>{
                        el.value = ""
                    })
                })
            }}
            width={"fit-content"} backgroundColor = "rgba(45, 45, 45, 0.29)" color={"white"}>create + </EButton>
    </Div>
}


export default function StepPage(){
    const slider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true,direction:"row"})
    const haveJobDes = new BaseHOC({Component:Div})
    const yesJobHaveOne = new BaseHOC({Component:Center})
    const noJobHaveOne = new BaseHOC({Component:Center})
    const yesCVHaveOne = new BaseHOC({Component:Center})
    const noCVHaveOne = new BaseHOC({Component:Center})
    const haveCVDes = new BaseHOC({Component:Div})

    const jobDes  = new InputHOC({Component:TextArea})
    const cvFileNameDis = new BaseHOC({Component:Div})
    const analysis = new BaseHOC({Component:Div})
    const ico = new ICOn(slider)
    const form:Dict<Dict<string> | string>  = {}
    let postRequestBody:Dict = {}
    const nextBtn = new BaseHOC()
    const exEditor = new BaseHOC()
    const eduEditor = new BaseHOC()
    const ceEditor = new BaseHOC()
    const prEditor = new BaseHOC()
    const skEditor = new BaseHOC()
    const resp = new BaseHOC()
    const CVInput = new BaseHOC<{type?:string,hidden?:boolean}>({Component:(props:any)=><Input {...props}></Input>})
    
    
    const jobTitle  = new InputHOC({Component:Input})
    const summary  = new InputHOC({Component:Input})
    const fullName  = new InputHOC({Component:Input})
    const Email  = new InputHOC({Component:Input})
    const linkedin  = new InputHOC({Component:Input})
    const phone  = new InputHOC({Component:Input})
    const portfolio  = new InputHOC({Component:Input})
    const language  = new InputHOC({Component:Input})
    const additionalInfo  = new InputHOC({Component:TextArea})
    const frontInputs = [
        jobTitle,
        fullName,
        Email,
        phone,
        language,
    ]
    
    function FormFinalizeFunction(){
        let is_checked = true
        frontInputs.forEach((input:InputHOC)=>{
            if (String(input.Element?.value).trim() == ""){
                input.style.border("2px solid red")
                is_checked = false
            }else{
                input.style.border("none")
            }
        })
        if (is_checked){
            Finalize()
        }

    }
    function Finalize(){
        postRequestBody = {
            ["Form"]:{
                ["full_name"]: form.fullname,
                ["email"]: form.email ,
                ["phone"]: form.phone,
                ["linkedin"]: form.linkedin,
                ["portfolio"]: form.portfolio || "",
                ["additional_info"]: form.additionalinfo || "",
                ["languages"]: (form.language as string).split(",") || [form.language || ""],
                ["experience"]: form.Experience || [],
                ["education"]: form.Education || [],
                ["certifications"]: form.Certification || [],
                ["projects"]: form.Project || [],
                ["skills"]: form.Skill || [],
            },
            ["jobTitle"]:jobTitle.Element?.value || "", 
            ["jobDes"]:jobDes.Element?.value || ""
        }
        
        RequestHandler()
    }
    function RequestHandler(){
        resp.style.display("flex")
        resp.innerText("Loading...")
        console.log(postRequestBody)
        fetch("http://127.0.0.1:8000/ai/textifycv",{
            method:"post",
            body:JSON.stringify(postRequestBody)
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            resp.innerText(res.ai_response)
            
        })
        .catch((err)=>{
            console.log(err)
            resp.style.display("none")
            alert("Something went wrong")
            })
    
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            // setDatas(()=>[1])
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
        ico.indexi(slider.currentIndex)
        if (index == slider.children.length-1){
            nextBtn.innerText("Submit")
        }else{
            nextBtn.innerText("Next")
        }
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
    slider.onEnd  = FormFinalizeFunction;
    return <Center backgroundColor="rgb(13,17,23)">
        <resp.Render position={"fixed"} padding = {"20px"} width="100vw" zIndex="2000" backgroundColor="black" color="white" height="100vh" display={"none"}>
        </resp.Render>
        <SubmitHandle.CEXRenderCreate channel={"FormFill"} onEvent={FormfillHandler}></SubmitHandle.CEXRenderCreate>
        <exEditor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

        </exEditor.Render><eduEditor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

        </eduEditor.Render><ceEditor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

        </ceEditor.Render><prEditor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

        </prEditor.Render><skEditor.Render position={"fixed"} flexDirection={"column"} gap={"30px"} comment = {"experience Editor"} zIndex={'1000'} width={"100vw"} display={"none"} alignItems={"center"} justifyContent={"center"} backgroundColor={"black"} height={"100vh"} top={"0px"} left={"0px"}>

</skEditor.Render>
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
                                <jobDes.Render id="" outline="none" borderRadius="10px" padding ="10px" placeholder = "Paste job description here..." background="rgba(55, 65, 81, 1)" ></jobDes.Render>
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
                                    <Div padding = "20px" borderStyle="dashed" onClick={()=>CVInput.Execute((el:HTMLInputElement)=>{el.click()})} paddingBlock = "30px"  borderRadius="10px" border="2px solid rgba(65, 75, 91, 1)" display="grid" placeItems="center" gap="10px">
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
                                    <fullName.Render placeholder={"Enter Full Name"} onChange={(e:any)=>form["fullname"] = e.target.value}  className ={mergeText(styles.formInput)}></fullName.Render>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Email</Div>
                                    <Email.Render placeholder={"Enter Email"} onChange={(e:any)=>form["email"] = e.target.value} className ={mergeText(styles.formInput)}></Email.Render>
                                </Div><Div className={styles.formField}>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Job Title</Div>
                                    <jobTitle.Render placeholder={"Enter Job Title"} onChange={(e:any)=>form["jobtitle"] = e.target.value} className ={mergeText(styles.formInput)}></jobTitle.Render>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>LinkedIn (Optional)</Div>
                                    <linkedin.Render placeholder={"Enter LinkedIn"} onChange={(e:any)=>form["linkedin"] = e.target.value} className ={mergeText(styles.formInput)}></linkedin.Render>
                                </Div><Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Phone</Div>
                                    <phone.Render placeholder={"Enter Phone Number"} onChange={(e:any)=>form["phone"] = e.target.value} className ={mergeText(styles.formInput)}></phone.Render>
                                </Div>
                                <Experience editor = {exEditor} form ={form}></Experience>
                                <Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Portfolio (Optional)</Div>
                                    <portfolio.Render placeholder={"Enter Portfolio"} onChange={(e:any)=>form["portfolio"] = e.target.value} className ={mergeText(styles.formInput)}></portfolio.Render>
                            </Div>

                                <Education editor = {eduEditor} form ={form}/>
                                <Skill editor = {skEditor} form ={form}/>
                                <Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Languages</Div>
                                    <language.Render placeholder={"Separate by a comma e.g english, spanish"} onChange={(e:any)=>form["language"] = e.target.value} className ={mergeText(styles.formInput)}></language.Render>
                                </Div>
                                <Certification editor = {ceEditor} form ={form}/>
                                <Project editor = {prEditor} form ={form}/>
                                <Div className={styles.formField}>
                                    <Div className ={styles.formLabel}>Additional info</Div>
                                    <additionalInfo.Render placeholder={"Enter additional info"} onChange={(e:any)=>form["additionalinfo"] = e.target.value} className ={mergeText(styles.formInput)}></additionalInfo.Render>
                                </Div>
                            </Div>
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
    </Center>
}