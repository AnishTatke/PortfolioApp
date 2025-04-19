import React from "react";
import { ExperienceCardItem, EducationCardItem, SkillTypeItem, ProjectCardItem } from "./interfaces";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDatabase,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaLaptopCode,
  FaUnity,
  FaAws,
  FaBootstrap,
  FaFigma
} from "react-icons/fa";
import { 
  IoLogoJavascript
} from "react-icons/io5";
import { 
  TbCloudCode,
  TbBrandCSharp,
  TbSql,
  TbBrandReactNative,
} from "react-icons/tb";
import { 
  FaXTwitter,
  FaC,
  FaMeta
} from "react-icons/fa6";
import { 
  SiIeee,
  SiFramework,
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiDart,
  SiDjango,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiApachehadoop,
  SiIonic,
  SiFlutter,
  SiApacheairflow,
  SiTableau,
  SiApachespark,
  SiGooglecloud,
  SiKubernetes,
  SiGooglebigquery,
  SiAndroidstudio,
  SiOpenai,
  SiNumpy,
  SiScikitlearn,
  SiPandas,
  SiNvidia,
  SiOpencv,
  SiSpacy,
  SiHuggingface,
} from "react-icons/si";
import { 
  DiRedis,
  DiCss3,
} from "react-icons/di";
import { 
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { 
  LuArrowRightLeft,
} from "react-icons/lu";
import {
  Programming,
  AIML,
  DeepSpeed,
  Pinecone
} from "../app/components/svgs";

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
  "👋 Hi, I'm Anish Tatke",
  "I'm a Master's student in Computer Science, specializing in Artificial Intelligence and Data Science.",
  "My journey into tech started with retro games and tinkering with DOS programs. From building simple web apps to exploring cloud technologies and AI systems, I’ve always been driven by curiosity and a passion for problem-solving.",
  "Today, I’m focused on creating meaningful, efficient, and scalable tech solutions that improve lives. With a deep interest in the ethical and impactful use of AI, I aim to contribute to innovations that empower society rather than make it dependent.",
  "I’m actively seeking opportunities where I can apply my skills in AI, data science, and software development to real-world challenges. Let’s build something impactful together."
]

