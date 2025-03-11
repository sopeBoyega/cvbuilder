"use client"
import { Div, Center, TextArea,Input, BaseElementProps } from "../addons/csml"
import BaseHOC from "../addons/HOC"
import SliderHOC from "../addons/Slider"
import React, { useEffect } from "react"

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
                borderRadius="50%"><svg  width="30px" height="30px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9272 3.33179H20.1939C19.3098 3.33179 18.462 3.68298 17.8369 4.3081C17.2117 4.93322 16.8605 5.78107 16.8605 6.66512V6.96512C16.8599 7.54966 16.7056 8.12377 16.4131 8.62985C16.1206 9.13593 15.7001 9.55618 15.1939 9.84845L14.4772 10.2651C13.9705 10.5577 13.3957 10.7117 12.8105 10.7117C12.2254 10.7117 11.6506 10.5577 11.1439 10.2651L10.8939 10.1318C10.129 9.69056 9.22028 9.57086 8.36722 9.79897C7.51416 10.0271 6.78647 10.5843 6.34388 11.3485L5.97722 11.9818C5.53599 12.7467 5.41629 13.6554 5.6444 14.5085C5.8725 15.3615 6.42978 16.0892 7.19388 16.5318L7.44388 16.6985C7.94768 16.9893 8.36658 17.4069 8.65897 17.9098C8.95135 18.4127 9.10704 18.9834 9.11055 19.5651V20.4151C9.11288 21.0025 8.95997 21.58 8.66729 22.0893C8.37461 22.5986 7.95256 23.0214 7.44388 23.3151L7.19388 23.4651C6.42978 23.9077 5.8725 24.6354 5.6444 25.4885C5.41629 26.3415 5.53599 27.2502 5.97722 28.0151L6.34388 28.6485C6.78647 29.4126 7.51416 29.9698 8.36722 30.1979C9.22028 30.426 10.129 30.3063 10.8939 29.8651L11.1439 29.7318C11.6506 29.4392 12.2254 29.2852 12.8105 29.2852C13.3957 29.2852 13.9705 29.4392 14.4772 29.7318L15.1939 30.1485C15.7001 30.4407 16.1206 30.861 16.4131 31.3671C16.7056 31.8731 16.8599 32.4472 16.8605 33.0318V33.3318C16.8605 34.2158 17.2117 35.0637 17.8369 35.6888C18.462 36.3139 19.3098 36.6651 20.1939 36.6651H20.9272C21.8113 36.6651 22.6591 36.3139 23.2842 35.6888C23.9094 35.0637 24.2606 34.2158 24.2606 33.3318V33.0318C24.2611 32.4472 24.4155 31.8731 24.708 31.3671C25.0005 30.861 25.421 30.4407 25.9272 30.1485L26.6439 29.7318C27.1506 29.4392 27.7254 29.2852 28.3105 29.2852C28.8957 29.2852 29.4705 29.4392 29.9772 29.7318L30.2272 29.8651C30.9921 30.3063 31.9008 30.426 32.7539 30.1979C33.6069 29.9698 34.3346 29.4126 34.7772 28.6485L35.1439 27.9985C35.5851 27.2336 35.7048 26.3248 35.4767 25.4718C35.2486 24.6187 34.6913 23.891 33.9272 23.4485L33.6772 23.3151C33.1685 23.0214 32.7465 22.5986 32.4538 22.0893C32.1611 21.58 32.0082 21.0025 32.0106 20.4151V19.5818C32.0082 18.9944 32.1611 18.4169 32.4538 17.9076C32.7465 17.3983 33.1685 16.9755 33.6772 16.6818L33.9272 16.5318C34.6913 16.0892 35.2486 15.3615 35.4767 14.5085C35.7048 13.6554 35.5851 12.7467 35.1439 11.9818L34.7772 11.3485C34.3346 10.5843 33.6069 10.0271 32.7539 9.79897C31.9008 9.57086 30.9921 9.69056 30.2272 10.1318L29.9772 10.2651C29.4705 10.5577 28.8957 10.7117 28.3105 10.7117C27.7254 10.7117 27.1506 10.5577 26.6439 10.2651L25.9272 9.84845C25.421 9.55618 25.0005 9.13593 24.708 8.62985C24.4155 8.12377 24.2611 7.54966 24.2606 6.96512V6.66512C24.2606 5.78107 23.9094 4.93322 23.2842 4.3081C22.6591 3.68298 21.8113 3.33179 20.9272 3.33179Z" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5625 24.9978C23.3239 24.9978 25.5625 22.7592 25.5625 19.9978C25.5625 17.2364 23.3239 14.9978 20.5625 14.9978C17.8011 14.9978 15.5625 17.2364 15.5625 19.9978C15.5625 22.7592 17.8011 24.9978 20.5625 24.9978Z" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                </this.analysis.Render>
                <Div fontSize="13px" color="rgba(156, 163, 175, 1)">Analysis</Div>
            </Div>
        </Div>
    }
}

