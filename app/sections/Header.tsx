"use client";
import React, { forwardRef } from 'react';
import Image, { ImageProps } from 'next/image';
import Logo from '@/app/assets/logo_with_hex.png';
import { motion } from 'framer-motion';


export const Header: React.FC = () => {
    return (
        <>
            <div className='hidden lg:block z-30 h-[200px] sticky w-screen top-0 left-0 bg-gradient-to-b from-bboard from-30% via-bboard/50 via-70%'>
                <MotionComponent
                    src={Logo}
                    alt='Logo'
                    width={100}
                    height={100}
                    className='p-1 mx-3 ml-14 xl:ml-16 2xl:ml-24'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            </div>
            <div className='block lg:hidden z-30 h-[150px] sticky top-0 w-full bg-gradient-to-b from-bboard from-30% via-bboard/50 via-70%'>
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
        </>
    );
};

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image  {...props} ref={ref} />;
    }
  );
  
export const MotionComponent = motion(ExoticImage);