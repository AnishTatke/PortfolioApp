"use client"
import React from 'react';
import NavLinks from '../components/NavLinks';
import MyIntro from './MyIntro';



const LeftIntro: React.FC<{ data: any, contactData:any }> = ({ data, contactData }) => {
    return (
        <div className='mt-[50px] w-full flex flex-col justify-evenly items-center'>
            <MyIntro />
            <NavLinks links={data} />
        </div>
    );
};

export default LeftIntro;