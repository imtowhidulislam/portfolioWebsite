import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa'
import {AiOutlineStar} from "react-icons/ai";
import {FiGitBranch} from "react-icons/fi";

const SocialLInksFooter = () => {
  return (
    <div className='flex items-center gap-8 justify-center md:hidden'>
        <div className='text-3xl text-grayTextLight cursor-pointer hover:text-accentClr transition-all translate-y-0 hover:-translate-y-2 duration-200 ease-out  '>
            <FaGithub />
        </div>
        <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-all translate-y-0 hover:-translate-y-2 duration-200 ease-out'>
            <FaInstagram />
        </div>
        <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-all translate-y-0 hover:-translate-y-2 duration-200 ease-out'>
            <FaFacebook />
        </div>
        <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-all translate-y-0 hover:-translate-y-2 duration-200 ease-out'>
            <FaTwitter />
        </div>
        <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-all translate-y-0 hover:-translate-y-2 duration-200 ease-out'>
            <FaLinkedin />
        </div>
    </div>
  )
}

export default SocialLInksFooter