export default function StepPage(){
    const slider = new SliderHOC({blockLoop:true,slideTime:1000,fitContent:true})
    const haveJobDes = new BaseHOC({Component:Div})
    const yesJobHaveOne = new BaseHOC({Component:Center})
    const noJobHaveOne = new BaseHOC({Component:Center})
    const yesCVHaveOne = new BaseHOC({Component:Center})
    const noCVHaveOne = new BaseHOC({Component:Center})
    const haveCVDes = new BaseHOC({Component:Div})
    const cvFileNameDis = new BaseHOC({Component:Div})
    const analysis = new BaseHOC({Component:Div})
    const ico = new ICOn()

    const CVInput = new BaseHOC<{type?:string,hidden?:boolean}>({Component:(props:any)=><Input {...props}></Input>})
    React.useEffect(()=>{
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
                        <Div display="flex" flexDirection="column" gap="20px">
                            <Div fontSize="20px">Analyzing Your Info</Div>
                            <Div fontSize="15px" color="rgba(156, 163, 175, 1)">We&#39;re processing your information to create the perfect CV</Div>
                            <Center  height={"200px"}>
                                <analysis.Render>
                                    <svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45.8167 8.01562H44.1747C42.1952 8.01563 40.2968 8.80197 38.8971 10.2017C37.4974 11.6014 36.7111 13.4998 36.7111 15.4793V16.151C36.7097 17.4598 36.3642 18.7453 35.7092 19.8785C35.0542 21.0116 34.1127 21.9526 32.9792 22.607L31.3746 23.54C30.24 24.1951 28.9529 24.5399 27.6427 24.5399C26.3326 24.5399 25.0455 24.1951 23.9109 23.54L23.3512 23.2414C21.6385 22.2535 19.6038 21.9855 17.6937 22.4962C15.7837 23.007 14.1543 24.2548 13.1633 25.9657L12.3423 27.3838C11.3544 29.0964 11.0863 31.1311 11.5971 33.0412C12.1078 34.9513 13.3556 36.5806 15.0665 37.5716L15.6263 37.9448C16.7543 38.5961 17.6923 39.5312 18.347 40.6572C19.0017 41.7833 19.3503 43.061 19.3581 44.3635V46.2668C19.3633 47.5819 19.021 48.8751 18.3656 50.0154C17.7103 51.1557 16.7653 52.1025 15.6263 52.7601L15.0665 53.096C13.3556 54.087 12.1078 55.7163 11.5971 57.6264C11.0863 59.5365 11.3544 61.5712 12.3423 63.2839L13.1633 64.7019C14.1543 66.4129 15.7837 67.6606 17.6937 68.1714C19.6038 68.6821 21.6385 68.4141 23.3512 67.4262L23.9109 67.1276C25.0455 66.4726 26.3326 66.1277 27.6427 66.1277C28.9529 66.1277 30.24 66.4726 31.3746 67.1276L32.9792 68.0606C34.1127 68.715 35.0542 69.656 35.7092 70.7892C36.3642 71.9223 36.7097 73.2078 36.7111 74.5166V75.1884C36.7111 77.1678 37.4974 79.0662 38.8971 80.4659C40.2968 81.8656 42.1952 82.652 44.1747 82.652H45.8167C47.7962 82.652 49.6946 81.8656 51.0943 80.4659C52.494 79.0662 53.2803 77.1678 53.2803 75.1884V74.5166C53.2817 73.2078 53.6272 71.9223 54.2822 70.7892C54.9372 69.656 55.8786 68.715 57.0121 68.0606L58.6168 67.1276C59.7514 66.4726 61.0385 66.1277 62.3486 66.1277C63.6588 66.1277 64.9458 66.4726 66.0804 67.1276L66.6402 67.4262C68.3529 68.4141 70.3876 68.6821 72.2976 68.1714C74.2077 67.6606 75.8371 66.4129 76.8281 64.7019L77.6491 63.2465C78.637 61.5339 78.905 59.4992 78.3943 57.5891C77.8835 55.679 76.6357 54.0497 74.9248 53.0587L74.3651 52.7601C73.2261 52.1025 72.2811 51.1557 71.6258 50.0154C70.9704 48.8751 70.628 47.5819 70.6333 46.2668V44.4009C70.628 43.0857 70.9704 41.7925 71.6258 40.6522C72.2811 39.5119 73.2261 38.5651 74.3651 37.9075L74.9248 37.5716C76.6357 36.5806 77.8835 34.9513 78.3943 33.0412C78.905 31.1311 78.637 29.0964 77.6491 27.3838L76.8281 25.9657C75.8371 24.2548 74.2077 23.007 72.2976 22.4962C70.3876 21.9855 68.3529 22.2535 66.6402 23.2414L66.0804 23.54C64.9458 24.1951 63.6588 24.5399 62.3486 24.5399C61.0385 24.5399 59.7514 24.1951 58.6168 23.54L57.0121 22.607C55.8786 21.9526 54.9372 21.0116 54.2822 19.8785C53.6272 18.7453 53.2817 17.4598 53.2803 16.151V15.4793C53.2803 13.4998 52.494 11.6014 51.0943 10.2017C49.6946 8.80197 47.7962 8.01563 45.8167 8.01562Z" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M45.0079 56.5296C51.191 56.5296 56.2034 51.5172 56.2034 45.3341C56.2034 39.151 51.191 34.1387 45.0079 34.1387C38.8249 34.1387 33.8125 39.151 33.8125 45.3341C33.8125 51.5172 38.8249 56.5296 45.0079 56.5296Z" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </analysis.Render>
                            </Center>
                        </Div>
                    </slider.Render>
                </Div>
                <Div display="flex" justifyContent="space-between" comment = "buttons">
                    <Div onClick={()=>{slider.slide((pidx:number)=> pidx-1);ico.indexi(slider.currentIndex)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(31,41,55)">Previous</Div>
                    <Div onClick={()=>{slider.slide((pidx:number)=>pidx+1);ico.indexi(slider.currentIndex)}} padding ="10px" paddingInline="20px" borderRadius="10px" background="rgb(37,99,235)">Next</Div>
                </Div>
        </Div>
    </Center>
}