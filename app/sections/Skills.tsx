import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SkillTypeCard } from '../components/Cards';
import { SkillTypeItem } from '@/lib/interfaces';


const Skills: React.FC<{skillData: SkillTypeItem[]}> = ({skillData}) => {
    return (
        <div>
            <SectionTitle index={4} title='Skills' />
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                {skillData.map((skill, index) => (
                    <SkillTypeCard key={index} skilltype={skill}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;