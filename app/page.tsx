import Image from "next/image";
import { notoSans } from "./fonts/fonts";
import List from "./components/list";

export default function Home() {

const footerItems = [
  ["Features", "Pricing", "Blog", "Testimonials", "FAQs"],
  ["Sign Up", "Sign In", "Privacy Policy", "Terms of Service"],
  ["Help Center", "Contact Us", "Live Chat", "Resources"],
  ["About Us", "Careers", "Press", "Instagram", "Facebook", "Twitter"]
]


  return (
    <div className="w-full h-full  bg-[#0D1117]">
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
            className=" mt-[55vw] "
          />
          <Image
            src="/branch4.svg"
            width={90}
            height={100}
            alt="branch3"
            className=" mt-[15vw] ml-[-5px] "
          />
          <Image
            src="/branch5.svg"
            width={90}
            height={100}
            alt="branch5"
            className=" mt-[55vw] ml-[-5px] "
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
      <div className="w-full  h-[1700px] bg-[#0D1117]  ">
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
              create a professional CV in just minutes —
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
            <p className="text-white">
              create and download your professional CV <br />
              in half the time compared to traditional <br />
              methods.
            </p>
          </div>
          <div className="w-[80%] h-auto absolute bottom-[-600px] right-0">
            <Image
              src="/bg-stars.png"
              width={0}
              height={0}
              layout="responsive"
              alt="Image"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Customization */}
      <div className="w-full block h-[1850px] bg-[#0D1117] mt-[5vw]">
        <div className=" ml-[9vw]   mt-[7rem]  z-50 ">
          <p className=" text-responsive font-[700]">Customization</p>
          <p className="font-[500] text-[25px]">
            Tailor your CV to suit your specific career <br />
            goals and industry with personalized <br />
            templates, flexible formatting options, <br />
            and expert guidance
            <span className="text-[#FFA28B] ml-1">
              — ensuring the perfect <br />
              match every time and setting you apart <br />
              from the competition.
            </span>
          </p>
        </div>

        <div className="w-[100%] place-self-center relative  mt-[5rem] z-[10003] h-auto ">
          <Image
            src="/customImg.png"
            width={0}
            height={0}
            layout="responsive"
            alt="Image"
            className=""
          />

          <div className="left-[9vw] bottom-[6rem]   absolute ">
            <p className="text-[20px] ">
              <span className="text-[#FFA28B] ">
                {" "}
                CV builder helps you stand out with
              </span>{" "}
              <br />
              customizable tools to adjust every detail— <br />
              layout, font, sections, and colors—ensuring <br />
              your CV meets industry standards and leaves <br />a lasting
              impression.
            </p>

            <p className="underline mt-[17px] ">
              Generate Your World Cloud Instantly
            </p>
          </div>

          <div className="absolute left-[10vw] text-[#FFA28B] pl-5">
            <div className="w-fit h-fit rounded-2xl bg-transparent  py-[3px] px-[15px] border-[1px] border-[#FFA28B] text-inherit text-[10px]">
              Did you know?
            </div>
            <p className="text-inherit text-[45px] font-[500]">92% success</p>
            <p className="text-white">
              users report a 92% improvement in landing <br />
              interviews with a polished, tailored CV.
            </p>
          </div>

          <div className="w-[80%] h-auto absolute bottom-[-600px] right-0">
            <Image
              src="/bg-stars.png"
              width={0}
              height={0}
              layout="responsive"
              alt="Image"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[1850px] mt-[80px] bg-inherit">
        <div className=" ml-[3vw] mt-[3.5rem]  flex flex-row  z-50 ">
          <Image
            src="/branch6.svg"
            width={90}
            height={100}
            alt="branch5"
            className="  ml-[-5px] "
          />
          <div className="">
            <p className="text-white text-[50px] font-[700]">Intelligence</p>
            <p className="font-[500] text-[27px]">
              <span className="text-[#939AFF]">CV Builder uses AI</span> to
              analyze your input <br /> and automatically generate a
              professional <br />
              CV tailored to your industry and career <br />
              goals. Save time and get optimized results <br />
              effortlessly.
            </p>
          </div>
        </div>

        <div className="w-[100%] place-self-center relative   z-[10003] h-auto ">
          <Image
            src="/intelliImg.png"
            width={0}
            height={0}
            layout="responsive"
            alt="Imatext-[#939AFF] "
            className=""
          />

          <div className="bottom-[-270px] absolute">
             <Image
             src='branch7.svg'
             width={100}
             height={100}
             alt="Image"/>

          </div>

          <div className="left-[9vw] bottom-[3rem]   absolute ">
            <p className="text-[20px] ">
              <span className="text-[#939AFF] ">
                {" "}
                CV builder uses AI
              </span>{" "}
              goes beyond formatting,<br />
              analyzing your input to suggest action <br />
              words,key skills, and role-specific <br />
              keywords—tailoring your CV to impress <br />
              recruiters and boost interview chances.
            </p>

            <p className="underline mt-[17px] ">
              Generate Your World Cloud Instantly
            </p>
          </div>

          <div className="absolute left-[10vw] text-[#939AFF] pl-5">
            <div className="w-fit h-fit rounded-2xl bg-transparent  py-[3px] px-[15px] border-[1px] border-[#939AFF] text-inherit text-[10px]">
              Did you know?
            </div>
            <p className="text-inherit text-[45px] font-[500]">85% success</p>
            <p className="text-white">
            say our AI driven CV builder improved<br />
             their application success rates.
            </p>
          </div>

          <div className="w-[80%] h-auto absolute bottom-[-600px] right-0">
            <Image
              src="/bg-stars.png"
              width={0}
              height={0}
              layout="responsive"
              alt="Image"
              className=""
            />
          </div>
        </div>
      </div>

{/* Sign Up */}
<div className="w-full bg-[url(/bg-stars-image.png)] h-[700px] gap-3 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center">
<p className="text-responsive  font-[700] text-center ">The tool for everyone, everywhere, to <br />
 craft their perfect CV.</p>

 <p className="font-[400] text-[clamp(1rem,2.5vw,1.5rem)] text-center text-[#8B949E]">Join thousands of professionals using CV Builder to create standout resumes. <br />
  Sign up or log in now and take the first step toward your dream career!"</p>

  <div className="w-fit h-fit flex gap-2 ">
    <button className="bg-white w-[300px] text-black px-[16px] py-[12px]  rounded-md font-[700]">Sign Up for CV Builder  ›</button>
    <button className="bg-transparent w-[300px] text-white px-[16px] py-[12px] rounded-md border-[1px] border-white font-[700]">Sign in to CV Builder</button>
  </div>
</div>

{/* Footer */}
<div className="w-full relative  justify-center items-center flex  h-[400px] bg-[#0D1117] ">
  <div className=" w-[90%] flex flex-row justify-between gap-4">
    <div className="flex h-fit w-fit flex-col">
      <p className="text-responsive font-[700] ">CV Builder</p>
      <div className={`${notoSans.className} text-[#C9D1D9]`}>
      <p>Subscribe to our newsletter</p>
      <p className=" text-[#8B949E] text-[14px]">Get product updates, company news, and more.</p>
       <button className="px-[16px] py-[12px] rounded-md bg-transparent border-[1px] mt-3 border-white">Subscribe</button>
      </div>
  
    </div>


    {footerItems.map((item,key) => (
   <List key={key} list={item}/>
    ))
    }
  </div>

</div>
<div className={`${notoSans.className} pl-[100px] w-full h-[50px] flex flex-row text-[#8B949E] text-[13px] text-center gap-4 items-center bg-[#161B22]`}>
<p>© 2025 CV Builder, Inc.</p>
<p>Terms</p>
<p>Privacy(Updated 01/2025)</p>
</div>
      
    </div>
  );
}
