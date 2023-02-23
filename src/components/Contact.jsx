import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='py-20'>
            <div className='w-full text-center mb-12'>
                <p className='text-xl font-mono text-accentClr capitalize mb-6'><span>04</span> what's next?</p>
                <h2 className='text-5xl font-bold mb-4 font-bold text-textShadeOne  capitalize'>get in touch</h2>
            </div>
            <div className='text-center'>
                <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Fast-forward to today,At an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</article>
            </div>
            <div className='grid place-items-center mt-20'>
                <button type='button' className='capitalize text-xl cursor-pointer py-4 px-12 rounded-md transition-colors duration-300 ease-in text-accentClr border-2 border-accentClr bg-transparent hover:bg-[#1ec4da80]' >say hello</button>
            </div>
        </div>
    </div>
  )
}

export default Contact