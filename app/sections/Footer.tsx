"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC<{contactData: any}> = ({ contactData }) => {
    return (
        <div className='mx-7 mb-3 p-1 pr-10 w-full h-max flex flex-row justify-stretch border-t-[1px] border-themecolor'>
            <div className='w-1/2 h-[initial]'>
                <ul className='h-full flex flex-col justify-evenly'>
                    <li className='m-1 text-md tracking-wider'>Email: {contactData.email}</li>
                    <li className='m-1 text-md tracking-wider'>University Email: {contactData.universityEmail}</li>
                    <li className='m-1 text-md tracking-wider'>Location: {contactData.location}</li>
                </ul>
            </div>
            <div className='w-1/2 h-[initial] flex self-center justify-center'>
                <div className='w-max flex flex-col justify-evenly'>
                    {contactData.socials.map((social: any, index: number) => (
                        <motion.a
                            className='my-2 mr-10 text-3xl'
                            initial={{
                                scale: 1,
                                color: '#ffffff'
                            }}
                            whileHover={{
                                originX: 0,
                                scale: 1.2,
                                color: '#fb923c'
                            }}
                            key={index} href={social.url}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;