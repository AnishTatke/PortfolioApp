"use client";
import React, { useState, Children, cloneElement } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, faultVariant } from '../variants';
import { EducationCardItem, ExperienceCardItem, ProjectCardItem } from '@/lib/interfaces';
import MyChip from './MyChip';
import { getGDriveImageLink } from '@/lib/services';
import NextImage from 'next/image';
import { Image } from "@nextui-org/react";
import VerticalDivider from '@/app/components/VerticalDivider';
import { MdEdit } from "react-icons/md";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

const DateRange: React.FC<{ date: string, isExpanded: boolean }> = ({ date, isExpanded }) => {
    const [startDate, endDate] = date.split('-').map(date => date.trim());
    return (
        <>
            <div className='hidden lg:flex flex-row justify-start w-full'>
                <h2 className='mx-0 text-nowrap'>{startDate}</h2>
                <motion.div
                    initial={{ width: 15 }}
                    animate={{ width: isExpanded ? 50 : 15, transition: { duration: 0.8 } }}
                    className='hidden xl:block h-[1px] bg-themecolor self-center mx-2'
                />
                <div className='block xl:hidden w-[15px] h-[1px] bg-themecolor self-center mx-2' />
                {endDate == "Present" ? <h2 className='text-nowrap'><em>{endDate}</em></h2> : <h2 className='text-nowrap'>{endDate}</h2>}
            </div>
            <div className='flex lg:hidden flex-row justify-end'>
                <h2 className='mx-0 text-nowrap'>{startDate}</h2>
                <div className='w-[15px] h-[1px] bg-themecolor self-center mx-2' />
                {endDate == "Present" ? <h2 className='text-nowrap'><em>{endDate}</em></h2> : <h2 className='text-nowrap'>{endDate}</h2>}
            </div>
        </>
    );
}

export const Card: React.FC<{ children: React.ReactNode, isExpanded: boolean, onClick: () => void }> = ({ children, isExpanded, onClick }) => {
    return (
        <motion.div
            whileHover='hover'
            onClick={onClick}
            animate={isExpanded && 'animate'}
            variants={cardVariants}
            className='my-3 lg:mx-3 w-full h-auto rounded-lg p-2 xl:p-4'
        >
            {children}
        </motion.div>
    );
};

export const FormCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            whileHover='hover'
            variants={cardVariants}
            className='my-3 w-full h-auto rounded-lg p-2 xl:p-4 border-themecolor border-[1px]'
        >
            {children}
        </motion.div>
    );
};

export const ExpandableCard: React.FC<{ children: React.ReactNode, title?: string, expanded?: boolean }> = ({ children, title, expanded }) => {
    const [isExpanded, setIsExpanded] = useState(expanded || false);
    return (
        <div className='flex flex-col'>
            {isExpanded ?
                <motion.div
                    whileHover='hover'
                    variants={cardVariants}
                    className='my-1 w-full h-auto rounded-lg p-4 border-themecolor border-[1px]'
                >
                    {title && <div className='flex flex-row justify-between'>
                        <h2 className="text-2xl font-bold mb-3">{title}</h2>
                    </div>}
                    {children}
                    <div className='flex flex-row justify-end'>
                        <RiArrowUpWideFill className="text-2xl mt-3" onClick={() => setIsExpanded(!isExpanded)} />
                    </div>
                </motion.div>
                :
                <motion.div
                    whileHover='hover'
                    variants={cardVariants}
                    className='my-1 w-full h-auto rounded-lg p-4 border-themecolor border-[1px]'
                >
                    <div className='flex flex-row justify-between'>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <RiArrowDownWideFill className="text-2xl mt-1" onClick={() => setIsExpanded(!isExpanded)} />
                    </div>
                </motion.div>
            }
        </div>
    );
}

