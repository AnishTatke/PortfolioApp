import React from 'react';
import { Chip } from '@nextui-org/chip'

const MyChip: React.FC<{ skill: string, index: number}> = ({skill, index}) => {
    return (
        <Chip key={index} variant='faded' className='m-[2px] font-sans text-sm bg-themecolor hover:bg-themetransparent text-bboard hover:text-themecolor h-[22px]'>{skill}</Chip>
    );
};

export default MyChip;