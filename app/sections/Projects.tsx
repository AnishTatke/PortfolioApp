"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ProjectCardItem } from '@/lib/interfaces';
import { ProjectCard } from '../components/Cards';

const Projects: React.FC<{ projects: ProjectCardItem[] }> = ({projects}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <SectionTitle index={3} title='Projects' />
            <div className='h-auto'>
                {isExpanded ? 
                    [...projects].map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    )) 
                    :
                    [...projects].slice(0, 3).map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))
                }
            </div>
            <div className=''>
                <motion.button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='mx-4 my-1 lg:mx-9 lg:my-5 text-themecolor font-semibold'
                    initial={{
                        scale: 1,
                        color: '#fb923c'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                        scale: 1.1,
                        color: '#ffffff'
                    }}
                >{isExpanded ? "... show less" : "... show more"}</motion.button>
            </div>
        </div>
    );
};

export default Projects;