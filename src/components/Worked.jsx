import React, { useEffect, useState } from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { skillData, skillTitle } from './Data/allData'


const Worked = () => {
    const [activeSkill , setActiveSkill] = useState(1);
    const [currSkill, setCurrSkill] = useState([]);
    
    const fetchSkill = skillData.find(skillId => {
        return skillId.id === activeSkill;
    })

    const GetId = (e) => {
        const getSkillId = +e.target.id;
        setActiveSkill(getSkillId);
    }
    useEffect(() => {
        setCurrSkill([fetchSkill]);
        console.log(currSkill);
    },[activeSkill])

  return (
    <div className='py-32'>
        <div className='pb-12'>
            <h2 className="title text-3xl text-gray-100 capitalize font-bold">
                <span className='text-2xl text-accentClr font-semibold mr-2 font-mono'>02.</span>
                My Skills
            </h2>
        </div>
        <div>
            <div className='flex items-center justify-between gap-4 mb-8'>
                {
                    skillTitle.map(skill => {
                        const {id , title} = skill;
                        return (
                            <div key={id} className="link">
                                <button type='button' onClick={(e) => GetId(e)} className='capitalize text-textShadeOne font-semibold py-2 px-4' id={id}>{title}</button>
                            </div>
                        )
                    })
                }
            </div>
            {
                currSkill.map(skill => {
                    const {id, author} = skill;
                    return (
                        <div key={id}>
                            <div>
                                <h2 className='text-xl font-bold mb-6 text-textShadeOne capitalize'>
                                    Engineer <a href="#" className='link text-accentClr'>@{author}</a>
                                </h2>
                                <h2 className='text-base font-semibold mb-6 text-grayTextDark capitalize'>
                                    may 2021 - present
                                </h2>
                            </div>
                            <div className='flex items-center gap-28'>
                                <div>
                                    <div className="flex gap-4 items-center mb-4">
                                        <div className='text-base text-accentClr'>
                                            <MdPlayArrow />
                                        </div>
                                        <h2 className="text-xl text-grayTextDark">JavaScript(ES6+)</h2>
                                    </div>
                                    <div className="flex gap-4 items-center mb-4">
                                        <div className='text-base text-accentClr'>
                                            <MdPlayArrow />
                                        </div>
                                        <h2 className="text-xl text-grayTextDark">React Js</h2>
                                    </div>
                                    <div className="flex gap-4 items-center mb-4">
                                        <div className='text-base text-accentClr'>
                                            <MdPlayArrow />
                                        </div>
                                        <h2 className="text-xl text-grayTextDark">Node.Js</h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Worked