import React from 'react'
import { FiGithub } from 'react-icons/fi'
import {FaExternalLinkAlt} from "react-icons/fa"

const BuildComponent = () => {
  return (
    <div className='mb-20 p-4 build'>
        <div className='imgContainer'><img src="https://unsplash.it/1000/700?image=454" alt="demoImage" /></div>
        <div >
            <div className='bg-cardBg p-8 rounded-md duration-300 ease-out translate-y-0 hover:-translate-y-3 border-2 border-gray-600 hover:border-accentClr'>
                <p className='text-base font-semibold mb-2 text-accentClr font-serif capitalize'>Featured Project</p>
                <h2 className='text-3xl font-semibold mb-6 text-gray-100 capitalize'>Towhid</h2>
                <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Fast-forward to today,At an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</article>
                <div className='flex gap-3 text-xl font-semibold text-grayTextLight'>
                    <li>Vs code</li>
                    <li>sublime text</li>
                    <li>atom</li>
                    <li>iTern2</li>
                    <li>hyper</li>
                </div>
                <div className='flex gap-8 mt-8'>
                    <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                        <FiGithub />
                    </div>
                    <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                        <FaExternalLinkAlt />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuildComponent