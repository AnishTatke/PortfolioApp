"use client";
import React, { forwardRef } from 'react';
import Image, { ImageProps } from 'next/image';
import Logo from '@/app/assets/logo_with_hex.png';
import { motion } from 'framer-motion';


const Header: React.FC = () => {
    return (
        <>
          
            <div className='hidden lg:block z-50 h-[200px] sticky w-screen top-0 left-0 bg-gradient-to-b from-bboard from-30% via-bboard/50 via-70%'>
                <div className='fixed top-0 left-0 w-full'>
                    <MotionComponent
                        src={Logo}
                        alt='Logo'
                        width={100}
                        height={100}
                        className='p-1 mx-auto'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                </div>
            </div>
            <div className='block lg:hidden z-50 h-[150px] sticky top-0 w-full bg-gradient-to-b from-bboard from-30% via-bboard/50 via-70%'>
                <div className='fixed top-0 left-0 w-full'>
                    <MotionComponent
                        src={Logo}
                        alt='Logo'
                        width={100}
                        height={100}
                        className='p-1 mx-auto'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                </div>
            </div>
        </>
    );
};

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
        return <Image  {...props} ref={ref} />;
    }
);

const MotionComponent = motion(ExoticImage)

export default Header;