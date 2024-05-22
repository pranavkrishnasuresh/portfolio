export const Bio = {
  name: "Pranavkrishna Suresh",
  roles: [
    "proactive",
    "adaptable",
    "efficient",
    "professional",
    "innovative",
    "team-oriented",
  ],
  description:
    "I'm a Computer Science student at Georgia Tech (Class of 2026) with experience and research in machine learning and software development.",
  github: "https://github.com/pranavkrishnasuresh",
  // resume: "https://www.dropbox.com/scl/fo/i3f8i2gmd6nj8wm9r3ml2/AG4i8fwSkRsM9jhLI3tdeIU?rlkey=hp31i1hhi7cqggncghbi1uamo&dl=0", //updated
  resume: require("./resume.pdf"),
  linkedin: "https://www.linkedin.com/in/pranavkrishnasuresh/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TailwindCSS",
        image:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "C",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://wallpapers.com/images/hd/git-hub-logo-octocat-0cnj7st3a27u7gsc.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "ROS",
        image:
          "https://www.vectorlogo.zone/logos/ros/ros-icon.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Xcode",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png",
      }

    ],
  },
];

export const experiences = [


    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBth42QwX2uZ28bXT7jdorHhwccsNgsfjE6N6NHxWJgw&s",
      role: "Software Engineering Intern, AI R&D",
      company: "VDart - Atlanta, GA",
      date: "May 2024 - Aug 2024",
      desc: "Developing a suite of AI tools leveraging LLM and RAG to increase staffing productivity by 30%. Developed ML model to optimize onsite/offsite worker allocation, achieving 14% department cost savings for clients including DataBricks, Tesla, and Toyota.",
      skills: [
        "Python",
        "ReactJS",
        "SQL",
        "Express",
        "Git"
      ],

    },

    {
      id: 1,
      img: "https://media.licdn.com/dms/image/D4E0BAQE0sB1SSrjWKQ/company-logo_200_200/0/1696794789606?e=1723075200&v=beta&t=GjxK_LpvEq3jNKD2IjITFKZEGHUEZCtVjJvksQbu_Dc",
      role: "Software Engineering Intern",
      company: "Churn - New York City, NY (Remote)",
      date: "Jan 2024 - May 2024",
      desc: "Developed machine learning models to analyze credit card data for optimal benefits recommendations and UI/UX for Churn's iOS app",
      skills: [
        "Python",
        "ReactJS",
        "SQL",
        "Express",
        "Git"
      ],

    },

    {
      id: 2,
      img: require("../images/GT.png"),
      role: "Undergraduate Researcher",
      company: "Georgia Tech - Atlanta, GA",
      date: "Nov 2023 - May 2024",
      desc: "Developed a suite of tools leveraging static and symbolic analysis, fuzzing, and verification methods to mitigate vulnerbilities within smart contracts",
      skills: [
        "Blockchain",
        "LLM",
        "Solidity",
        "Truffle",
        "Slither",
        "Git"
      ],

    },

    {
      id: 3,
      img: "https://seeklogo.com/images/U/university-of-cambridge-logo-E6ED593FBF-seeklogo.com.png",
      role: "Student Researcher",
      company: "University of Cambridge - Cambridge, UK (Remote)",
      date: "Nov 2022 - Jan 2023",
      desc: "Created a machine learning model for Sanskrit Word Segmentation using Natural Language Processing with CNN and RNN frameworks. Achieved 92% validation accuracy.",
      skills: [
        "Python",
        "NLP",
        "Deep Learning",
        "VS Code",
        "Git"
      ],
      //doc: "https://drive.google.com/file/d/1U3nyPkXapuW08n-eUBXvNPAhfVQQsZOM/view?usp=sharing",
  
    },
    {
    id: 4,
    img: require("../images/GT.png"),
    role: "Research Intern",
    company: "Georgia Tech Research Institute - Atlanta, GA",
    date: "June 2022 - July 2022",
    desc: "Worked as the software lead of my research project. My team developed an algorithm to automate the UR3 industrial robotic arm to move stem cell well plates in a clean room setting. We designed a custom universal well plate gripper-mechanism fitted to an arduino. Presented research at Invitational GTRI Conference and the technology is currently implemented at Georgia Tech's Marcus Nanotechnology Research Center. ",
    skills: [
      "Python",
      "C++",
      "ROS",
      "MoveIt",
      "SolidWorks",
      "VS Code",
      "Git"
    ],
    //doc: "https://www.scriptajournal.org/uploads/1/3/9/7/139783056/suresh___automating_robotic_alkerhlgiuheriurhngeiurm_to_move_stem_cell_wall_plates-2.pdf",
  }
];

