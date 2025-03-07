"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value.replace(/\D/, "").slice(0, 1); // Ensure only one digit
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if a digit is entered
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form reload

    if (JSON.stringify(code) === JSON.stringify(["0", "0", "0", "0", "0", "0"])) {
      alert("Correct");
    } else {
      alert("Wrong Code");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-white text-center font-semibold text-[22.55px]">
          We've emailed you a code
        </p>
        <p className="text-subheading text-center text-[12.88px] font-[400]">
          To continue account setup, enter the code we’ve sent to: <br /> User@gmail.com
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 items-center justify-center m-3">
          {code.map((item, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={item}
              className="bg-transparent w-[41px] h-[37px] border-[2px] border-white rounded-md text-center custom-number-input"
              onChange={(e) => onChangeHandler(e, index)}
            />
          ))}
        </div>

        <button
          className="w-full border-[1.21px] h-[39px] rounded-full border-white items-center flex justify-between"
          type="submit"
        >
          <div className=""></div>
          <p className="text-[13px]">Submit</p>
          <div className="">
            <p className="text-[13px] font-[600] mr-[10px]">→</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Page;