export const experiencesData: ExperienceCardItem[] = [
  {
    title: "Software Developer Intern",
    company: "Dee Dee Labs. Pvt. Ltd.",
    url: "https://deedeelabs.org/",
    location: "Pune, India",
    description: "Contributed to the development of innovative digital health tools aimed at improving rehabilitation outcomes for amputee patients.",
    content: [
      "📱 Developed a cross-platform mobile app enabling doctors to remotely monitor patient recovery and assign personalized rehabilitation exercises for prosthetic users.",
      "🎮 Built an interactive rehabilitation game in Unity, controlled by prosthetic devices, to make therapy more engaging and accelerate patient recovery.",
      "🔄 Integrated real-time progress tracking and intuitive UI/UX to ensure usability for both clinicians and patients."
    ],
    profiles: [],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["C#", "Angular.JS"],
      },
      {
        title: "Databases",
        type: "database",
        skills: ["SQL"],
      },
      {
        title: "Cloud Technologies",
        type: "cloud",
        skills: ["AWS"],
      },
      {
        title: "Frameworks",
        type: "framework",
        skills: ["MQTT"],
      },
      {
        title: "Software",
        type: "software",
        skills: ["Unity"],
      }
    ],
    image: "url",
    date: "Feb 2020 - May 2020",
  },
  {
    title: "Software Developer",
    company: "Quantiphi Analytics",
    url: "https://quantiphi.com/",
    location: "Bangalore, India",
    description:
      "Collaborated cross-functionally with ML engineers, platform teams, and designers to build scalable, production-ready web applications and APIs for enterprise clients. Specialized in cloud-native architecture, data pipelines, and real-time analytics.",
    content: [
      "🚀 Built a GCP App Engine interface for Humana integrating sentiment analysis and speech-to-text processing to drive client insights.",
      "⚙️ Designed an event-driven pipeline using Cloud Storage and MongoDB to automate and streamline record ingestion and processing.",
      "📊 Developed an interactive ReactJS dashboard for Gryphon, backed by a custom API for speech-to-text transcription, sentiment detection, and SQL data population.",
      "📈 Enabled real-time call analytics to support faster, insight-driven business decisions.",
      "📝 Engineered an NLP-based application for TIAA to extract data from handwritten documents, improving internal analytics workflows.",
      "📋 Curated a comprehensive data dashboard using PostgreSQL to unify client data and ML predictions for reporting.",
      "☁️ Certified Google Cloud Associate Cloud Engineer (ACE); leveraged GCP for rapid deployment, scalability, and cost-effective solutions."
    ],
    profiles: ["Framework Engineer"],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["JavaScript", "TypeScript"],
      },
      {
        title: "Databases",
        type: "database",
        skills: ["MongoDB", "SQL", "PostgreSQL"],
      },
      {
        title: "Cloud Technologies",
        type: "cloud",
        skills: ["App-Engine", "Kubernetes", "Big Query"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["React.JS", "Next.JS", "Node.JS"],
      },
    ],
    image: "url",
    date: "June 2021 - June 2023",
  },
  {
    title: "Graduate Research Assistant, Machine Learning",
    company: "Computational Medical Imaging Lab, University of Florida",
    url: "https://cmilab.nephrology.medicine.ufl.edu/",
    location: "Gainesville",
    description: "Contributing to the development of machine learning solutions for histopathological image analysis, with a focus on end-to-end training and inference workflows.",
    content: [
      "🧪 Trained advanced segmentation models on HiPerGator’s A100 GPU cluster to identify nephrological features critical for kidney pathology",
      "🔍 Applied state-of-the-art morphological and image processing techniques to improve model accuracy and diagnostic relevance",
      "☁️ Deployed full AI inference pipelines as containerized Docker plugins, optimized for cloud-based medical imaging platforms.",
    ],
    profiles: [],
    // skills: ["Python", "Tensorflow", "PyTorch", "OpenCV", "Docker", "Deep Learning", "Image Processing"],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python"],
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["Tensorflow", "PyTorch", "CUDA", "OpenCV", "numpy", "Scikit-Learn",  "Pandas"],
      },
      {
        title: "Frameworks",
        type: "framework",
        skills: ["Docker", "Git"],
      },
    ],
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
    courses: ["Data Structures", "Algorithms", "Web Development", "Database Management", "Operating Systems", "Computer Networks", "Software Engineering"],
    image: "url",
    date: "June 2017 - June 2021",
  }
] 