export const education = [
  {
    id: 0,
    img: require("../images/GT.png"),
    school: "Georgia Institute of Technology",
    date: "Aug 2023 - May 2026",
    Grade: "N/A",
    desc: "Activites and Societies: RoboJackets, Quantum Computing Association, Quantitative Trading",
    degree: "Major: Computer Science (AI + SysArc), Minor: Math",
  },
  {
    id: 1,
    img: require("../images/FSA.png"),
    school: "Fulton Science Academy",
    date: "Aug 2019 - May 2023",
    grade: "104/100",
    desc: "Activites and Societies: FBLA (President), Hack Club (President), Wizards of Wall Street (President), Spanish National Honor Society (President), Scripta and Astronomy Society for Research (Editor-in-Chief), Science Olympiad (Team Member), Student Council (Team Member)",
    degree: "High School Diploma",
  },
];

export const projects = [

  {
    id: 1,
    title: "1Record",
    date: "Mar 2024",
    description:
      "[Cornell Health Hackathon Finalist] Developed a software to utilize LLM's for context extraction from Electronic Health Records to leverage macro patient trends for identifying rare conditions and diseases",
    image: require("../images/1Record.png"),
    tags: [
      "Python",
      "JavaScript",
      "Google Vertex AI",
      "ReactJS",
      "Git",
    ],
    category: "Machine Learning",
    category: "app",
    github: "https://github.com/pranavkrishnasuresh/1Record",
    //webapp: "",
  },

  {
    id: 2,
    title: "QForce",
    date: "Feb 2024",
    description:
      "[MIT Quantum Computing Hackathon Winner] Developed a Quantum Generative Adversarial Network coupled with a classical optimizer to demonstrate that qubits with a high fidelity can be achieved on Noisy Intermediate-Scale Quantum hardware using Quandela's quantum photonic chip",
    image: "https://i.makeagif.com/media/2-07-2017/OuPnV8.gif",
    tags: [
      "Python",
      "Perceval",
      "Qiskit",
      "Git",
    ],
    category: "Machine Learning",
    github: "https://github.com/pranavkrishnasuresh/Photonic-Quantum-GAN",
    //webapp: "",
  },

  {
    id: 3,
    title: "Therapute",
    date: "Feb 2024",
    description:
      "[Google Solution Challenge Global Finalist] Developed a platform for athletes seeking physiotherapy to receive instant detailed feedback on their exercise form with a machine learning model utilizing time-warping and neural radiance fields (NeRF)",
    image: require("../images/Therapute.png"),
    tags: [
      "Python",
      "JavaScript",
      "MediaPipe",
      "Firebase",
      "ReactJS",
      "Flask",
      "Google Cloud",
      "Git"
    ],
    category: "Machine Learning",
    category: "app",
    github: "https://github.com/pranavkrishnasuresh/TheraputeMicrosoft",
    //webapp: "",
  },

  {
    id: 4,
    title: "VigilAI",
    date: "Nov 2023",
    description:
      "[AI ATL Hackathon Winner, Startup Exchange Summit 1st Place] Developed a software leveraging machine learning to identify deviations between police officer actions in bodycam footage and established protocls. VigilAI is currently in talks to be licensed to several police departments",
    image: require("../images/Vigil.png"),
    tags: [
      "Python",
      "JavaScript",
      "NLP",
      "Firebase",
      "ReactJS",
      "Google Cloud",
      "Git"
    ],
    category: "Machine Learning",
    category: "app",
    github: "https://github.com/pranavkrishnasuresh/VigilAI",
    //webapp: "",
  },

  {
    id: 5,
    title: "Diagnosing Alzheimer's Disease with Audio-Based Speech Analysis",
    date: "Jan 2023 - May 2023",
    description:
      "Created a machine learning model to diagnose Alzheimer's disease from spoken audio samples with a spectrogram-based CNN architecture with 87% validation accuracy.",
    image:
      "https://miro.medium.com/v2/resize:fit:960/1*aQCn-ZwykVVtjYKi2U8mPA.gif",
    tags: [
      "Python",
      "CNN",
      "VS Code",
      "Google Colab",
    ],
    category: "Machine Learning",
    github: "https://github.com/pranavkrishnasuresh/alzheimers",
    //webapp: "",
  },

  {
    id: 6,
    title: "Atlas - The College Guide",
    date: "Nov 2022",
    description:
      "iOS app recognized by US Congresswoman Lucy McBath as the winner of the Congressional App Challenge. Developed to assist high school students in the college application process. Personalies information about resources and clubs based on a student's interests.",
    image:
      "https://static.wixstatic.com/media/a3845d_0f9f4954db31466498958691cb9c7059~mv2.png/v1/fill/w_440,h_328,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Internship%20header.png",
    tags: [
      "Xcode",
      "Adobe Illustrator"
    ],
    category: "app",
    github: "https://mcbath.house.gov/2022/12/rep-lucy-mcbath-announces-winners-of-the-2022-congressional-app-challenge",
    //webapp: "",
  },

  {
    id: 8,
    title: "Predicting Carbon Emission Levels",
    date: "June 2021 - July 2021",
    description:
      "Developed a machine learning algorithm to predict global greenhouse gas emissions in Columbia University's Summer Immersion Program. Used environmental indicators from the World Bank Indicators Collection to assess the magnitude of emissions.",
    image:
      "https://www.danielshealth.com/sites/danielshealth.com/files/NEW%20Blog/Blog-Header-CS-GGEmissions.gif",
    tags: ["Python", "R", "Google Colab", "Git", "LaTeX"],
    category: "Machine Learning",
    github: "https://drive.google.com/file/d/1o2gCB4w5qT4xRCb1U4CvwZi17qn80oBR/view?usp=sharing",
    //webapp: "",
  },

  {
    id: 9,
    title: "Detecting Distracted Driving using CNN Image Classification",
    date: "Dec 2020 - Jan 2021",
    description:
      "Developed a machine learning algorithm utilizing transfer learning on the VGG19 from ImageNet to classify distracted driving from data received from driver-facing cameras into 4 categories; using the radio, using the mirror, using a cup to drink, and using a smartphone.",
    image:
      "https://camo.githubusercontent.com/c0be337c0ebd614365900e6909e3dfb16466a21cec6a8a5a343820d4ad41973f/68747470733a2f2f6974737468657265616c64796c2e66696c65732e776f726470726573732e636f6d2f323031362f30362f6f75747075745f646562386f742e6769663f773d31303030",
    tags: [
      "Python",
      "VS Code",
      "Git",
    ],
    category: "Machine Learning",
    github: "https://drive.google.com/file/d/1eacXz69eTMZibnFOWNjYbSwL62p_YZ4d/view?usp=sharing",
    //webapp: "",
  },

 {
    id: 7,
    title: "Diagnosing Viral and Bacterial Pneumonia using CNN Image Classification",
    date: "Oct 2022",
    description:
      "Developed a machine learning algorithm utilizing CNN architecture to classify viral and bacterial Pneumonia using high-specificity chest x-rays. Achieved a 91% validation accuracy, improvement over previous systems.",
    image:
      "https://prod-images-static.radiopaedia.org/images/1371188/0a1f5edc85aa58d5780928cb39b08659c1fc4d6d7c7dce2f8db1d63c7c737234_gallery.jpeg",
    tags: [
      "Python",
      "VS Code",
      "Git",
    ],
    category: "Machine Learning",
    github: "https://drive.google.com/file/d/1oBq_d0_8JhPpZqPHAmcRqJ9-U-hN0x03/view?usp=sharing",
    //webapp: "",
  }
];
