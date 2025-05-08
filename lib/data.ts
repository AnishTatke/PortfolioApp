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
  SiStreamlit,
  SiFastapi
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
  // AI-Powered Historenal Layer Computation
  {
    title: "AI-Powered Historenal Layer Computation for Transplant Assessment",
    links: [
      {
        "name": "Github",
        "url": "https://github.com/SarderLab/IntimalThickness",
        "icon": React.createElement(FaGithub)
      },
    ],
    description: "Developed a deep learning pipeline for segmenting kidney biopsy images and extracting diagnostic metrics to assist transplant decision-making.",
    content: [
      "🤝 Collaborated with cross-university medical teams to manage and preprocess a diverse dataset of kidney biopsy images as part of a funded research initiative in transplant diagnostics.",
      "🧠 Trained an Attention-UNet segmentation model using custom loss functions and robust model selection strategies, achieving a Dice score of 69.4% and classification accuracy of 92.1%.",
      "🖼️ Engineered a post-processing pipeline combining computer vision techniques and morphological operations to calculate arterial layer thickness along radial axes.",
      "📏 Enabled granular, quantitative analysis of arterial structures—providing pathologists with AI-assisted metrics to improve transplant evaluation.",
      "🔬 Supported downstream clinical research by converting complex segmentation outputs into interpretable, high-impact diagnostic features."
    ],
    skill: [
      {
        title: "Programming Languages",
        type: "programming language",
        skills: ["Python"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["streamlit"]
      },
      {
        title: "Machine Learning/AI",
        type: "mlai",
        skills: ["PyTorch", "CUDA", "OpenCV", "numpy", "Scikit-Learn",  "Pandas"],
      },
      {
        title: "Frameworks",
        type: "framework",
        skills: ["Docker", "Git"],
      },
    ],
    image: ["1bo5gioHEC4ddrfRbRgXzyZX23SG26suS", "1cROjqsmfaQZLp7HvwIpFEJ1J3q8SUytH", "174auQaXDxwfoPSMRP8Zl26J_s_dzhvlE", "1vO0cdIdjHhKRlw8bloF_8IBw47WpffXb", "1OWGyQZu6WXOyar1Q0pH2se5pcIUX3XbJ"],
    // https://drive.google.com/file/d/1bo5gioHEC4ddrfRbRgXzyZX23SG26suS/view?usp=sharing
    // https://drive.google.com/file/d/1cROjqsmfaQZLp7HvwIpFEJ1J3q8SUytH/view?usp=sharing
    // https://drive.google.com/file/d/174auQaXDxwfoPSMRP8Zl26J_s_dzhvlE/view?usp=sharing
    // https://drive.google.com/file/d/1vO0cdIdjHhKRlw8bloF_8IBw47WpffXb/view?usp=sharing
    // https://drive.google.com/file/d/1OWGyQZu6WXOyar1Q0pH2se5pcIUX3XbJ/view?usp=sharing
  },
  // Conversational RAG Chatbot for Resume QA
  {
    title: "Conversational RAG Chatbot for Resume QA",
    links: [
      {
        "name": "Github",
        "url": "",
        "icon": React.createElement(FaGithub)
      },
    ],
    description: "Built an AI-powered assistant capable of answering recruiter-style questions by leveraging resume data through retrieval-augmented generation (RAG).",
    content: [
      "🧠 Designed a personalized, resume-aware chatbot by integrating large language models (LLMs) with vector-based retrieval for multi-turn, context-rich conversations.",
      "🛠️ Implemented an NLP pipeline to parse, chunk, and embed structured/unstructured resume content into a vector database for efficient semantic search.",
      "⚡ Achieved low-latency retrieval and real-time response generation using FAISS for indexing and OpenAI’s LLMs for generation.",
      "🧪 Validated across 50+ recruiter-style prompts, attaining 90%+ response relevance and realism through persona conditioning and memory integration.",
      "🤖 Enhanced user experience with context retention and conversational history, simulating a natural Q&A session with a job applicant."
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
        skills: ["OpenAI", "Langchain", "Langgraph"],
      },
      {
        title: "Web Development",
        type: "webdev",
        skills: ["FastAPI"],
      },
      {
        title: "Databases",
        type: "database",
        skills: ["Pinecone"],
      }
    ],
    image: ["1jYiM8pgUtyCcRicZL-oAng9pxOoGG8ON", "1CTjJ1Ub1NngPlxFfgaZqGTX-ULWMugjT"],
    // https://drive.google.com/file/d/1jYiM8pgUtyCcRicZL-oAng9pxOoGG8ON/view?usp=sharing
    // https://drive.google.com/file/d/1CTjJ1Ub1NngPlxFfgaZqGTX-ULWMugjT/view?usp=sharing
  },
  // Latent Stable Diffusion
  {
    title: "Latent Stable Diffusion – Pokémon Image Generator",
    links: [
      {
        "name": "Github",
        "url": "https://github.com/AnishTatke/StableDiffusionAML",
        "icon": React.createElement(FaGithub)
      }
    ],
    description: "Built a generative AI model using diffusion techniques to synthesize high-quality Pokémon-style images from text prompts.",
    content: [
      "🧠 Trained multiple diffusion models—including conditional, unconditional, and latent stable diffusion architectures—on a custom Pokémon image-caption dataset using PyTorch and A100 GPUs.",
      "🔄 Implemented advanced training techniques such as Exponential Moving Average (EMA) and latent space projection to stabilize training and improve image fidelity.",
      "🧪 Experimented with Denoising Diffusion Probabilistic Models (DDPMs) and customized loss functions to refine generation quality.",
      "📊 Conducted extensive evaluations on sample diversity, realism, and text-to-image alignment, leading to visibly improved output across iterations.",
      "🚀 Focused on optimizing training time and memory usage to support high-resolution generation on large-scale GPU infrastructure."
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
        skills: ["PyTorch", "numpy", "Huggingface"],
      },
    ],
    image: ["1dLjk5g8X5004Si39eV794RYpHHY8zDy4", "1UEFIVGgtWNirKtecyepZU3TNOBgikETd"],
    // https://drive.google.com/file/d/1UEFIVGgtWNirKtecyepZU3TNOBgikETd/view?usp=sharing
    // https://drive.google.com/file/d/1dLjk5g8X5004Si39eV794RYpHHY8zDy4/view?usp=sharing
  },
  // QuickQuiz
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
  // BERT Movie Plot Classification
  {
    title: "BERT Movie Plot Classification",
    links: [],
    description: "Built a robust pipeline for classifying movie genres based on plot summaries using modern NLP techniques and deep learning models.",
    content: [
      "🧹 Preprocessed and cleaned Kaggle’s WikiMovie dataset using pandas and spaCy's Rule-based Matcher to normalize text and harmonize inconsistent genre labels.",
      "📊 Performed Exploratory Data Analysis (EDA) to identify genre distributions, class imbalances, and plot length variations across thousands of movie summaries.",
      "🔍 Applied stratified sampling to maintain balanced genre representation across train, validation, and test sets for better generalization.",
      "🧠 Fine-tuned DistilBERT from HuggingFace Transformers on a multiclass genre classification task, leveraging cross-entropy loss for model training.",
      "📈 Achieved 86% accuracy on unseen plot summaries, demonstrating strong generalization in genre prediction."
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
    image: ["1Cm4-SEiR2mcFTvAQ-seRv8yhu57E4b1x", "1u8U5XyL-KpYdX33bDJ-A3lNByWKr_BfQ", "143JEQe3jXUmBuLJS7umj40kxgXwH0M8q", "1QKRpQbNJhPTLyHybIPAvBwMQemZnq2G0", "1jwrGL_LC7bih49cDcG4WoJeVmSBoQsp8"],
    /*
    thumbnail: https://drive.google.com/file/d/1Cm4-SEiR2mcFTvAQ-seRv8yhu57E4b1x/view?usp=sharing
    genre_distribution: https://drive.google.com/file/d/1u8U5XyL-KpYdX33bDJ-A3lNByWKr_BfQ/view?usp=sharing
    wordcloud: https://drive.google.com/file/d/143JEQe3jXUmBuLJS7umj40kxgXwH0M8q/view?usp=sharing
    plot_lengths: https://drive.google.com/file/d/1QKRpQbNJhPTLyHybIPAvBwMQemZnq2G0/view?usp=sharing
    harmonized_genres: https://drive.google.com/file/d/1jwrGL_LC7bih49cDcG4WoJeVmSBoQsp8/view?usp=sharing
    */
  },
  // Prog Rock vs World
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
  // Eenth Pathhar
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
      "EenthPatthar: A full-stack web application to streamline property transactions by enabling seamless interactions between buyers and sellers.",
    content: [
      "🎨 Designed high-fidelity UI mockups using Figma, focusing on intuitive navigation and a clean layout tailored for commercial real estate listings.",
      "💻 Implemented the frontend using React-Bootstrap and Material UI, ensuring responsive design and smooth user experience across devices.",
      "🔧 Built a scalable backend with Node.js and Express, exposing RESTful APIs for dynamic property data handling.",
      "🔐 Integrated Firebase Authentication for secure user login and role-based access, enhancing platform security.",
      "🗂️ Connected the application to Firestore, enabling real-time data storage and retrieval for listings, transactions, and user profiles."
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
  // Garbage Classification
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
      "Designed and deployed efficient deep learning pipelines for real-time image classification on mobile devices, with a focus on accuracy, speed, and usability.",
    content: [
      "🧠 Trained and evaluated multiple image classification models on curated datasets, integrating image preprocessing techniques that improved accuracy by 10–15%.",
      "📲 Developed a cross-platform mobile application using Flutter SDK, embedding TensorFlow Lite–optimized models for seamless on-device inference.",
      "⚡ Optimized model performance by reducing latency by 30% and decreasing model file size by 45% through quantization and architecture tuning.",
      "📄 Published a research paper in an IEEE journal that benchmarks model performance and explores the trade-offs between accuracy, speed, and deployment feasibility."
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
    image: ["1YOM5Nb1UrxjlQisPKcCGCJ7-wu5d7tMD", "1VNS1H5l6QnAr5i5ztDrZf-TErqVHelI9", "1pPgqB9Fc2WmacCiHUOjjkzy0t02goQ4n", "1yPuReq5v2dOPuuQBDpQstcsEAzAaW-bk"],
    /*
    thumbnail: https://drive.google.com/file/d/1YOM5Nb1UrxjlQisPKcCGCJ7-wu5d7tMD/view?usp=sharing
    application 1: https://drive.google.com/file/d/1VNS1H5l6QnAr5i5ztDrZf-TErqVHelI9/view?usp=sharing
    application 2: https://drive.google.com/file/d/1pPgqB9Fc2WmacCiHUOjjkzy0t02goQ4n/view?usp=sharing
    results: https://drive.google.com/file/d/1yPuReq5v2dOPuuQBDpQstcsEAzAaW-bk/view?usp=sharing
     */
  },
  // Covid 19 Virus Simulation
  {
    title: "Covid 19 Virus Simulation",
    links: [
      {
        "name": "Github",
        "url": "",
        "icon": React.createElement(FaGithub)
      },
    ],
    description: "Designed a visual simulation of virus transmission in a closed environment to study outbreak dynamics and mitigation scenarios.",
    content: [
      "🔬 Developed an epidemic model in Python to simulate the spread of COVID-19 within a bounded population using object-oriented principles.",
      "🎥 Implemented real-time visualization and animation tools to display interactions between individuals and the evolution of infection over time.",
      "⚙️ Defined dynamic class attributes such as infection radius, mortality rate, recovery time, and herd immunity thresholds to simulate real-world variability.",
      "📏 Used proximity-based logic to update the infection status of agents (individuals), enabling realistic transmission based on movement and distance.",
      "📊 Enabled experimentation with various public health scenarios like social distancing and immunity to observe their impact on infection curves."
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
        skills: ["numpy"],
      },
    ],
    image: ["1QpEtL4jZGSQupWA_0nFjqYJZDCpERzce", "1GNkMNkDsAN200-X-wqOcZgsDsNAoZwTt", "1eyzE4GlWoHM4sDLJIMooZWIw5zpzQG_o", "1Jj2cJf0ImS4kxUXnowAkDL39PvcS7GKl"],
    // https://drive.google.com/file/d/1QpEtL4jZGSQupWA_0nFjqYJZDCpERzce/view?usp=sharing
    // https://drive.google.com/file/d/1eyzE4GlWoHM4sDLJIMooZWIw5zpzQG_o/view?usp=sharing
    // https://drive.google.com/file/d/1vok4TJX4eu7l9A75H8R0upQhTUPDZAvG/view?usp=sharing
    // https://drive.google.com/file/d/1Jj2cJf0ImS4kxUXnowAkDL39PvcS7GKl/view?usp=sharing
    // https://drive.google.com/file/d/1GNkMNkDsAN200-X-wqOcZgsDsNAoZwTt/view?usp=sharing
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
  "fastapi": React.createElement(SiFastapi),
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
  "huggingface": React.createElement(SiHuggingface),
  "openai": React.createElement(SiOpenai),
  "streamlit": React.createElement(SiStreamlit),
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