export const projectsData: ProjectCardItem[] = [
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
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["JavaScript", "TypeScript", "Bootstrap"],
      },
      {
        title: "Databases",
        type: "database",
        skills: ["Firestore"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["React.JS", "Node.JS"],
      },
      {
        title: "Cloud Technologies",
        type: "cloud",
        skills: ["Firebase", "Figma"],
      }
    ],
    image: ["1bWrBXYXmCPOwqLEwE6CgWY4kgX7cKtQJ"],
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
    // tags: ["Python", "Tensorflow", "Flutter", "Dart", "Firebase"],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python", "Dart"],
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["Tensorflow", "OpenCV"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["Flutter"],
      },
      {
        title: "Cloud Technologies",
        type: "cloud",
        skills: ["Firebase"],
      }
    ],
    image: ["1VNS1H5l6QnAr5i5ztDrZf-TErqVHelI9"]
  },
  {
    title: "BERT Movie Plot Classification",
    links: [],
    description: "",
    content: [
      "Utilized pandas and spaCy’s Rule-based Matching in Python to preprocess, harmonize genres and perform EDA on Kaggle’s WikiMovie dataset.",
      "Fine-tuned the DistilBERT model from HuggingFace over 12k single-genre movies, achieving an 86% accuracy in multiclass classification task."
    ],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python"],
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["transformers", "spaCy", "numpy", "Pandas"],
      }
    ],
    image: [""],
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
      "Explored the use of deep learning for music genre classification by analyzing audio patterns and temporal features in song data.",
    content: [
      "🔍 Conducted in-depth research on audio signal processing and classification techniques for music genre prediction.",
      "🎧 Extracted key audio features such as Mel-Spectrograms, Chromagrams, and MFCCs from 10-second song snippets to represent timbral and harmonic characteristics.",
      "🧠 Designed a CNN-based binary classifier to distinguish between Progressive Rock and Non-Progressive segments, achieving ~75% validation accuracy.",
      "🗳️ Built ensemble and sequence models, including Voting Classifiers, RNNs, and LSTMs, to aggregate predictions across full-length songs, improving accuracy to ~86%.",
      "🧪 Evaluated models using metrics like precision, recall, and confusion matrices to refine predictions and reduce false positives."
    ],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python"],
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["PyTorch", "numpy", "Scikit-Learn", "Pandas"],
      },
    ],
    image: ["1KSADe-Rf5sltSpjy_jMj295gtmYCMNCG", "1CXJ2yK2noV1KZpRdku-vZQjqvUT8bnZE", "1S106uP3eybTZ-6kWtSwh9V0g8pGjAVu3"],
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
    description: "Project built at ShellHacks 2024, a hackathon hosted for all tech enthusiasts in Southeast USA. Built an AI-driven web platform designed to help users learn faster and more independently by combining NLP, adaptive assessment, and voice accessibility.",
    content: [
      "💻 Developed a responsive web app using React, Material-UI, and SCSS for a sleek and intuitive user experience.",
      "🧠 Implemented a Flask backend to parse and process PDFs—performing text extraction, chunking, tokenization, and embedding content into a VectorDB.",
      "🤖 Integrated GPT-3 APIs to generate contextual summaries, answer user questions, and deliver on-demand explanations.",
      "📝 Designed an intelligent quiz & flashcard system with dynamic difficulty adjustment and adaptive scoring to personalize learning.",
      "🎙️ Added voice assistant features to enhance accessibility and support inclusive learning for diverse users."
    ],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python"],
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["OpenAI"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["React.JS", "Flask"],
      },
      {
        title: "Databases",
        type: "database",
        skills: ["ChromaDB"],
      }
    ],
    image: ["18Nj48OkRIsaNb2z814WyXDmzWexclCjE", "1E7HsdVFc4QxDaZijANNz8gWxPpMDAx6C","1pbh0iwIp_pTpH84ccBvpDQuP_g0RYkq2", "1erWyoTCj9SZ4vEU-PlLLu2f6wOlA4dmj"],
  },
] as const;

export const skillsData: SkillTypeItem[] = [
  {
    title: "Programming Languages",
    type: "programming language",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "PHP", "DART"],
  },
  {
    title: "Databases",
    type: "database",
    skills: ["SQL", "MongoDB", "PostgreSQL", "Redis", "ChromaDB", "FAISS", "Pinecone"],
  },
  {
    title: "Machine Learning/AI",
    type: "mlai",
    skills: ["Tensorflow", "PyTorch", "DeepSpeed", "CUDA", "LangChain", "LangGraph", "numpy", "Scikit-Learn", "OpenCV", "Pandas", "spaCy", "transformers", "OpenAI"],
  },
  {
    title: "Frameworks",
    type: "framework",
    skills: ["Git", "Hadoop", "Tableau", "Airflow", "Spark"],
  },
  {
    title: "Web Development",
    type: "webdev",
    skills: ["React.JS", "Next.JS", "Node.JS","HTML", "CSS", "Angular.JS", "Vue.JS", "Django", "Flask", "Tailwind", "Ionic", "Flutter", "REST APIs"],
  },
  {
    title: "Cloud Technologies",
    type: "cloud",
    skills: ["Docker", "Google Cloud Platform", "Kubernetes", "BigQuery"],
  },
  {
    title: "Softwares & Tools",
    type: "software",
    skills: ["Unity", "Android Studios"],
  },
] as const;


