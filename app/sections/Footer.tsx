"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { iconMap } from '@/lib/data';

const Footer: React.FC<{contactData: any}> = ({ contactData }) => {
    return (
        <div className='mb-3 px-3 p-1 flex flex-row justify-between sm:justify-stretch border-t-[1px] border-themecolor lg:mx-7 lg:p-1 lg:pr-10'>
            <div className='w-fit sm:w-1/3 h-[initial]'>
                <ul className='h-full flex flex-col justify-evenly'>
                    <motion.a
                        className='m-1 text-sm md:text-md tracking-wider'
                        href={"mailto:"+contactData.email}
                        initial={{color: '#ffffff'}}
                        whileHover={{color: '#fb923c'}}
                        whileTap={{ scale: 1.02,originX: 0, color: '#fb923c' }}
                    >{contactData.email}</motion.a>
                    <motion.a
                        className='m-1 text-sm md:text-md tracking-wider'
                        href={"mailto:"+contactData.email}
                        initial={{color: '#ffffff'}}
                        whileHover={{color: '#fb923c'}}
                        whileTap={{ scale: 1.02, originX: 0, color: '#fb923c' }}
                    >{contactData.universityEmail}</motion.a>
                    <motion.span
                        className='m-1 text-sm md:text-md tracking-wider'
                        initial={{color: '#ffffff'}}
                        whileHover={{color: '#fb923c'}}
                        whileTap={{ scale: 1.02,originX: 0, color: '#fb923c' }}
                    >{contactData.location}</motion.span>
                </ul>
            </div>
            <div className='w-fit sm:w-1/3 h-[initial] justify-items-center self-center'>
                <div className='w-max flex flex-col justify-evenly'>
                    {contactData.resumes.map((resume: any, index: number) => (
                        <motion.a
                            className='w-fit p-1 my-2 mx-auto text-sm md:text-xl bg-themecolor text-bboard font-semibold rounded-md'
                            whileHover={{ 
                                color: '#fb923c',
                                backgroundColor: "#ac896830"
                            }}
                            whileTap={{
                                color: '#fb923c',
                                backgroundColor: "#ac896830",
                                scale: 1.05
                            }}
                            key={index}
                            href={resume.url}
                        >
                            {resume.name}
                        </motion.a>
                    ))}
                </div>
            </div>
            <div className='w-fit sm:w-1/3 h-[initial] flex self-center justify-end'>
                <div className='w-max flex flex-col justify-evenly'>
                    {contactData.socials.map((social: any, index: number) => (
                        <motion.a
                            className='my-2 sm:mr-5 text-3xl'
                            initial={{
                                color: '#ffffff'
                            }}
                            whileHover={{
                                color: '#fb923c'
                            }}
                            whileTap={{
                                originX: 0,
                                scale: 1.02,
                                color: '#fb923c'
                            }}
                            key={index} href={social.url}
                        >
                            {iconMap[social.name.toLowerCase()]}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;