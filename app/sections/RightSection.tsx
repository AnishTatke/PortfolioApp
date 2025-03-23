import React from 'react';
import Intro from './Intro';
import Experience from '@/app/sections/Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Skills from './Skills';

const RightSection: React.FC<{ data: any}> = ({ data }) => {
    return (
        <div>
            <Header />
            <div className='mr-10 pr-10 w-full h-auto flex flex-col tracking-wide scroll-smooth'>
                <div id='home' className='anchor my-10 px-5'>
                    <Intro heroData={data.heroData} />
                </div>
                <div id='education' className='anchor my-10 px-5'>
                    <Education educations={data.educationsData} />
                </div>
                <div id='experience' className='anchor my-10 px-5'>
                    <Experience experiences={data.experiencesData} />
                </div>
                <div id='projects' className='anchor my-10 px-5'>
                    <Projects projects={data.projectsData} />
                </div>
                <div id='skills' className='anchor my-10 px-5'>
                    <Skills skillData={data.skillsData}/>
                </div>
                <div id='contact' className='my-10 px-5'>
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default RightSection;