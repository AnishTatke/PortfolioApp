"use client"
import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { Image } from "@nextui-org/react";
import { MemojiCarousel, MemojiDisplay } from '@/app/components/ImageDisplay';
import { waveMemoji, angelMemoji, hifiMemoji, handMemoji, callMemoji, laptopMemoji } from '../../public/memoji/memoji';
import { motion, AnimatePresence } from 'framer-motion';
import { headingVariants } from '@/app/variants';



const MyIntro: React.FC = () => {
    const [isHighLight, setIsHighLight] = useState(false);
    const memojis = [waveMemoji, angelMemoji, hifiMemoji, handMemoji, callMemoji, laptopMemoji];
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

            {/* <MemojiDisplay
                setIsHighlight={setIsHighLight}
                memoji={laptopMemoji}
            /> */}
            <MemojiCarousel
                memojis={memojis}
                setIsHighlight={setIsHighLight}
            />
        </div>
    );
}

export default MyIntro;