import React, { useState } from 'react'
import {GrTechnology} from "react-icons/gr";
import {SiWeblate} from "react-icons/si"
// import {HiOutlineBars3BottomRight,HiOutlineBars3CenterLeft} from "react-icons/hi";
import {RxCross2} from "react-icons/rx";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    const [mobileLayout, setMobileLayout] = useState(false);
    const [mobNav , setMobNav] = useState(false);

    const changeIcon = () => {
        setMobileLayout(!mobileLayout);
    }
    const closeNavbar = () => {
        setMobileLayout(false);    
        console.log(mobileLayout);
        console.log('mobile nav');
    }


  return (
    <div className='flex items-center justify-between py-4'>
        <div className='text-5xl font-bold text-textShadeTwo '>
            <SiWeblate className='text-textShadeTwo cursor-pointer'/>
        </div>
        <div>
            <button type='button' onClick={changeIcon} className="text-textShadeOne text-xl cursor-pointer">
                {mobileLayout ? <RxCross2/> : <FaBars />}
            </button>
        </div>
        <div className={mobileLayout ? 'mob-nav text-3xl bars text-textShadeTwo h-full z-50 backdrop-blur-lg fixed top-0 right-0 bg-[#151c277e] py-2 inset-28' : 'mob-nav-close text-3xl bars text-textShadeTwo h-full z-50 backdrop-blur-lg fixed top-0 right-0 bg-[#151c277e] py-8 inset-28 hidden'}>
            <button type='button' onClick={closeNavbar}>
                <RxCross2 className='cross absolute right-7' />
            </button>
            <div className='flex items-center justify-center h-screen flex-col'>
                <div>
                    <h2 className='text-xl text-center text-accentClr mb-2'>01.</h2>
                    <h2 className='text-2xl capitalize text-textShadeOne mb-8 cursor-pointer'>About</h2>
                </div>
                <div>
                    <h2 className='text-xl text-center text-accentClr mb-2'>02.</h2>
                    <h2 className='text-2xl capitalize text-textShadeOne mb-8 cursor-pointer'>Experience</h2>
                </div>
                <div>
                    <h2 className='text-xl text-center text-accentClr mb-2'>03.</h2>
                    <h2 className='text-2xl capitalize text-textShadeOne mb-8 cursor-pointer'>Work</h2>
                </div>
                <div>
                    <h2 className='text-xl text-center text-accentClr mb-2'>04.</h2>
                    <h2 className='text-2xl capitalize text-textShadeOne mb-8 cursor-pointer'>Contact</h2>
                </div>
                <div className='grid place-items-center mt-20'>
                    <button type='button' className='capitalize text-xl cursor-pointer py-4 px-12 rounded-md transition-colors duration-300 ease-in text-accentClr border-2 border-accentClr bg-transparent hover:bg-[#1ec4da80]' >Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar