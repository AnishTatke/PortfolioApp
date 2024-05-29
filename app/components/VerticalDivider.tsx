"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { dividerVariants } from '../variants';

const VerticalDivider: React.FC<{isExpanded: boolean}> = ({isExpanded}) => {
    return (
        <motion.div
            layout
            className='w-[1px] bg-themecolor h-auto rounded-xl'
            variants={dividerVariants}
            animate={isExpanded ? 'animate' : 'initial'}  
            exit='exit' 
        />
    );
};

export default VerticalDivider;