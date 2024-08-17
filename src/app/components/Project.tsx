import React from 'react'
import { ThreeDCardDemo } from './ui/card'

function Project() {
  return (
    <div>
        <div id='project' className='lg:w-auto '>
            <h1 className='text-center text-gray-800 mt-[5rem] text-2xl font-bold'>Projects</h1>
            <ThreeDCardDemo/>
        </div>
    </div>
  )
}

export default Project