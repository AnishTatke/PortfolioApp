import React from "react";
import { ExperienceCardItem, EducationCardItem } from "./interfaces";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiIeee } from "react-icons/si";
import { title } from "process";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const heroData = [
  "Hello, I'm Anish Tatke. I'm currently pursuing a Master’s degree in Computer Science with a specialization in Artificial Intelligence and Data Science.",
  "Since childhood, technology has captivated me. My fascination began with retro games and DOS system programs, grew with the rise of the internet, and continued when I ran my first 'Hello World' program in C. As I delved into tools like Excel and Word, built my own web applications, discovered cloud technology, and witnessed the wonders of AI, I realized my passion lies in this broad field.",
  "Given recent advancements in AI, I envision a world where technology serves as an aid, not a necessity for survival. I'm eager to contribute to this technology, improving it and finding innovative solutions that foster peace and prosperity. To make this vision a reality, I'm dedicated to learning more and developing swift, impactful, and efficient solutions to current challenges.",
]

export const experiencesData: ExperienceCardItem[] = [
  {
    title: "Software Developer Intern",
    company: "Dee Dee Labs. Pvt. Ltd.",
    url: "https://deedeelabs.org/",
    location: "Pune, India",
    description: "Internship at a startup in Pune, India. Worked on mobile app and game development using Unity for rehabilitation of patients with prosthetic arms.",
    content: [
      "Developed a proprietary mobile app for authentication bypass and rehabilitation progress monitoring; improved patient outcomes by 30% and reduced server latency by 60%.",
      "Engineered a video game utilizing prosthetic devices for rehabilitation; gamification method resulted in a 45% acceleration of the rehabilitation process."
    ],
    profiles: [],
    skills: ["Angular JS", "SQL" ,"Unity", "C#", "AWS", "MQTT"],
    image: "url",
    date: "Feb 2020 - May 2020",
  },
  {
    title: "Software Developer",
    company: "Quantiphi Analytics",
    url: "https://quantiphi.com/",
    location: "Bangalore, India",
    description:
      "At Quantiphi Analytics, I developed and launched cloud-based web apps using predictive audio recognition and natural language processing data, enhancing user engagement and decision-making.",
    content: [
      "Developed and deployed cloud-based web applications, incorporating data from predictive audio recognition and natural language processing models to optimize user engagement and decision-making processes, yielding a 15% increase in user retention.",
      "Led the creation of a fuzzy search engine for NoSQL databases, driving a 20% boost in client satisfaction. Engineered scalable event-driven pipelines to accelerate results, reducing web application latency by 15%.",
    ],
    profiles: ["Framework Engineer"],
    skills: ["React.JS", "Next.JS", "Node.JS", "MongoDB", "SQL", "PostgreSQL", "App-Engine", "Kubernetes", "Big Query"],
    image: "url",
    date: "June 2021 - June 2023",
  },
] as const;

export const educationsData: EducationCardItem[] = [
  {
    title: "Master's in Science",
    majors: "Computer Science",
    school: "University of Florida",
    url: "https://www.ufl.edu/",
    location: "Gainesville, FL",
    description:
      "I'm studying Computer Science with a focus on Machine Learning and Artificial Intelligence. I'm currently seeking full-time opportunities in areas such as Machine Learning, Data Science, and Software Development.",
    courses: ["Machine Learning", "Advanced Data Structures", "Computer Vision", "Data Engineering"],
    image: "url",
    date: "August 2023 - Present",
  },
  {
    title: "Bachelors in Technology",
    majors: "Computer Science",
    school: "MIT World Peace University",
    url: "https://mitwpu.edu.in/",
    location: "Pune, India",
    description:
      "I graduated with a Bachelor's degree in Computer Science, where I learned the basics of the field and gained in-depth knowledge of engineering disciplines for problem-solving. Additionally, I was part of various student clubs and representative groups.",
    courses: ["Data Structures", "Algorithms", "Web Development", "Database Management", "Operating Systems", "Computer Networks", "Software Engineering"],
    image: "url",
    date: "June 2017 - June 2021",
  }
] 

