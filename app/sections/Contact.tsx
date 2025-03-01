"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/app/components/SectionTitle';
import { Card } from '../components/Cards';
import { sendEmail } from '@/lib/services';
import { FormSubmitButton } from '../components/FormSubmitButton';



const Contact: React.FC = () => {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailData = {
            from_name: name,
            from_email: email,
            to_name: 'Anish Tatke',
            message: message
        }
        console.log(name, email, message);
        if(await sendEmail(emailData)) {
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Message failed to send. Please try again later.');
        }
    }

    return (
        <div>
            <SectionTitle index={4} title='Contact' />
            <Card isExpanded={true} onClick={() => {}}>
                <h2 className='text-themecolor font-semibold text-lg mx-2 mb-4'>Ping Me From Here</h2>
                <form className='p-3 flex flex-col justify-start' onSubmit={handleSubmit}>
                    <label className='text-lg'>Name</label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full p-2 my-1 bg-bboard border-2 border-themecolor/50 rounded-md' 
                    />
                    <label className='text-lg'>Email</label>
                    <input 
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className='w-full p-2 my-1 bg-bboard border-2 border-themecolor/50 rounded-md'
                    />
                    <label className='text-lg'>Message</label>
                    <textarea 
                        name='message'
                        id='message'
                        placeholder='Type your message here...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full p-2 my-1 bg-bboard border-2 border-themecolor/50 rounded-md'
                    />
                    <FormSubmitButton />
                </form>
            </Card>
        </div>
    );
};

export default Contact;