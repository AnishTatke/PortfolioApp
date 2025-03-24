"use client";
import React from 'react';
import { Chip } from '@nextui-org/chip'
import { motion } from 'framer-motion';
import { skillIconMap } from '@/lib/data';

export const MyChip: React.FC<{ skill: string, index: number}> = ({skill, index}) => {
    return (
        <Chip 
            key={index} 
            variant='faded' 
            className='m-[1px] font-sans text-sm bg-themecolor hover:bg-themetransparent text-bboard hover:text-themecolor h-[20px]'
        >
            {skill}
        </Chip>
    );
};

export const SkillChip: React.FC<{ skill: string, skilltype: string, index: number, fontSize: string }> = ({skill, skilltype, index, fontSize}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <motion.button 
            key={index}
            className='p-1 m-1 flex flex-row items-center justify-center bg-themeopacque rounded-md'
            whileHover={{ scale: 1.1 }}
            onHoverStart={handleOpen}
            onHoverEnd={handleClose}
            onPanStart={handleOpen}
            onPanEnd={handleClose}
        >
            {skillIconMap[skill.toLowerCase()] ? 
                <span className='text-themecolor' style={{
                    fontSize: fontSize
                }}>
                    {skillIconMap[skill.toLowerCase()]}
                </span> : 
                <span className='text-themecolor' style={{
                    fontSize: fontSize
                }}>
                    {skillIconMap[skilltype.toLowerCase()]}
                </span>
            }
            {isOpen ? <p className='ml-2 text-sm'>{skill}</p> : <></>}
        </motion.button>
    );
}