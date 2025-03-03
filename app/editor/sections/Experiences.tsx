"use client";
import React, { useState, useEffect } from 'react';

import { NamedField, NamedFormField, NamedFormTextArea } from '../components/NamedField';
import { ExperienceInterface } from '@/lib/interfaces';
import { ListField, ListFormFieldSpanned } from '../components/ListField';
import { EditCard, ExpandableCard } from '@/app/components/Cards';
import { FormSubmitButton } from '@/app/components/FormSubmitButton';
import { AddButton, DeleteButton } from '../components/FormButtons';
import ConfirmDialog from '@/app/components/ConfirmDialo';


const ExperienceCard: React.FC<{ experience: ExperienceInterface }> = ({ experience }) => {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='w-1/2 flex flex-col'>
                    <NamedField name='Title' value={experience.title} />
                    <NamedField name='Company' value={experience.company} />
                    <NamedField name='Location' value={experience.location} />
                </div>
                <div className='w-1/2 flex flex-col'>
                    <NamedField name='Start Date' value={experience.start_date} />
                    <NamedField name='End Date' value={experience.end_date} />
                    <NamedField name='URL' value={experience.url} />
                </div>
            </div>
            <div className='flex flex-row mt-2 gap-2'>
                <div className='w-1/2 flex flex-col'>
                    <NamedField name='Description' value={experience.description} />
                </div>
                <div className='w-1/2 flex flex-col'>
                    <ListField name='Points' values={experience.points} />
                </div>
            </div>
        </div>
    );
}

const ExperienceForm: React.FC<{ 
    index: number
    experience: ExperienceInterface, 
    setExperience: any,
    deleteExperience: any,
    setCanEdit: any
    handleSubmit: (e: React.FormEvent) => void
}> = ({ index, experience, setExperience, deleteExperience, setCanEdit, handleSubmit }) => {
    const [canDelete, setCanDelete] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    };

    const delExp = () => {
        setCanDelete(true);
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4'
            >
                <div >
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='col-span-1'>
                            <NamedFormField name='title' value={experience.title} handleChange={handleChange} />
                            <NamedFormField name='company' value={experience.company} handleChange={handleChange} />
                            <NamedFormField name='location' value={experience.location} handleChange={handleChange} />
                        </div>
                        <div className='col-span-1'>
                            <NamedFormField name='start_date' value={experience.start_date} handleChange={handleChange} />
                            <NamedFormField name='end_date' value={experience.end_date} handleChange={handleChange} />
                            <NamedFormField name='url' value={experience.url} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='col-span-1'>
                            <NamedFormTextArea name='description' value={experience.description} handleChange={handleChange} />
                        </div>
                        <div>
                            <ListFormFieldSpanned name='points' values={experience.points} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <FormSubmitButton />
                    <DeleteButton onClick={delExp}/>
                </div>
            </form>
            {canDelete && <ConfirmDialog
                isOpen={true}
                onClose={() => setCanEdit(false)}
                onConfirm={() => deleteExperience()}
                message='Are you sure you want to delete this experience?'
            />}
        </div>
    );
};

export const Experience: React.FC<{
    index: number
    experience: ExperienceInterface,
    setExperience: any,
    deleteExperience: any,
    canEdit?: boolean,
    setCanEdit?: React.Dispatch<React.SetStateAction<boolean>>
    handleSubmit?: (e: React.FormEvent) => void
}> = ({ index, experience, setExperience, deleteExperience, canEdit, setCanEdit, handleSubmit }) => {
    const [exp, setExp] = useState<ExperienceInterface>(experience);

    if (!handleSubmit) {
        handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setExperience(exp);
            setCanEdit?.(false);
        };
    }

    if (canEdit) {
        return <ExperienceForm 
                    index={index}
                    experience={exp}
                    setExperience={setExp}
                    deleteExperience={deleteExperience}
                    setCanEdit={setCanEdit}
                    handleSubmit={handleSubmit}
                />
    } else {
        return <ExperienceCard experience={experience} />
    }
}

async function getExperiences(setExperience: any, setError: any) {
    try {
        const res = await fetch('/api/experience');
        if (!res.ok) {
            throw new Error('Failed to fetch experience');
        }
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        } else {
            setExperience(data);
        }
    } catch (err) {
        console.error(err);
        setError("Failed to fetch experience");
    }
}


export const Experiences: React.FC = () => {
    const emptyExperience: ExperienceInterface = {
        title: '',
        company: '',
        location: '',
        start_date: '',
        end_date: '',
        url: '',
        description: '',
        points: [''],
        technologies: [],
    };
    const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);
    const [error, setError] = useState('');

    const setExperience = (index: number) => (experience: ExperienceInterface) => {
        const newExperiences = [...experiences];
        newExperiences[index] = experience;
        setExperiences(newExperiences);
    };

    const deleteExperience = (index: number) => {
        const newExperiences = [...experiences];
        newExperiences.splice(index, 1);
        setExperiences(newExperiences);
    };

    const [newExperience, setNewExperience] = useState<ExperienceInterface>(emptyExperience);
    const [isEditing, setIsEditing] = useState(false);

    const addExperience = () => {
        setIsEditing(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newExperience != emptyExperience) {
            setExperiences([...experiences, newExperience]);
        }
        setIsEditing(false);
        setNewExperience(emptyExperience);
    };

    useEffect(() => {
        getExperiences(setExperiences, setError);
    }, []);

    if (experiences.length === 0) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {experiences.map((experience, index) => (
                <div className='flex flex-col gap-4' key={index}>
                    <ExpandableCard title={experience.company}>
                        <EditCard>
                            <Experience
                                index={index}
                                key={index}
                                experience={experience}
                                setExperience={setExperience(index)}
                                deleteExperience={() => deleteExperience(index)}
                            />
                        </EditCard>
                    </ExpandableCard>
                </div>
            ))}
            {isEditing && (
                <div className='flex flex-col gap-4'>
                    <ExpandableCard title='New Experience' expanded={true}>
                        <EditCard isNew={true}>
                            <Experience
                                index={-1}
                                experience={newExperience}
                                setExperience={setNewExperience}
                                deleteExperience={() => {}}
                                handleSubmit={handleSubmit}
                                canEdit={true}
                            />
                        </EditCard>
                    </ExpandableCard>
                </div>
            )}
            <AddButton title='Experience' onClick={addExperience} isEditing={isEditing}/>
        </div>
    );
};

