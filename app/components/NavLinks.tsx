'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants } from '@/app/variants';
import { NavLinksProps } from '@/lib/interfaces';
import { useAuthStore } from "@/store/authStore";


const NavLinks: React.FC< NavLinksProps > = ({ links }) => {
    const [activeNavElement, setActiveNavElement] = useState(0);
    const { openModal, isAuthenticated, logout } = useAuthStore();

    return (
        <div>
            <nav className='flex flex-col'>
                {links.map((link, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-row content-center my-1'
                        onClick={() => setActiveNavElement(index)}
                        variants={navLinkVariants}
                        animate={activeNavElement === index ? 'open' : 'close'}
                        whileHover='hover'
                        whileTap='tapStart'
                    >
                        <div className='relative bg-themecolor flex h-[1px] w-5  self-center items-center right-4'>
                            <div className='relative h-2 w-2 left-[19px] -top-1/2 border-2 border-themecolor rounded-full'></div>
                        </div>
                        <a key={index} href={link.hash} className="text-lg transition-all duration-300">
                            {link.name}
                        </a>
                    </motion.div>
                ))}

                {!isAuthenticated ? <motion.div
                    className='flex flex-row content-center my-1'
                    onClick={openModal}
                    variants={navLinkVariants}
                    animate={activeNavElement === links.length ? 'open' : 'close'}
                    whileHover='hover'
                    whileTap='tapStart'
                >
                    <div className='relative bg-themecolor flex h-[1px] w-5  self-center items-center right-4'>
                        <div className='relative h-2 w-2 left-[19px] -top-1/2 border-2 border-themecolor rounded-full'></div>
                    </div>
                    <button className="text-lg transition-all duration-300">
                        Admin
                    </button>
                </motion.div> : <></>}
            </nav>
        </div>
    );
};

export default NavLinks;