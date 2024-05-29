"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    index: number;
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    return (
        <div className='m-2 flex flex-row justify-around'>
            <h2 className='text-3xl font-bold text-themecolor'>{props.index}: {props.title}</h2>
            <motion.div
                className='h-[1px] w-[550px] bg-themecolor self-center'
                initial={{ width: 0 }}
                whileInView={{ width: 550, transition: { duration: 1 }}}
                viewport={{ once: true }}
            />
        </div>
    );
};

export default SectionTitle;