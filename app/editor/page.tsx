"use client";
import React, { useEffect } from 'react';
import Backdrop from '../components/Backdrop';
import { Profile } from './sections/Profile';
import { EditCard } from '../components/Cards';

const EditorPage: React.FC = () => {

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

                <EditCard title='Profile'>
                    <Profile />
                </EditCard>
            </div>
        </main>
    );
};

export default EditorPage;