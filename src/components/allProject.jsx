import React from 'react'
import { FiFolder } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const AllProject = () => {
  return (
    <div className='py-20'>
        <div className='w-full text-center mb-12'>
            <h2 className='text-2xl mb-4 font-bold text-textShadeOne  capitalize'>other noteworthy projects</h2>
            <p className='text-base font-mono text-accentClr capitalize'>view the archive</p>
        </div>
        <div className='bg-cardBg p-8 rounded-md'>
            <div className='flex gap-8 items-center mb-8 justify-between'>
                <div className='text-6xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                    <FiFolder />
                </div>
                <div className='text-xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                    <FaExternalLinkAlt />
                </div>
            </div>
            <h2 className='text-3xl font-semibold mb-6 text-gray-100 capitalize hover:text-accentClr transition-colors duration-200 ease-in-out cursor-pointer'>building a headless mobile app CMS From scaratch</h2>
            <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Fast-forward to today,At an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</article>
            <div className='flex gap-3 text-xl font-semibold text-grayTextLight'>
                <li>Vs code</li>
                <li>sublime text</li>
                <li>atom</li>
                <li>iTern2</li>
                <li>hyper</li>
            </div>
            
        </div>
        <div className='grid place-items-center mt-20'>
            <button type='button' className='capitalize text-xl cursor-pointer py-4 px-12 rounded-md transition-colors duration-300 ease-in text-accentClr border-2 border-accentClr bg-transparent hover:bg-[#1ec4da80]' >show more</button>
        </div>
    </div>
  )
}

export default AllProject