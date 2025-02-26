"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    index: number;
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    return (
        <>
            {/* Full Screen */}
            <div className='hidden lg:flex m-2 flex-row justify-around'>
                <h2 className='text-3xl font-bold text-themecolor'>{props.index}: {props.title}</h2>
                <motion.div
                    className='h-[1px] w-2/3 bg-themecolor self-center'
                    initial={{ width: 0 }}
                    whileInView={{ width: "67%", transition: { duration: 1 }}}
                    viewport={{ once: true }}
                />
            </div>

            {/* Mobile Screen */}
            <div className='flex lg:hidden flex-row text-center justify-center'>
                <motion.div
                    className='h-[1px] w-1/3 mr-2 bg-themecolor self-center'
                    initial={{ width: 0 }}
                    whileInView={{ width: "33%", transition: { duration: 1 }}}
                    viewport={{ once: true }}
                
                />
                <motion.h2 
                    className='text-4xl font-bold text-themecolor'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 }}}
                    viewport={{ once: true }}
                >{props.title}</motion.h2>
                <motion.div
                    className='h-[1px] w-1/3 ml-2 bg-themecolor self-center'
                    initial={{ width: 0 }}
                    whileInView={{ width: "33%", transition: { duration: 1 }}}
                    viewport={{ once: true }}
                />
            </div>
        </>
    );
};

export default SectionTitle;