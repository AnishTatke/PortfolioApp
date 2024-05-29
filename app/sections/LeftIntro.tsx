"use client"
import React, { useState } from 'react';
import NextImage from  'next/image';
import { Image } from "@nextui-org/react";
import Pic from '../../public/Pic.jpg'
import NavLinks from '../components/NavLinks';
import { motion } from 'framer-motion';
import { headingVariants } from '@/app/variants';


const LeftIntro: React.FC<{ data: any, contactData:any }> = ({ data, contactData }) => {
    const [isHighLight, setIsHighLight] = useState(false);
    return (
        <div className='flex flex-col h-screen p-2 pl-3 items-center justify-evenly'>
            <div className='w-full text-center'>
                <motion.h1
                    className='text-7xl font-bold text-white'
                    variants={headingVariants}
                    animate={isHighLight ? 'highlighted' : 'initial'}
                >
                    Anish Tatke
                </motion.h1>
                <h3 className='text-3xl font-bold text-white'>Computer Science Engineer</h3>
            </div>
            <motion.div 
                className='m-5 p-5 right-4 border-[1px] border-themecolor/[0.5] rounded-full'
                onHoverStart={() => setIsHighLight(true)}
                onHoverEnd={() => setIsHighLight(false)}
                whileHover={{
                    scale: 1.1,
                    transition: { delay: 0.1 }
                }}
            >
                <Image
                    as={NextImage}
                    layout='responsive'
                    width={200}
                    height={180}
                    src={Pic.src}
                    alt="My Photo"
                    className='rounded-full w-60 h-60'
                />
            </motion.div>
            <div className='w-full flex flex-row justify-evenly'>
                <div className='p-1 px-2 flex flex-col w-1/4 h-max'>
                    {contactData.resumes.map((resume: any, index: number) => (
                        <motion.a
                            className='m-1 my-3 p-2 text-white text-center text-xl bg-themeopacque rounded-md border-[1px] border-themeopacque text-nowrap'
                            initial={{
                                scale: 1,
                                color: '#ffffff'
                            }}
                            whileHover={{
                                scale: 1.1,
                                color: '#fb923c'
                            }}
                            key={index} href={resume.url}
                        >
                            {resume.name}
                        </motion.a>
                    ))}
                </div>
                <NavLinks links={data} />
            </div>
        </div>
    );
};

export default LeftIntro;