import React from 'react';
import Header from './Header';
import MyIntro from './MyIntro';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const OneScreen: React.FC<{data: any}> = ({ data }) => {
    return (
        <div className='h-full w-full px-5 sm:px-5 md:px-10'>
            <Header />
            <div className='flex lg:hidden w-full h-fit flex-col justify-center items-center'>
                <div id='mobile-home' className='my-10 w-full'>
                    <MyIntro />
                    <Intro heroData={data.heroData}/>
                </div>
                <div id='mobile-education' className='my-10 w-full'>
                    <Education educations={data.educationsData}/>
                </div>
                <div id='mobile-experience' className='my-10 w-full'>
                    <Experience experiences={data.experiencesData}/>
                </div>
                <div id='mobile-projects' className='my-10 w-full'>
                    <Projects projects={data.projectsData}/>
                </div>
                <div id='mobile-skills' className='my-10 w-full'>
                    <Skills skillData={data.skillsData}/>
                </div>
                <div id='mobile-contacts' className='my-10 w-full'>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default OneScreen;