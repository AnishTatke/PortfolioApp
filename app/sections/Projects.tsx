import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ProjectCardItem } from '@/lib/interfaces';
import { ProjectCard } from '../components/Cards';

const Projects: React.FC<{ projects: ProjectCardItem[] }> = ({projects}) => {
    return (
        <div>
            <SectionTitle index={3} title='Projects' />
            <div>
                {[...projects].reverse().map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;