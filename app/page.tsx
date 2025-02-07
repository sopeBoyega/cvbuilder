import Image from "next/image";
import { notoSans } from "./fonts/fonts";

export default function Home() {
  return (
    <div className="min-w-full min-h-full bg-white">
      {/* Hero Section */}
      <div className="w-full h-full bg-[url(/hero.png)] flex items-start justify-center relative">
        {/* Navbar */}
        <div className="w-[90%] h-[50px]  flex justify-between items-center absolute z-50 ">
          <div className="">
            <p className={`${notoSans.className} `}>CV Builder</p>
          </div>

          <div className="w-fit h-fit flex flex-row gap-2  justify-center items-center">
            <p className={`${notoSans.className} `}>Sign in</p>
            <button className="border-[1.5px] rounded-[15px] py-[6.5px] px-[11.5px] border-[#D0D7DE]">
              <p>Sign Up</p>
            </button>
          </div>
        </div>

        <Image
          src="/hero.png"
          width={0}
          height={0}
          layout="responsive"
          alt="Image"
        />
        <Image
          src="/branch.svg"
          width={350}
          height={1000}
          alt="Image"
          className="absolute left-[3vw] top-[15vh]"
        />

        <div className="w-[80%] h-[500px]  absolute left-[8vw]  bottom-[4rem] flex flex-col items-start justify-start">
          {/* CV tab */}
          <div className="w-fit h-fit scale-[1.0] bottom-0 gap-5 rounded-full py-[5px] px-[5px] mt-[-10px] bg-transparent border-[1.5px] border-[#424B5B] flex flex-row justify-center  items-center ">
            <Image src="/cv.svg" width={50} height={50} alt="Image" />
            <div className="flex flex-col">
              <p>CV Builder Hub: Craft Your Professional Identity</p>
              <p className="text-[#6E7681] text-[15px]">
                Create your CV effortlessly—completely free!
              </p>
            </div>
          </div>

          <p className="font-[700] text-[50px] text-white">
            Start Your <br />Professional Journey
          </p>

          <p className="text-[#8B949E] font-[400] text-[20px]">Create, customize, and download your perfect CV—no <br />
             fees, no hassle, just results. Fast, easy, and tailored for <br />
              success.</p>


            <div className="w-full h-fit flex flex-row items-center gap-7 mt-7 justify-start">
             <div className="flex flex-row justify-center items-center  w-fit h-fit">
             <input type="email" name="" id=""  placeholder="Email address" className="placeholder-[#6E7781] text-black p-2 rounded-s-lg"/>
             <button className="text-center p-[7.3px] bg-black rounded-e-lg border-[1px] border-white ">Sign Up for CV</button>
             </div>

              <hr className="h-full  border-[0.4px] " />
              
              <button className="text-center p-[7.3px] bg-black rounded-lg border-[1px]  border-white ">Sign In → </button>
              </div>  
        </div>
      </div>
    </div>
  );
}
