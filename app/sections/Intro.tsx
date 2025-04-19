import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Intro: React.FC<{heroData: string[]}> = ({ heroData }) => {
    return (
        <div>
            <SectionTitle index={1} title='About Me' />
            <div className='p-1 tracking-wide text-center lg:text-left space-y-2'>
                {heroData.map((data, index) => (
                    <p key={index} className='text-md font-light'>{data}</p>
                ))}
            </div>
        </div>
    );
};

export default Intro;