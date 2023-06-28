import {
     fardtube,
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
     artrune,
     dashboard,
     threejs,
     mern,
     express,
     promptu
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
       title: "Full-Stack Developer",
       icon: mern,
     },
     {
       title: "Front-End Developer",
       icon: reactjs,
     },
     {
       title: "Backend Developer",
       icon: nodejs,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
       name: "Node JS",
       icon: nodejs,
     },
     {
      name: "Expressjs",
      icon: express,
    },
     {
       name: "MongoDB",
       icon: mongodb,
     },
   ];
   
   
   const testimonials = [
     {
       testimonial:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
       name: "Sara Lee",
       designation: "CFO",
       company: "Acme Co",
       image: "https://randomuser.me/api/portraits/women/4.jpg",
     },
     {
       testimonial:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
       name: "Chris Brown",
       designation: "COO",
       company: "DEF Corp",
       image: "https://randomuser.me/api/portraits/men/5.jpg",
     },
     {
       testimonial:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
       name: "Lisa Wang",
       designation: "CTO",
       company: "456 Enterprises",
       image: "https://randomuser.me/api/portraits/women/6.jpg",
     },
   ];
   
   const projects = [
     {
       name: "Artrune",
       description:
         "Free AI Image Generator, Made using OpenAI's Image Generator API.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "mongodb",
           color: "green-text-gradient",
         },
         {
          name: "nodejs",
          color: "green-text-gradient",
        },
         {
           name: "tailwind",
           color: "pink-text-gradient",
         },
       ],
       image: artrune,
       source_code_link: "https://github.com/Muhammad-Fardin/artrune",
       deployment_link: "https://artrune.netlify.app/"
      },
     {
       name: "Youtube Clone",
       description:
         "Youtube Clone using Youtube API and Reactjs",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "youtube-api",
           color: "pink-text-gradient",
         },
         {
           name: "tailwind",
           color: "blue-text-gradient",
         },
       ],
       image: fardtube,
       source_code_link: "https://github.com/Muhammad-Fardin/Youtube",
       deployment_link: "https://fardtube.netlify.app"
      },
     {
       name: "Admin Dashboard",
       description:
         "Dashboard with data visualisation and prediction for future revenue using ML",
       tags: [
         {
           name: "MERN",
           color: "green-text-gradient",
         },
         {
           name: "Material UI",
           color: "blue-text-gradient",
         },
         {
           name: "Regression",
           color: "pink-text-gradient",
         },
         {
          name: "Typescript",
          color: "blue-text-gradient",
        },
       ],
       image: dashboard,
       source_code_link: "https://github.com/Muhammad-Fardin/Dashboard",
       deployment_link: "https://finboard.netlify.app"
      },
      {
        name: "Promptu",
        description:
          "AI Prompt Sharing Platform",
        tags: [
          {
            name: "Full-Stack",
            color: "green-text-gradient",
          },
          {
            name: "NextJs",
            color: "blue-text-gradient",
          },
          {
            name: "TailwindCss",
            color: "blue-text-gradient",
          },
          {
           name: "Typescript",
           color: "blue-text-gradient",
         },
        ],
        image: promptu,
        source_code_link: "https://github.com/Muhammad-Fardin/Promptu",
        deployment_link: "https://promptu.vercel.app"
       },
   ];
   
   export { services, technologies, testimonials, projects };