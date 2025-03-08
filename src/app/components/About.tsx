import React from 'react'
import { InfiniteMovingCardsDemo } from './Card'
import Image from 'next/image'
import img2 from '../../ASSETS/img2.png'

function About() {
  return (
    <div id='about' className='flex justify-center mt-[5rem] lg:mt-0'>
        <div className='flex justify-center lg:gap-[8rem]  lg:w-[90%] items-center flex-wrap h-auto w-auto shadow-none gap-[6rem]'>
            <div>
                <Image src={img2} alt="image" width={600} />
            </div>
            <div className='lg:w-[500px] px-3 w-[318px] md:w-[500px] md:mt-[6rem]'>
                <h1 className='font-bold text-2xl text-blue-300 pt-4 text-center lg:text-left'>About Me</h1><br />
                <p className=' font-semibold text-center lg:text-left text-white'>I am a self-taught front-end developer skilled in creating dynamic, accessible websites that work seamlessly across devices. My expertise includes React.js, JavaScript, HTML5, CSS, Tailwind CSS, and Next.js, enabling me to build scalable, high-quality web applications. I excel in crafting interactive UIs, writing clean JavaScript code, designing responsive layouts, and leveraging Next.js for optimized performance. Proficient in Git version control, I consistently deliver innovative solutions that exceed client expectations.</p>
                <br />
                <InfiniteMovingCardsDemo/>
            </div>
        </div>
    </div>
  )
}

export default About