export const EditCard: React.FC<{
    isNew?: boolean,
    children: React.ReactNode,
}> = ({ isNew ,  children }) => {
    const [canEdit, setCanEdit] = useState(isNew || false);

    return (
        <div>
            <div className='float-right'>
                {!canEdit && <MdEdit className="text-2xl" onClick={() => setCanEdit(!canEdit)} />}
            </div>
            {Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { canEdit, setCanEdit });
                }
            }
            )}
        </div>
    );
}

export const CourseList: React.FC<{ courses: string[], isExpanded: boolean }> = ({ courses, isExpanded }) => {
    if (isExpanded && courses.length > 0) {
        return (
            <div className='flex flex-col justify-start mt-3 lg:mt-0'>
                <h2 className='text-themecolor'>Courses</h2>
                <p className='text-sm mr-1 text-wrap'>
                    {courses.map((course, index) => {
                        if (index === courses.length - 1) {
                            return (<span className='hover:text-themecolor' key={index}>{course}</span>)
                        } else {
                            return (<span className='hover:text-themecolor' key={index}>{course}, </span>)
                        }
                    })}
                </p>
            </div>
        )
    } else {
        return (<></>)
    }
};

export const ExperienceCard: React.FC<{ experience: ExperienceCardItem }> = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            {/* Laptop Screen */}
            <div className='hidden lg:flex flex-row h-max'>
                <div className='w-1/3 flex flex-col justify-between'>
                    <DateRange date={experience.date} isExpanded={isExpanded} />
                    {isExpanded && experience.profiles.length > 0 &&
                        <motion.div
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                        >
                            <h2>Previous Profiles: </h2>
                            <ul className='ml-3'>
                                {experience.profiles.map((profile, index) => (
                                    <li key={index} className='mx-1 text-themecolor'>{profile}</li>
                                ))}
                            </ul>
                        </motion.div>
                    }
                    {isExpanded && experience.skills.length > 0 &&
                        <motion.div
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            className='flex flex-col justify-start'
                        >
                            <h2>Skills</h2>
                            <div className='mr-2 flex flex-row justify-start flex-wrap'>
                                {experience.skills.map((skill, index) => (
                                    <MyChip skill={skill} index={index} key={index} />
                                ))}
                            </div>
                        </motion.div>
                    }
                </div>
                <VerticalDivider isExpanded={isExpanded} />
                <div className='w-2/3 flex flex-col ml-3'>
                    <div className='flex flex-col h-auto'>
                        <div className='w-full flex flex-row justify-between'>
                            <h1 className='text-lg font-semibold tracking-wider text-themecolor'>{experience.title}</h1>
                        </div>
                        <div className='w-full flex flex-row justify-between'>
                            <motion.a
                                href={experience.url}
                                className='w-fit'
                                initial={{ color: '#ffffff' }}
                                whileTap={{ color: '#fb923c' }}
                            >{experience.company}</motion.a>
                            {isExpanded && <h1 className='hidden xl:block'>{experience.location}</h1>}
                        </div>
                        {isExpanded && <h1 className='block xl:hidden'>{experience.location}</h1>}
                    </div>
                    <div className='mt-5 flex flex-col justify-evenly'>
                        <motion.p
                            variants={faultVariant}
                            className='text-sm'
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            {experience.description}
                        </motion.p>
                        {isExpanded && experience.content.length > 0 &&
                            <motion.ul
                                variants={faultVariant}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                className='mt-1 ml-2 px-2 list-disc'
                            >
                                {experience.content.map((content, index) => (
                                    <li className='my-1 text-sm text-wrap' key={index}>{content}</li>
                                ))}
                            </motion.ul>
                        }
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            <div className='flex lg:hidden flex-col h-max'>
                <div className='w-full flex flex-row justify-start md:justify-around'>
                    <div className='w-full sm:w-1/2 flex flex-col justify-between'>
                        <h1 className='text-lg font-semibold tracking-wider text-themecolor md:text-nowrap'>{experience.title}</h1>
                        <motion.a
                            className='w-fit'
                            href={experience.url}
                            initial={{ color: '#ffffff' }}
                            whileFocus={{ color: '#fb923c' }}
                        >
                            {experience.company}
                        </motion.a>
                        <div className='w-full flex sm:hidden flex-row justify-between'>
                            <DateRange date={experience.date} isExpanded={isExpanded} />
                            {experience.location && <h1 className='w-fit self-end'>{experience.location}</h1>}
                        </div>
                    </div>
                    <div className='hidden sm:flex w-1/2 flex-col justify-between'>
                        <DateRange date={experience.date} isExpanded={isExpanded} />
                        {isExpanded && experience.location && <h1 className='w-fit self-end'>{experience.location}</h1>}
                    </div>
                </div>

                {isExpanded && experience.profiles.length > 0 && <div className='w-full flex flex-col justify-start'>
                    <h2>Previous Profiles: </h2>
                    <ul className='ml-3'>
                        {experience.profiles.map((profile, index) => (
                            <li key={index} className='mx-1 text-themecolor'>{profile}</li>
                        ))}
                    </ul>
                </div>}

                {isExpanded &&
                    <div className='flex flex-col pt-4'>
                        <p className='text-sm'>{experience.description}</p>
                        <motion.ul
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='ml-2 px-2 list-disc'
                        >
                            {experience.content.map((content, index) => (
                                <li className='text-sm text-wrap py-1' key={index}>{content}</li>
                            ))}
                        </motion.ul>
                    </div>
                }

                {isExpanded && experience.skills.length > 0 &&
                    <div className='w-full flex flex-col justify-start'>
                        <h2>Skills</h2>
                        <div className='mr-2 flex flex-row justify-start flex-wrap'>
                            {experience.skills.map((skill, index) => (
                                <MyChip skill={skill} index={index} key={index} />
                            ))}
                        </div>
                    </div>
                }
            </div>
        </Card>
    );
};

