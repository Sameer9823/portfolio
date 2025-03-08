import React from 'react'
import { ProjectShowcase } from './ui/card'


function Project() {
  return (
    <div>
        <div id='project' className='lg:w-auto '>
            <h1 className='text-center text-gray-100 mt-[5rem] text-2xl font-bold'>Projects</h1>
            <ProjectShowcase/>
        </div>
    </div>
  )
}

export default Project