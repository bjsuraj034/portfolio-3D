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
    reflexIcon,
    hotelIcon,
    watingIcon,
    tictoe,
    todolist,
  

    threejs,
    thirtysix,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud & Deployment Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
  
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Reflex IT Solution",
      icon: reflexIcon, // Replace this with the actual icon variable or import
      iconBg: "#383E56",
      date: "Jan 2022 - July 2022", // Adjust the timeline as per your experience
      points: [
        "Worked on web development projects, focusing on frontend and backend technologies.",
        "Gained hands-on experience in building and deploying web applications.",
        "Collaborated with team members to troubleshoot and debug issues.",
        "Enhanced skills in programming, version control, and documentation.",
      ],
    },
    {
      title: "Social Media Manager",
      company_name: "Hotel Kusum Kohinoor Pvt. Ltd.",
      icon: hotelIcon, // Replace this with the actual icon variable or import
      iconBg: "#E6DEDD",
      date: "July 2023 - Present", // Adjust the timeline as per your experience
      points: [
        "Managed social media platforms to enhance the hotel's online presence.",
        "Created engaging posts and monitored audience engagement.",
        "Analyzed performance metrics and provided recommendations for improvement.",
        "Implemented strategies to increase brand visibility and customer interaction.",
      ],
    },
    {
      title: "Skill Development",
      company_name: "Self-Learning and Practice",
      icon: watingIcon, // Replace this with the actual icon variable or import
      iconBg: "#383E56",
      date: "Ongoing",
      points: [
        "Engaging in daily practice to enhance programming and problem-solving skills.",
        "Learning new technologies and frameworks to stay updated with industry trends.",
        "Building personal projects to improve practical knowledge and application.",
        "Focusing on becoming job-ready by refining technical and soft skills.",
      ],
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "Suraj's web development skills are truly impressive. His recent project left me amazed by its creativity and functionality.",
      name: "Kiran Shrestha",
      designation: "Friend",
      company: "N/A",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      testimonial:
        "Suraj's ability to turn ideas into stunning web projects is remarkable. I’m genuinely amazed by the work he has done.",
      name: "Ganesh Thapa",
      designation: "Friend and Working Partner",
      company: "Hotel Kusum Kohinoor Pvt. Ltd.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      testimonial:
        "Suraj's dedication to web development and his exceptional projects never fail to impress. He is truly a standout student.",
      name: "Professor Smith",
      designation: "Teacher",
      company: "St. Lawrence College",
      image: "https://www.facebook.com/share/1FG7UzF6v4/?mibextid=wwXIfr",
    },
  ];
  
  
  const projects = [
    {
      name: "Tic Toe Game",
      description:
        "A Tictoe game application built using React, allowing users to enjoy a simple yet interactive gaming experience with intuitive UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "..",
          color: "purple-text-gradient",
        },
      ],
      image: tictoe,
      source_code_link: "https://github.com/bjsuraj034/Tictoe-Game",
    },
    {
      name: "Thirty Six Animated Website",
      description:
        "A Thirty Six animated website crafted to deliver visually appealing and dynamic interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "yellow-text-gradient",
        },
      ],
      image: thirtysix,
      source_code_link: "https://github.com/bjsuraj034/thirtysixstudiodemo",
    },
    {
      name: "To-Do List",
      description:
        "A To-Do List application enabling users to organize tasks efficiently, with seamless functionality for adding, updating, and managing daily goals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "localStroage",
          color: "orange-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };