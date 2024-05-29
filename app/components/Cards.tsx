"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, faultVariant } from '../variants';
import { EducationCardItem, ExperienceCardItem, ProjectCardItem } from '@/lib/interfaces';
import MyChip from './MyChip';
import { RxExit } from "react-icons/rx";
import NextImage from  'next/image';
import { Image } from "@nextui-org/react";
import VerticalDivider from '@/app/components/VerticalDivider';

const DateRange: React.FC<{ date: string, isExpanded: boolean }> = ({ date, isExpanded }) => {
    const [startDate, endDate] = date.split('-').map(date => date.trim());
    return (
        <div className='flex flex-row justify-start w-full'>
            <h2>{startDate}</h2>
            <motion.div 
                initial={{width: 15}}
                animate={{width: isExpanded ? 50 : 15, transition: {duration: 0.8}}}
                className='h-[1px] bg-themecolor self-center mx-2' 
            />
            {endDate == "Present" ? <h2><em>{endDate}</em></h2> : <h2>{endDate}</h2>}
        </div>
    );
}

export const Card: React.FC<{ children: React.ReactNode, isExpanded: boolean, onClick:() => void }> = ({ children, isExpanded, onClick }) => {
    return (
        <motion.div
            whileHover='hover'
            onClick={onClick}
            animate={isExpanded && 'animate'}
            variants={cardVariants}
            className='m-3 w-full h-auto rounded-lg p-4'
        >
            {children}
        </motion.div>
    );
};

export const ExperienceCard: React.FC<{ experience: ExperienceCardItem }> = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            <motion.div
                className='flex flex-row h-max'
            >
                <div className='w-1/3 flex flex-col justify-between'>
                    <DateRange date={experience.date} isExpanded={isExpanded}/>
                    {isExpanded && experience.profiles.length > 0 && 
                            <motion.div
                                variants={faultVariant}
                                initial='initial'
                                animate='animate'
                            >
                                <h2>Previous Profiles: </h2>
                                <ul className='ml-3'>
                                    {experience.profiles.map((profile, index) => (
                                        <li key={index} className='mx-1 text-themecolor'>{profile}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        }
                    {isExpanded && experience.skills.length > 0 ?
                        <motion.div 
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            className='flex flex-col justify-start'
                        >
                            <h2>Skills</h2>
                            <div className='mr-2 flex flex-row justify-start flex-wrap'>
                                {experience.skills.map((skill, index) => (
                                    <MyChip skill={skill} index={index} key={index}/>
                                ))}
                            </div>
                        </motion.div> : 
                        <motion.div 
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            className='flex flex-col justify-start'
                        >
                            <div className='mr-2 flex flex-row justify-start flex-wrap'>
                                {experience.skills.slice(0,2).map((skill, index) => (
                                    <MyChip skill={skill} index={index} key={index}/>
                                ))}
                                <span className='text-lg'>...</span>
                            </div>
                        </motion.div>
                    }
                </div>
                <VerticalDivider isExpanded={isExpanded}/>
                <div className='w-2/3 flex flex-col ml-3'>
                    <div className='flex flex-col h-auto'>
                        <div className='w-full flex flex-row justify-between'>
                            <h1 className='text-lg font-semibold tracking-wider text-themecolor'>{experience.title}</h1>
                            {isExpanded && <RxExit className='text-themecolor text-xl' onClick={() => {window.open(experience.url)}}/>}
                        </div>
                        <div className='w-full flex flex-row justify-between'>
                            <h1>{experience.company}</h1>
                            {isExpanded && <h1>{experience.location}</h1>}
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col justify-evenly'>
                        <motion.p
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            {experience.description}
                        </motion.p>
                        {isExpanded && experience.content.length > 0 &&
                            <motion.ul
                                variants={faultVariant}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                className='mt-1 ml-2 px-2 list-disc'
                            >
                                {experience.content.map((content, index) => (
                                    <li className='my-1 text-sm text-wrap' key={index}>{content}</li>
                                ))}
                            </motion.ul>
                        }
                    </div>
                </div>
            </motion.div>
        </Card>
    );
};

export const EducationCard: React.FC<{ education: EducationCardItem }> = ({ education }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            <div className='flex flex-row h-max'>
                <div className='w-2/5 flex flex-col justify-between'>
                    <DateRange date={education.date} isExpanded={isExpanded} />
                    {isExpanded && education.courses.length > 0 &&
                        <div className='flex flex-col justify-start'>
                            <h2 className='text-themecolor'>Courses</h2>
                            <p className='text-sm mr-1 text-wrap'>
                                {education.courses.map((course, index) => {
                                    if (index === education.courses.length - 1){
                                        return (<span className='hover:text-themecolor' key={index}>{course}</span>)
                                    } else {
                                        return (<span className='hover:text-themecolor' key={index}>{course}, </span>)
                                    }
                                })}
                            </p>
                        </div>
                    }
                </div>
                <VerticalDivider isExpanded={isExpanded}/>
                <div className='w-3/5 flex flex-col ml-3'>
                    <div className='w-full flex flex-row justify-between'>
                        <h1 className='text-lg font-semibold tracking-wider text-themecolor'>{education.title} : {education.majors}</h1>
                        {isExpanded && <RxExit className='text-themecolor text-xl' onClick={() => {window.open(education.url)}}/>}
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <h1>{education.school}</h1>
                        {isExpanded && <h1>{education.location}</h1>}
                    </div>
                    <div className='mt-5'>
                        {isExpanded ? 
                            <p>{education.description}</p> :
                            <p className='line-clamp-2'>{education.description}</p>
                        }
                    </div>
                </div>
            </div>
        </Card>
    )
};

export const ProjectCard: React.FC<{ project: ProjectCardItem }> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            <div className='flex flex-row h-max'>
                <div className='w-2/5 flex flex-col justify-between'>
                    <div className='p-1 mx-2 h-auto border-[1px] border-themecolor/[0.5]'>
                        <Image
                            removeWrapper
                            as={NextImage}
                            width={265}
                            height={200}
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                    {isExpanded && project.links.length > 0 && 
                        <motion.div
                            className='m-2 p-2 flex flex-row justify-start flex-wrap'
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : -100,
                                transition: {duration: 0.5}
                            }}
                        >
                            {project.links.map((link, index) => (
                                <motion.a 
                                    key={index} 
                                    href={link.url} 
                                    className='mr-4 text-3xl'
                                    initial={{
                                        scale: 1,
                                        color: '#ffffff'
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#fb923c'
                                    }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    }

                    {isExpanded && project.tags.length > 0 && 
                        <motion.div
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : -100,
                                transition: {duration: 0.5}
                            }}
                            className='m-2 p-2 flex flex-row justify-start flex-wrap bg-themeopacque rounded-lg'
                        >
                            <h2 className=' font-weight-600 mr-1'>Tags: </h2>
                            {project.tags.map((tag, index) => (
                                <MyChip skill={tag} index={index} key={index}/>
                            ))}
                        </motion.div>
                    }
                </div>
                <VerticalDivider isExpanded={isExpanded}/>
                {isExpanded ? 
                    <div className='ml-1 w-3/5 p-2 flex flex-col justify-evenly'>
                        <h2 className='font-semibold text-lg tracking-wider text-themecolor'>{project.title}</h2>
                        <p>{project.description}</p>
                        <motion.ul
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='ml-2 px-2 list-disc'
                        >
                            {project.content.map((content, index) => (
                                <li className='text-sm text-wrap' key={index}>{content}</li>
                            ))}
                        </motion.ul>
                    </div>
                :
                    <div className='ml-1 w-3/5 p-2 flex flex-col justify-evenly'>
                        <h2 className='font-semibold text-lg tracking-wider text-themecolor'>{project.title}</h2>
                        <p className=' text-wrap'>{project.description}</p>
                        <div className='mr-1 flex flex-row justify-start truncate'>
                            {project.tags.slice(0, 4).map((tag, index) => (
                                <MyChip skill={tag} index={index} key={index}/>
                            ))}
                            <span className='text-lg'>...</span>
                        </div>
                    </div>
                }
            </div>
        </Card>
    );
};