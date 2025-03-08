import React from "react";
import { FlipWords } from "./ui/flip-words";
import img from "../../ASSETS/img1.png";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function FlipWordsDemo() {
  const words = [
    "Javascript-Developer",
    "Frontend-Developer",
    "Reactjs-Developer",
  ];

  return (
    <div
      id="home"
      className="h-[40rem] flex justify-center items-center flex-wrap lg:gap-[10rem] pt-[7rem] lg:w-full mx-[2rem] lg:mx-0 gap-[4rem]"
    >
      <div className="text-4xl font-normal text-neutral-100 dark:text-neutral-400 lg:w-[400px] ">
        Hello 👋 <br />
        I am Sameer Selokar
        <br />
        <FlipWords words={words} className="p-[-1rem] text-gray-50" />
        <br />
        <br />
        <div className="flex gap-8 lg:gap-0">
          <Link href="https://github.com/Sameer9823" target="_blank">
            <button className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white  hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24">
            <Github className="text-white"/>
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sameer-selokar-60435224b/"
            target="_blank"
          >
            <button className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24">
              
            <Linkedin className="text-white"/>
            </button>
          </Link>
          <Link href="" target="_blank">
            <button className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24">
              
            <Twitter  className="text-white"/>
            </button>
          </Link>
          <Link href="" target="_blank">
            <button className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24">
             <Instagram className="text-white"/>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={img} alt="Developer-Image" className="w-[500px]" />
      </div>
    </div>
  );
}
