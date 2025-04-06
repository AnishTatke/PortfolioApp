"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { dividerVariants } from '../variants';

export const VerticalDivider: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
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

export const LoadingDots: React.FC = () => {
    const dotVariant = {
        pulse: {
          scale: [1, 1.5, 1],
          transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
    }

    return (
        <motion.div
            animate="pulse"
            transition={{ staggerChildren: 0.2 }}
            className="ml-2 flex items-center justify-center self-center gap-3"
        >
            <motion.div
                className="w-2 h-2 rounded-full bg-themecolor/75"
                variants={dotVariant}
            />
            <motion.div
                className="w-2 h-2 rounded-full bg-themecolor/75"
                variants={dotVariant}
            />
            <motion.div
                className="w-2 h-2 rounded-full bg-themecolor/75"
                variants={dotVariant}
            />
        </motion.div>
    );
}