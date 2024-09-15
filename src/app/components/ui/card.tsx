"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import image from '../../../ASSETS/lms.png';
import img from '../../../ASSETS/music.png';
import img1 from '../../../ASSETS/github.png'
import ing3 from '../../../ASSETS/blog.jpeg'
import {Button} from "@nextui-org/react";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="lg:flex-none flex-1 justify-center items-center">

    <div className="flex lg:gap-5 justify-center flex-wrap items-center gap-1 lg:w-auto ">
        <div>

    <CardContainer className="inter-var w-auto">
      <CardBody className="bg-gradient-to-r from-pink-500 to-yellow-500 border-[1px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
      <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Learning Management System
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl flex gap-4 mt-3 font-bold text-neutral-600 dark:text-white flex-wrap"
        >
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        React.js
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        MongoDB
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        Express.js
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        Node.js
      </Button>  

        </CardItem>
        <div className="flex justify-center items-center mt-10">
         
          <div className="text-center">

              <Link href="https://github.com/Sameer9823/Learning-Management-System">
              
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Project
          </CardItem>
              </Link>
          </div>
        </div>
      </CardBody>
    </CardContainer>
        </div>

        <div>
        <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-pink-500 to-yellow-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Blog Application
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={ing3}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl flex gap-4 mt-3 font-bold text-neutral-600 dark:text-white flex-wrap"
        >
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        ReactJS
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
          Tailwindcss
      </Button>  
         
          <Button color="primary" variant="bordered" className="text-black border-[black]">
          Appwrite
      </Button>  
         
          

        </CardItem>
        <div className="flex justify-center items-center mt-10">
         
         <div className="text-center">

             <Link href="https://everydayvibes.netlify.app/">
             
         <CardItem
           translateZ={20}
           as="button"
           className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
         >
           View Project
         </CardItem>
             </Link>
         </div>
       </div>
      </CardBody>
    </CardContainer>
        </div>


    </div>
    <div className="flex justify-center lg:gap-5 flex-wrap mt-[-4rem] lg:w-auto ">
    <div>
<CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-pink-500 to-yellow-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Master the Art Of Music
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl flex gap-4 mt-3 font-bold text-neutral-600 dark:text-white"
        >
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        Next.js
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
          Aceternity.ui
      </Button>  
          

        </CardItem>
        <div className="flex justify-center items-center mt-10">
         
         <div className="text-center">

             <Link href="https://github.com/Sameer9823/Music-School-Application">
             
         <CardItem
           translateZ={20}
           as="button"
           className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
         >
           View Project
         </CardItem>
             </Link>
         </div>
       </div>
      </CardBody>
    </CardContainer>
</div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-pink-500 to-yellow-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          GitHub Image Viewer
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl flex gap-4 mt-3 font-bold text-neutral-600 dark:text-white"
        >
          <Button color="primary" variant="bordered" className="text-black border-[black]">
        React.js
      </Button>  
          <Button color="primary" variant="bordered" className="text-black border-[black]">
          Tailwindcss
      </Button>  
         
          

        </CardItem>
        <div className="flex justify-center items-center mt-10">
         
         <div className="text-center">

             <Link href="https://github-avatar.netlify.app/">
             
         <CardItem
           translateZ={20}
           as="button"
           className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
         >
           View Project
         </CardItem>
             </Link>
         </div>
       </div>
      </CardBody>
    </CardContainer>
   

    </div>
    </div>
  );
}
