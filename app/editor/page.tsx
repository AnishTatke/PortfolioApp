"use client";
import React from 'react';
import Backdrop from '../components/Backdrop';
import { Profile } from './sections/Profile';
import { Experiences } from './sections/Experiences';
import { EditCard, ExpandableCard } from '../components/Cards';
import { IoMdAdd } from "react-icons/io";
import { AddButton } from './components/FormButtons';


const EditorPage: React.FC = () => {
    const editableListSections = [
        {
            title: 'Profile',
            components: <Profile />,
            iterable: false
        },
        {
            title: 'Experience',
            components: <Experiences />,
            iterable: true
        },
        // {
        //     title: 'Education',
        //     components: <></>
        // },
        // {
        //     title: 'Skills',
        //     components: <></>
        // },
        // {
        //     title: 'Projects',
        //     components: <></>
        // },
        // {
        //     title: 'Publications',
        //     components: <></>
        // },
        // {
        //     title: 'Certifications',
        //     components: <></>
        // }
    ];

    return (
        <main className='h-full w-full'>
            <Backdrop />
            <div className='p-8 px-15'>
                <h1 className='text-5xl font-bold'>Editor</h1>
                <p className='text-xl mt-5'>
                    This is the editor page. Here you can write your blog post. 
                    You can use markdown to format your text. 
                    You can also add images and videos to your post.
                </p>

                <div className='flex flex-col gap-4 mt-8'>
                    {editableListSections.map((section, index) => (
                            <ExpandableCard key={index} title={section.title}>
                                {section.components}
                            </ExpandableCard>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default EditorPage;