export const EducationCard: React.FC<{ education: EducationCardItem }> = ({ education }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            {/* Laptop Screen */}
            <div className='hidden lg:flex flex-row h-max'>
                <div className='w-2/5 flex flex-col justify-between'>
                    <DateRange date={education.date} isExpanded={isExpanded} />
                    <CourseList courses={education.courses} isExpanded={isExpanded} />
                </div>
                <VerticalDivider isExpanded={isExpanded} />
                <div className='w-3/5 flex flex-col ml-3'>
                    <div className='w-full flex flex-row justify-between'>
                        <h1 className='text-lg font-semibold tracking-wider text-themecolor'>{education.title} : {education.majors}</h1>
                        {isExpanded && <h1 className='hidden xl:block'>{education.location}</h1>}
                    </div>
                    <motion.a
                        href={education.url}
                        className='w-fit'
                        initial={{ color: '#ffffff' }}
                        whileTap={{ color: '#fb923c' }}
                    >
                        {education.school}
                    </motion.a>
                    {isExpanded && <h1 className='block xl:hidden'>{education.location}</h1>}
                    <div className='mt-5'>
                        {isExpanded ?
                            <p className='text-sm'>{education.description}</p> :
                            <p className='text-sm line-clamp-2'>{education.description}</p>
                        }
                    </div>
                </div>
            </div>
            {/* Mobile Screen */}
            <div className='flex lg:hidden flex-col h-max'>
                <div className='w-full flex flex-row justify-start md:justify-around'>
                    <div className='w-full sm:w-1/2 flex flex-col justify-between'>
                        <h1 className='text-lg font-semibold tracking-wider text-themecolor md:text-nowrap'>{education.title} : {education.majors}</h1>
                        <motion.a
                            className='w-fit'
                            href={education.url}
                            initial={{ color: '#ffffff' }}
                            whileFocus={{ color: '#fb923c' }}
                        >
                            {education.school}
                        </motion.a>
                        <div className='w-full flex sm:hidden flex-row justify-between'>
                            <DateRange date={education.date} isExpanded={isExpanded} />
                            {education.location && <h1 className='w-fit self-end'>{education.location}</h1>}
                        </div>
                    </div>
                    <div className='hidden sm:flex w-1/2 flex-col justify-between'>
                        <DateRange date={education.date} isExpanded={isExpanded} />
                        {isExpanded && education.location && <h1 className='w-fit self-end'>{education.location}</h1>}
                    </div>
                </div>
                {isExpanded &&
                    <div className='flex flex-col py-2'>
                        <p>{education.description}</p>
                        <CourseList courses={education.courses} isExpanded={isExpanded} />
                    </div>
                }
            </div>
        </Card>
    )
};

