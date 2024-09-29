import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  oip,
  SSN,
  ACM,
  STR,
  bbb,
  Fig,
  SRM,
  D4,
  Geo,
  Race,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "WEB DEVELOPER",
    icon: web,
  },
  {
    title: "XR DEVELOPER",
    icon: mobile,
  },
  {
    title: "UI/UX EXPERT",
    icon: backend,
  },
  {
    title: "ANDROID DEVELOPER",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: " AR/VR and Game Development Deputy Team Lead ",
    companyName: "SSN Coding Club",
    icon: SSN,
    iconBg: "#383E56",
    date: "July 2024 - Sept 2024",
    points: [
      "Coordinated and led a team of developers in creating immersive AR/VR gaming environments, enhancing player engagement and experience.",
      "Utilized cutting-edge technology, including motion tracking, 3D modeling, and spatial audio, to develop highly interactive and realistic gaming experiences.",
      "Organized workshops and training sessions to mentor team members and improve their skills in AR/VR and game development technologies.",
      "Managed project timelines and ensured the successful delivery of high-quality AR/VR gaming projects.",
      "Fostered collaboration and innovation within the team, encouraging the exploration of new technologies and creative solutions in AR/VR game development."
    ]
,    
  },
  {
    title: " Alumni Affairs ",
    companyName: "ACM",
    icon: ACM,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Feb 2025",
    points: [
      "Facilitated connections between current students and alumni, providing valuable networking opportunities that led to internships, jobs, and mentorship. Organized and managed events, including networking sessions and career talks, to bridge the gap between students and alumni.",
      "Leveraged alumni expertise to provide career advice, industry insights, and guidance, helping students navigate their career paths. Coordinated mentorship programs, pairing students with alumni mentors to support their professional development."
    ],
    
  },
  {
    title: " SWE Intern ",
    companyName: "Niti.ai",
    icon:oip,
    iconBg: "#FFFFF0",
    date: "Sep 2023 - Sep 2023",
    points: [
      "As a Software Engineering Intern at Niti.ai, a fintech low-code platform builder, I gained hands-on experience in developing innovative and scalable applications. During my tenure, I worked on the Loop platform to create interactive and user-friendly solutions, including a slider quiz designed to boost user engagement.",
      "My role involved utilizing TypeScript and React to develop and implement frontend features, collaborating with cross-functional teams to enhance the user experience. This internship honed my skills in modern web development, user interface design, and provided me with a solid understanding of the fintech industry and low-code development environments.",
    
    ],
  },
  {
    title: "XR Developer",
    companyName: "Strategy Fox",
    icon: STR,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "Created a fully functional Web XR Commerce platform, significantly increasing user engagement by 66%. Led the team to build and deploy the platform, ensuring seamless integration of extended reality features to enhance the online shopping experience.",
      "Team Lead for client projects, including Doodad and House of Sauce, recognized as the best performer for consistently delivering high-quality results on time. Successfully managed project timelines, coordinated with cross-functional teams, and ensured client satisfaction.",
      "Implemented Garment Transfer Technology using images, instead of 3D models, for AR Try-On experiences, optimizing performance and user experience. This innovative approach allowed users to visualize apparel in augmented reality, enhancing the online shopping experience with more realistic and accessible try-on options.",
    ]
    ,
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I believed it was impossible to create an XR experience that matched the beauty of our company, but Rohith proved me wrong with his incredible talent and creativity elevated our project to new heights.",
    name: "Pradeep",
    designation: "CEO",
    company: "Strategy Fox",
    image: "https://media.licdn.com/dms/image/v2/D5635AQEBE4LZ3x14QQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726740374921?e=1728244800&v=beta&t=0JrN9LBfPKkM9GqnrZMgLSsFStd222z5meJHkADgylI",
  },
  {
    testimonial:
      "I've never met a student who truly cares about their college success like Rohith does. His dedication and passion for learning are truly inspiring, and he consistently goes above and beyond to help his peers succeed.",
    name: "Angel Deborah",
    designation: "Professor",
    company: "SSNCE",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGLB3BeALRR9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726406275520?e=1733356800&v=beta&t=paJWqsUZYbCquZ_3pOSQCKTUfCJapce1Fy1-zastsro",
  },
  {
    "testimonial": "Rohith's innovative thinking and technical skills have transformed our projects at Niti.ai. His ability to quickly grasp complex concepts and apply them effectively makes him an invaluable asset to our team.",
    "name": "Aravind",
    "designation": "CTO",
    "company": "Niti.ai",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQE9PPVcXJ75mA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725621670010?e=1733356800&v=beta&t=HWRga64jIuSuYdhNHoC0QFtC--9yTYGZBDeQpEJEtoU"  // Replace with the actual image URL
  }
,  
  
];

const projects: TProject[] = [
  {
    name: "Faszen-Conversational Interface with AR Enhancement",
     
    description: 
      "Build for Bharat is an award-winning mobile application developed during an international hackathon at Google Office Bangalore. Built using Flutter and fully deployed on Google Cloud, it utilizes Firestore and SQL for efficient database management. The app features a personalized assistant powered by Dialogflow and enhanced with Gemini technology, delivering tailored user interactions.",
      
    
    
    tags: [
      {
        name: "Flutter",
      
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: bbb,
    sourceCodeLink: "https://github.com/Rohith2825",
  },
  {
    name: "Mithran - An Agritech Solution  built for small-scale farmers",
    description:
      "Mithran utilizes polygon mapping and satellite data to create virtual fields, providing personalized insights that enhance farming practices. Recognized at the Grand Finale in New Delhi, Mithran features AI-based plant detection in collaboration with German AgriTech Plantix, and offers a digital twin with 3D and AR support for better crop management.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      
    ],
    image: Fig,
    sourceCodeLink: "https://github.com/Rohith2825",
  },
  {
    name: "AR Tour for SSN College of Engineering",

    description:
      "AR Tour for SSN College of Engineering utilizes geospatial augmented reality and LiDAR technology to create immersive campus experiences. By leveraging Google’s AR Core, it delivers personalized journeys with accurate object detection, enhancing navigation and exploration. The project involved creating 3D models in Blender and developing experiences in Unity and Adobe Aero, showcasing the potential of AR.",
    tags: [
      {
        name: "Adobe Aero",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },

     
      
    ],
    image: SRM,
    sourceCodeLink: "https://github.com/Rohith2825",
  },
  {
    name: "CurveTopia - Advanced ML Application ",

    description:
      "Secured Top 5 percentile in Adobe GenSolve. Employed various machine learning techniques including DeepFill , Loy-Eklundh algorithm.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      
    ],
    image:D4,
    sourceCodeLink: "https://github.com/Rohith2825",
  },

  {
    name: "VR Gaze-Based GeoGuessor",

    description:
      " Developed for Google Cardboard , focusing on neurodevelopmental disorders with Dr. Aarthi's guidance . Tested efficiency in practice to observe its effects on  individuals  with  neurodevelopmental disorders and also infants  ",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },

      {
        name: "Google Cardboard",
        color: "green-text-gradient",
      },
      
    ],
    image:Geo,
    sourceCodeLink: "https://github.com/Rohith2825",
  },

  {
    name: "IOT-Based Remote Kill Switch via Blynk Cloud",

    description:
      "Innovation and Go Green Winner at AIMS National Kart Racing Championship, Developed a remote kill switch with enhanced proximity based security control system .",
    tags: [
      {
        name: "Blynk Cloud",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
      
    ],
    image:Race,
    sourceCodeLink: "https://github.com/Rohith2825",
  },

  
];

export { services, technologies, experiences, testimonials, projects };