export const projectsData = [
  {
    title: "EenthPathar",
    links: [
      {
        "name": "Github",
        "url": "https://github.com/AnishTatke/EenthPatthar",
        "icon": React.createElement(FaGithub)
      },
    ],
    description:
      "EenthPatthar is a web application for property transactions, connecting buyers and sellers for efficient interactions.",
    content: [
      "Designed Figma frames for a commercial real estate website, implemented front-end development in React.JS, and styled elements using Bootstrap CSS to ensure visual consistency increasing client satisfaction by 75%.",
      "Programmed the backend of the website using Node.JS; implemented REST-API to manage data interactions with Firestore Database, and integrated Firebase Authentication to ensure secure user access."
    ],
    tags: ["React.JS", "Node.JS", "Firebase", "Firestore", "Bootstrap", "Figma"],
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Garbage Classification using Deep Learning",
    links: [
      {
        "name": "Paper",
        "url": "https://ieeexplore.ieee.org/document/9573599",
        "icon": React.createElement(SiIeee)
      },
      {
        "name": "Github",
        "url": "https://github.com/AnishTatke/Garbage-Detection-Application",
        "icon": React.createElement(FaGithub)
      },
    ],
    description:
      "Trained image classification models on garbage and non-garbage image dataset. Deployed the model on a mobile application and published a paper in an IEEE journal.",
    content: [
      "Trained various image classification models on curated datasets and their deployment on a tailored mobile application. Furthermore, implemented image processing techniques on datasets, leading to accuracy improvements of 10-15%",
      "Built a cross-platform mobile application with Flutter SDK, featuring pre-loaded Tensorflow Lite-optimized models. Conducted optimizations to reduce latency by 30% and file size by 45%.",
      "Published a paper in an IEEE journal that analyzes the performance of the models."
    ],
    tags: ["Python", "Tensorflow", "Flutter", "Dart", "Firebase"],
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Prog Rock vs World",
    links: [
      {
        "name": "Github",
        "url": "https://github.com/AnishTatke/ProgRock-vs-World",
        "icon": React.createElement(FaGithub)
      },
    ],
    description:
      "Trained models using various Deep Learning techniques to classify songs into Prog Rock and World Music genres.",
    content: [
      "Performed comprehensive research on audio classification models and data analysis techniques.",
      "Extracted key features like Mel-Spectrogram, Chromagram, and MFCCs for every 10-second snippet of every song.",
      "Architectured a binary classification model using Convolutional Neural Networks (CNNs) for distinguishing between Progressive and Non-Progressive Rock snippets,  achieving a validation accuracy of about 74% - 75%.",
      "Implemented models such as Simple Voting classifiers, RNNs, and LSTM networks for making predictions over songs(all snippets combined) achieving validation accuracy of about 85% - 86%."
    ],
    tags: ["Python", "PyTorch", "Librosa", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
] as const;

export const contactData = {
  email: "nish.tatke@gmail.com",
  universityEmail: "anish.tatke@ufl.edu",
  location: "Gainesville, FL",
  resumes: [
    {
      name: "SDE Resume",
      url: "https://drive.google.com/file/d/1h-wHiveIdSAqQu_QCrlfZJs2bqMwHeUv/view?usp=sharing",
    },
    {
      name: "MLE Resume",
      url: "https://drive.google.com/file/d/1YRCvONpDYX9Eto99HksXpgZ4zQnE8Wcf/view?usp=sharing",
    },
  ],
  socials: [
    {
      name: "Github",
      url: "https://github.com/AnishTatke",
      icon: React.createElement(FaGithub),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tatke-anish/",
      icon: React.createElement(FaLinkedin),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Nerdyappa",
      icon: React.createElement(FaXTwitter),
    },
  ],
} as const;