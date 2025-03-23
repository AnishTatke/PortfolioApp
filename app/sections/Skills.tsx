import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SkillTypeCard } from '../components/Cards';
import { SkillTypeItem } from '@/lib/interfaces';


const Skills: React.FC<{skillData: SkillTypeItem[]}> = ({skillData}) => {
    return (
        <div>
            <SectionTitle index={4} title='Skills' />
            <div>
                {skillData.map((skill, index) => (
                    <SkillTypeCard key={index} skilltype={skill}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;