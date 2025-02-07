import Image from "next/image";
import { notoSans } from "./fonts/fonts";

export default function Home() {
  return (
    <div className="w-full h-full flex  flex-col bg-[#0D1117]">
      {/* Hero Section */}
      <div className="w-full h-[100vh] lg:h-[750px]  bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat  flex items-start justify-center relative">
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

        <div className="  hidden absolute left-[3vw] z-[500]   top-[11vh] md:flex flex-col items-start justify-center">
          <Image
            src="/branch.svg"
            width={350}
            height={0}
            alt="Image"
            className=""
          />
          <Image
            src="/branch2.svg"
            width={2.5}
            height={0}
            alt="Image"
            className="ml-[37px] mt-[-25px]"
          />
          <Image
            src="/branch3.svg"
            width={100}
            height={100}
            alt="branch3"
            className=" mt-[55vw] scale-[]"
          />
        </div>

        <div className="w-[80%] h-[500px]  absolute left-[8vw] top-[25vh] lg:top-[50vh] flex flex-col items-start justify-start">
          {/* CV tab */}
          <div className=" hidden  w-fit h-fit scale-[1.0] bottom-0 gap-5 rounded-full py-[5px] px-[5px] mt-[-10px] bg-transparent border-[1.5px] border-[#424B5B] md:flex flex-row justify-center  items-center ">
            <Image src="/cv.svg" width={35} height={35} alt="Image" />
            <div className="flex flex-col">
              <p className="text-[15px]">
                CV Builder Hub: Craft Your Professional Identity
              </p>
              <p className="text-[#6E7681] text-[15px]">
                Create your CV effortlessly—completely free!
              </p>
            </div>
          </div>

          <p className="font-[700] text-responsive text-white">
            Start Your <br />
            Professional Journey
          </p>

          <p className="text-[#8B949E] font-[400] text-[clamp(1rem,2.5vw,1.5rem)]">
            Create, customize, and download your perfect CV—no <br />
            fees, no hassle, just results. Fast, easy, and tailored for <br />
            success.
          </p>

          <div className="w-full h-fit flex flex-row items-center gap-7 mt-7 justify-start">
            <div className="flex flex-row justify-center items-center z-[505]  w-fit h-fit">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email address"
                className="placeholder-[#6E7781] text-black p-2 rounded-s-lg"
              />
              <button className="text-center p-[7.3px]  bg-black rounded-e-lg border-[1px] border-white ">
                Sign Up for CV
              </button>
            </div>

            <hr className=" hidden md:flex h-full  border-[0.4px] " />

            <button className=" hidden md:flex text-center p-[7.3px] bg-black rounded-lg border-[1px]  border-white ">
              Sign In →{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Simplicity */}
      <div className="w-full  h-[3000px] bg-[#0D1117]  ">
        <div className=" ml-[9vw] mt-[3.5rem] z-50 ">
          <p className="text-white text-[50px] font-[700]">Simplicity</p>
          <p className="font-[500] text-[27px]">
            Build a professional CV in minutes with <br />
            our user-friendly platform
            <span className="text-[#7EE787]">
              {" "}
              — no design <br /> skills required.
            </span>{" "}
          </p>
        </div>

        <div className="w-[100%] place-self-center relative  mt-[5rem] z-[10003] h-auto ">
          <Image
            src="/simplicityImage.png"
            width={0}
            height={0}
            layout="responsive"
            alt="Image"
            className=""
          />
             
      
       

          <div className="left-[9vw] bottom-[6rem]   absolute ">
            <p className="text-[20px] ">
              {" "}
              <span className="text-[#7EE787] ">Our CV builder</span> makes the
              process <br />
              seamless, guiding you step-by-step to <br /> 
              create a professional
              CV in just minutes — 
              <br />
              perfect for all career levels.
            </p>

            <p className="underline mt-[17px] ">
              Generate Your World Cloud Instantly
            </p>
          </div>

          <div className="absolute left-[10vw] text-[#8AEB93] pl-5">
            <div className="w-fit h-fit rounded-2xl bg-transparent  py-[3px] px-[15px] border-[1px] border-[#8AEB93] text-inherit text-[10px]">
              Did you know?
            </div>
            <p className="text-inherit text-[45px] font-[500]">50% faster</p>
            <p className="text-white">create and download your professional CV <br /> 
            in half the time compared to traditional <br />
             methods.</p>
          </div>
          <div className="w-[80%] h-auto absolute bottom-[-600px] right-0">
       <Image
        src='/bg-stars.png'
        width={0}
        height={0}
        layout="responsive"
        alt="Image"
        className=""/>
       </div>
        </div>
    
      </div>
    </div>
  );
}
