import React from 'react'

const Header = () => {
  return (
    <div className='py-8 font-sarif'>
        <p className='text-xl mb-6 font-mono capitalize font-bold text-accentClr'>hi, my name is</p>
        <h1 className='text-5xl md:text-7xl capitalize font-bold text-gray-100'>towhidul islam.</h1>
        <h1 className='text-5xl md:text-7xl font-bold text-grayTextDark capitalize mt-2'>i build things for the web.</h1>
        <article className='text-base font-semibold mt-10 text-grayTextDark capitalize md:max-w-lg'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at  <a href="#" className='link font-bold text-accentClr'>Upstatement.</a></article>
        <div className='btnContainer mt-16'>
            <button className='capitalize py-4 font-semibold px-10 text-accentClr cursor-pointer border-2 border-accentClr bg-transparent hover:bg-[#89fefe46] rounded-md transition-colors duration-200 ease-out'>check out my course!</button>
        </div>
    </div>
  )
}

export default Header