"use client"
import React, { useState } from 'react';
import NextImage from  'next/image';
import { Image } from "@nextui-org/react";
import Pic from '../../public/Pic.jpg'
import { motion } from 'framer-motion';
import { headingVariants } from '@/app/variants';



const MyIntro: React.FC = () => {
    const [isHighLight, setIsHighLight] = useState(false);
    

    // const handleClick = (event: any) => {
    //     if (event.shiftKey && isAuthenticated) {
    //         openModal();
    //         return;
    //     }
    //     if (!event.shiftKey) {
    //         event.preventDefault(); // Stop normal click from triggering
    //         return;
    //     }
    // }

    return (
        <div className='w-full flex flex-col p-2 lg:pl-3 items-center'>
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
                    width={250}
                    height={200}
                    src={Pic.src}
                    alt="My Photo"
                    className='relative rounded-full w-60 h-60'
                />
            </motion.div>
        </div>
    );
}

export default MyIntro;