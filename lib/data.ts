import React from "react";
import { ExperienceCardItem, EducationCardItem } from "./interfaces";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiIeee } from "react-icons/si";

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
    description: "Interned at Dee Dee Labs, where I developed a mobile application where doctors could monitor patient progress and provide rehabilitation exercises. I also developed a prosthetic controlled video game for accelerating rehabilitation.",
    content: [
      "Formulated and deployed a cross-platform mobile application featuring rehabilitation progress monitoring of patients with prosthetic devices",
      "Fabricated an innovative video game in Unity controlled by prosthetic devices for rehabilitation of amputee patients"
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
      "At Quantiphi Analytics, my primary work was designing and developing production-ready web applications and APIs for clients. I worked in collaboration with machine learning engineers, platform engineers and front-end designers to deliver high-quality products.",
    content: [
      "Pioneered a user interface on GCP App Engine for Humana, leveraging sentiment analysis and speech-to-text processing of client data for actionable insights.",
      "Devised an event-driven architecture integrating Cloud Bucket and MongoDB, streamlining and automating record processing",
      "Developed an interactive ReactJS platform for customer call analysis for Gryphon, featuring a backend API for generating speech-to-text transcripts, analyzing call sentiment, and populating SQL databases.",
      "Delivered real-time analytics on call performance, empowering data-driven decision-making",
      "Engineered a cloud-native application for processing handwritten documents using NLP for TIAA, advancing business analytics capabilities.",
      "Curated a comprehensive dashboard by consolidating client data and prediction results with PostgreSQL queries",
      "Earned Google Cloud Associate Cloud Engineer (ACE) Certification, enhancing expertise in cloud development and deployments, contributing to the successful delivery of multiple applications on GCP."
    ],
    profiles: ["Framework Engineer"],
    skills: ["React.JS", "Next.JS", "Node.JS", "MongoDB", "SQL", "PostgreSQL", "App-Engine", "Kubernetes", "Big Query"],
    image: "url",
    date: "June 2021 - June 2023",
  },
  {
    title: "Graduate Research Assistant, Machine Learning",
    company: "Computational Medical Imaging Lab, University of Florida",
    url: "https://cmilab.nephrology.medicine.ufl.edu/",
    location: "Gainesville",
    description: "Working as ML Expertise Research Assistant, I'm involved in developing machine learning models for medical imaging applications. I'm currently working on a developing end-to-end plugins for training and inference on histo-pathological applications.",
    content: [
      "Trained advanced segmentation models with HiPerGator’s A100 GPUs for detecting nephrological features required for pathology.",
      "Implemented cutting-edge morphology and image processing to enhance prediction results",
      "Deployed complete AI pipelines as Docker plugins on cloud platforms for inference",
    ],
    profiles: [],
    skills: ["Python", "Tensorflow", "PyTorch", "OpenCV", "Docker", "Deep Learning", "Image Processing"],
    image: "url",
    date: "August 2024 - Present",
  }
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
    courses: ["Advanced Machine Learning", "Advanced Data Structures", "Computer Vision", "Data Engineering, Software Engineering", "AI Ethics", "Distributed Operating Systems"],
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
      "I graduated with a Bachelor's degree in Computer Science, where I learned the basics of the field and gained in-depth knowledge of engineering disciplines for problem-solving. I led various projects and workshops affiliated with university clubs, helping my leadership and communication skills.",
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
      "Designed Figma frames for a commercial real estate website, implemented in React-Bootstrap with Material UI for layout elements, seamless navigation and data display.",
      "Programmed a Node.JS backend with REST-API to manage data interactions with Firestore database, and integrated Firebase authentication to ensure secure user access."
    ],
    tags: ["React.JS", "Node.JS", "Firebase", "Firestore", "Bootstrap", "Figma"],
    image: "",
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
    image: "1VNS1H5l6QnAr5i5ztDrZf-TErqVHelI9"
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
    image: "1CXJ2yK2noV1KZpRdku-vZQjqvUT8bnZE",
  },
  {
    title: "QuickQuiz",
    links: [
      {
        "name": "Github",
        "url": "https://github.com/AnishTatke/quickquiz",
        "icon": React.createElement(FaGithub)
      },
    ],
    description: "Project built at ShellHacks 2024, a hackathon hosted for all tech enthusiasts in Southeast USA. My team and I built an AI-powered tool provided for anyone to learn anything faster, better and on their own.",
    content: [
      "Devised an AI-powered React web app using Material-UI and SCSS.",
      "Built a Flask backend to parse PDFs, extract text, and perform chunking, tokenization and embedding in VectorDB.",
      "Integrated OpenAI's GPT-3 for generating summaries, answering doubts and providing explanations.",
      "Build feature to generate quizzes and flashcards, with dynamic difficulty levels and adaptive scoring mechanism.",
      "We also provided voice assistance features, adding inclusivity and accessibility to the app."
    ],
    tags: ["React.JS", "Flask", "OpenAI", "Python", "Flask", "ChromaDB"],
    image: "18Nj48OkRIsaNb2z814WyXDmzWexclCjE",
  }
] as const;

export const contactData = {
  email: "nish.tatke@gmail.com",
  universityEmail: "anish.tatke@ufl.edu",
  location: "Gainesville, FL",
  resumes: [
    {
      name: "SD Resume",
      url: "https://drive.google.com/file/d/19Ba8NZ0zO02wkgDMSRD9mo-FDY0IQeg0/view?usp=sharing",
    },
    {
      name: "ML Resume",
      url: "https://drive.google.com/file/d/115MHGA2DVmzdMvg2sZucER0mVl0rBOhQ/view?usp=sharing",
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