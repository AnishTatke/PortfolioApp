'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants } from '@/app/variants';
import { NavLinksProps } from '@/lib/interfaces';



const NavLinks: React.FC< NavLinksProps > = ({ links }) => {
    const [activeNavElement, setActiveNavElement] = useState(0);
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
                        <a key={index} href={link.hash} className="text-lg">
                            {link.name}
                        </a>
                    </motion.div>
                ))}
            </nav>
        </div>
    );
};

export default NavLinks;