export const skillIconMap: {[key: string]: any} = {
  // Broader Skills
  "programming language": React.createElement(Programming),
  "database": React.createElement(FaDatabase),
  "mlai": React.createElement(AIML),
  "framework": React.createElement(SiFramework),
  "cloud": React.createElement(TbCloudCode),
  "webdev": React.createElement(FaCode),
  "software": React.createElement(FaLaptopCode),
  // Programming Languages
  "python": React.createElement(FaPython),
  "javascript": React.createElement(IoLogoJavascript),
  "typescript": React.createElement(SiTypescript),
  "java": React.createElement(FaJava),
  "c#": React.createElement(TbBrandCSharp),
  "c": React.createElement(FaC),
  "c++": React.createElement(SiCplusplus),
  "php": React.createElement(FaPhp),
  "dart": React.createElement(SiDart),
  // Databases
  "postgresql": React.createElement(SiPostgresql),
  "mongodb": React.createElement(SiMongodb),
  "sql": React.createElement(TbSql),
  "redis": React.createElement(DiRedis),
  "pinecone": React.createElement(Pinecone),
  "faiss": React.createElement(FaMeta),
  // Web Development
  "html": React.createElement(FaHtml5),
  "css": React.createElement(DiCss3),
  "react.js": React.createElement(FaReact),
  "next.js": React.createElement(RiNextjsLine),
  "node.js": React.createElement(FaNodeJs),
  "vue.js": React.createElement(FaVuejs),
  "angular.js": React.createElement(FaAngular),
  "react native": React.createElement(TbBrandReactNative),
  "django": React.createElement(SiDjango),
  "flask": React.createElement(SiFlask),
  "rest api": React.createElement(LuArrowRightLeft),
  "tailwind": React.createElement(RiTailwindCssFill),
  "ionic": React.createElement(SiIonic),
  "flutter": React.createElement(SiFlutter),
  "bootstrap": React.createElement(FaBootstrap),
  // Machine Learning/AI
  "pytorch": React.createElement(SiPytorch),
  "tensorflow": React.createElement(SiTensorflow),
  "langchain": React.createElement(SiLangchain),
  "langgraph": React.createElement(SiLangchain),
  "deepspeed": React.createElement(DeepSpeed),
  "numpy": React.createElement(SiNumpy),
  "scikit-learn": React.createElement(SiScikitlearn),
  "pandas": React.createElement(SiPandas),
  "cuda": React.createElement(SiNvidia),
  "opencv": React.createElement(SiOpencv),
  "spacy": React.createElement(SiSpacy),
  "transformers": React.createElement(SiHuggingface),
  "openai": React.createElement(SiOpenai),
  // Frameworks
  "git": React.createElement(FaGitAlt),
  "hadoop": React.createElement(SiApachehadoop),
  "tableau": React.createElement(SiTableau),
  "airflow": React.createElement(SiApacheairflow),
  "spark": React.createElement(SiApachespark),
  // Cloud
  "google cloud platform": React.createElement(SiGooglecloud),
  "kubernetes": React.createElement(SiKubernetes),
  "bigquery": React.createElement(SiGooglebigquery),
  "docker": React.createElement(FaDocker),
  "aws": React.createElement(FaAws),
  // Softwares
  "unity": React.createElement(FaUnity),
  "android studios": React.createElement(SiAndroidstudio),
  "figma": React.createElement(FaFigma),
}

export const iconMap: {[key: string]: any} = {
  'github': React.createElement(FaGithub),
  'linkedin': React.createElement(FaLinkedin),
  'twitter': React.createElement(FaXTwitter)
}

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
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tatke-anish/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Nerdyappa",
    },
  ],
} as const;