export const ProjectCard: React.FC<{ project: ProjectCardItem }> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
            {/* Laptop Screen */}
            <div className='hidden xl:flex flex-row h-max'>
                <div className='w-auto flex flex-col justify-between'>
                    {isExpanded ? <div className='relative p-1 mx-2 w-fit min-w-[400px] h-full border-[1px] border-themecolor/[0.5]'>
                        <Image
                            removeWrapper
                            as={NextImage}
                            fill
                            src={getGDriveImageLink(project.image)}
                            alt={project.title}
                        />
                    </div>
                        :
                        <div className='relative p-1 mx-2 w-fit min-w-[200px] h-full border-[1px] border-themecolor/[0.5]'>
                            <Image
                                removeWrapper
                                as={NextImage}
                                fill
                                src={getGDriveImageLink(project.image)}
                                alt={project.title}
                            />
                        </div>}
                </div>
                <VerticalDivider isExpanded={isExpanded} />
                <div className='w-auto px-3 flex flex-col justify-start'>
                    <h1 className='font-semibold text-lg tracking-wider text-themecolor'>{project.title}</h1>

                    <div className='pt-2 font-semi flex flex-row flex-wrap'>
                        <h1 className='text-md mr-2'>Skills:</h1>
                        {project.tags.map((tag, index) => (
                            <MyChip skill={tag} index={index} key={index} />
                        ))}
                    </div>

                    <div className='pt-2'>
                        <p className='text-sm'>{project.description}</p>
                        {isExpanded && project.content.length > 0 &&
                            <motion.ul
                                variants={faultVariant}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                className='ml-2 px-2 list-disc'
                            >
                                {project.content.map((content, index) => (
                                    <li className='text-sm text-wrap' key={index}>{content}</li>
                                ))}
                            </motion.ul>
                        }
                    </div>

                    {isExpanded && project.links.length > 0 && <div
                        className='m-2 p-2 flex flex-row justify-start w-[500] bg-themeopacque rounded-lg'
                    >
                        {project.links.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                className='mr-10 text-3xl'
                                initial={{
                                    scale: 1,
                                    color: '#ffffff'
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    color: '#fb923c'
                                }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>}
                </div>
            </div>

            {/* Mobile Screen */}
            <div className='flex xl:hidden flex-col h-max p-1 md:p-2'>
                <div className='w-fit px-1 h-auto border-[1px] border-themecolor/[0.5] first-of-type:self-center'>
                    <Image
                        removeWrapper
                        as={NextImage}
                        width={400}
                        height={150}
                        className='m-1 mx-auto'
                        src={getGDriveImageLink(project.image)}
                        alt={project.title}
                    />
                </div>
                <h1 className='font-semibold text-lg text-themecolor tracking-wider md:text-nowrap'>{project.title}</h1>
                <div className='my-2'>
                    <p className='text-sm'>{project.description}</p>
                    {isExpanded && project.content.length > 0 &&
                        <motion.ul
                            variants={faultVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='ml-2 px-2 list-disc'
                        >
                            {project.content.map((content, index) => (
                                <li className='text-sm text-wrap' key={index}>{content}</li>
                            ))}
                        </motion.ul>
                    }
                </div>
                <div className='mb-2 flex flex-row justify-start flex-wrap'>
                    {project.tags.map((tag, index) => (
                        <MyChip skill={tag} index={index} key={index} />
                    ))}
                </div>
            </div>
        </Card>
    );
};