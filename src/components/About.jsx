import React from 'react'
import {MdPlayArrow} from "react-icons/md"
import towhidImg from "../static/img.png";

const About = () => {
  return (
    <div className='py-32'>
        <div>
            <div className='pb-12'>
                <h2 className="title text-3xl text-gray-100 capitalize font-bold">
                    <span className='text-2xl text-accentClr font-semibold mr-2 font-mono'>01.</span>
                    About me
                </h2>
            </div>
            <div className='grid grid-cols-fluidLayoutAbout gap-16'>
                <div>
                    <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Hello! My name is <a href="#" className='link text-accentClr'>Towhidul Islam(Towhid)</a> and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</article>
                    <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</article>
                    <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</article>
                    <div>
                        <article className='text-base font-semibold mb-6 text-grayTextDark capitalize'>Here are a few technologies I’ve been working with recently:</article>
                        <div className='flex items-center gap-28'>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">JavaScript(ES6+)</h2>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">React Js</h2>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">Node.Js</h2>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">Html</h2>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">Css</h2>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className='text-base text-accentClr'>
                                        <MdPlayArrow />
                                    </div>
                                    <h2 className="text-xl text-grayTextDark">TailwindCss</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-12 md:pt-0 w-full flex items-center justify-center md:items-start '>
                    <div className='w-60 md:w-80 border-2 border-gray-300 rounded-md img_container'>
                        <img src={towhidImg} alt="towhid" className='object-cover w-full'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About