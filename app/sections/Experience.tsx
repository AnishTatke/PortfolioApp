import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ExperienceCard } from '@/app/components/Cards';
import { ExperienceCardItem } from '@/lib/interfaces';

const Experience: React.FC<{ experiences: ExperienceCardItem[]}> = ({experiences}) => {
    return (
        <div>
            <SectionTitle index={3} title='Experience' />
            <div>
                {[...experiences].reverse().map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </div>
    );
};

export default Experience;