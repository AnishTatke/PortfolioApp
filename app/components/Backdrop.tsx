'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Backdrop: React.FC = () => {
    return (
        <div className='fixed -z-10 w-screen h-screen bg-bboard'>
            <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-[-12px] left-5 w-[1px] h-[500px] bg-themecolor'
            ></motion.div>
            <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='fixed top-[-40px] left-8 w-[1px] h-[500px] bg-themecolor'
            ></motion.div>
        </div>
    );
};

export default Backdrop;