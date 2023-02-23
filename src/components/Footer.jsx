import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa'
import {AiOutlineStar} from "react-icons/ai";
import {FiGitBranch} from "react-icons/fi";

const Footer = () => {
  return (
    <div className='pt-20 pb-6'>
        <div className='flex items-center gap-8 justify-center '>
            <div className='text-3xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                <FaGithub />
            </div>
            <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                <FaInstagram />
            </div>
            <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                <FaFacebook />
            </div>
            <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                <FaTwitter />
            </div>
            <div className='text-2xl text-grayTextLight cursor-pointer hover:text-accentClr transition-colors duration-200 ease-out'>
                <FaLinkedin />
            </div>
        </div>
        <div className='mt-12'>
            <p className='text-xl font-semibold text-grayTextLight capitalize text-center'>designed & built my towhidul islam</p>
            <div className='flex items-center gap-4 justify-center mt-3'>
                <li className='flex items-center gap-2 text-grayTextLight'>
                    <span>
                        <AiOutlineStar />
                    </span>
                    334
                </li>
                <li className='flex items-center gap-2 text-grayTextLight'>
                    <span>
                        <FiGitBranch />
                    </span>
                    235
                </li>
            </div>
        </div>
    </div>
  )
}

export default Footer