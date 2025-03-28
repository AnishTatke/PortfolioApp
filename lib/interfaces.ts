interface NavItems {
    name: string;
    hash: string;
}

interface Link {
    name: string;
    url: string;
    icon: JSX.Element;
}

export interface NavLinksProps {
    links: NavItems[];
}

export interface ExperienceCardItem {
    title: string;
    company: string;
    url: string;
    location: string;
    description: string;
    content: string[];
    skill: SkillTypeItem[];
    profiles: string[];
    image: string;
    date: string;
}

export interface EducationCardItem {
    title: string;
    majors: string;
    school: string;
    url: string;
    location: string;
    description: string;
    courses: string[];
    image: string;
    date: string;
}

export interface ProjectCardItem {
    title: string;
    links: Link[];
    description: string;
    content: string[];
    skill: SkillTypeItem[];
    image: string;
}

export interface SkillTypeItem {
    title: string;
    type: string;
    skills: string[];
}

export interface FormObject {
    name: string;
    email: string;
    message: string;
}

export interface Message {
    text: string;
    sender: 'user' | 'bot';
}