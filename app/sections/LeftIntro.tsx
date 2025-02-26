"use client"
import React from 'react';
import NavLinks from '../components/NavLinks';
import MyIntro from './MyIntro';



const LeftIntro: React.FC<{ data: any, contactData:any }> = ({ data, contactData }) => {
    return (
        <div className='mt-[90px] w-full flex flex-col justify-evenly items-center'>
            <MyIntro />
            {/* <div className='p-1 px-2 flex flex-col w-1/4 h-max'>
                {contactData.resumes.map((resume: any, index: number) => (
                    <motion.a
                        className='m-1 my-3 p-2 text-white text-center text-xl bg-themeopacque rounded-md border-[1px] border-themeopacque text-nowrap'
                        initial={{
                            scale: 1,
                            color: '#ffffff'
                        }}
                        whileHover={{
                            scale: 1.1,
                            color: '#fb923c'
                        }}
                        key={index} href={resume.url}
                    >
                        {resume.name}
                    </motion.a>
                ))} 
            </div> */}
            <NavLinks links={data} />
        </div>
    );
};

export default LeftIntro;