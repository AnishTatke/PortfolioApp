import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { EducationCardItem } from '@/lib/interfaces';
import { EducationCard } from '../components/Cards';

const Education: React.FC<{ educations: EducationCardItem[] }> = ({educations}) => {
    return (
        <div>
            <SectionTitle index={2} title='Education' />
            <div>
                {[...educations].reverse().map((education, index) => (
                    <EducationCard key={index} education={education}/>
                ))}
            </div>
        </div>
    );
};

export default Education;