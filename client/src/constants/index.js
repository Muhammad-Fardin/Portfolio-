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
     meta,
     starbucks,
     tesla,
     shopify,
     artrune,
     jobit,
     tripguide,
     threejs,
     mern,
     express
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
    //  {
    //    name: "TypeScript",
    //    icon: typescript,
    //  },
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


    //  {
    //    name: "figma",
    //    icon: figma,
    //  },
    //  {
    //    name: "docker",
    //    icon: docker,
    //  },
   ];
   
   const experiences = [
  //    {
  //      title: "React.js Developer",
  //      company_name: "Starbucks",
  //      icon: starbucks,
  //      iconBg: "#383E56",
  //      date: "March 2020 - April 2021",
  //      points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //      ],
  //    },
  //    {
  //      title: "React Native Developer",
  //      company_name: "Tesla",
  //      icon: tesla,
  //      iconBg: "#E6DEDD",
  //      date: "Jan 2021 - Feb 2022",
  //      points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //      ],
  //    },
  //    {
  //      title: "Web Developer",
  //      company_name: "Shopify",
  //      icon: shopify,
  //      iconBg: "#383E56",
  //      date: "Jan 2022 - Jan 2023",
  //      points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //      ],
  //    },
  //    {
  //      title: "Full stack Developer",
  //      company_name: "Meta",
  //      icon: meta,
  //      iconBg: "#E6DEDD",
  //      date: "Jan 2023 - Present",
  //      points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //      ],
  //    },
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
       name: "Job IT",
       description:
         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "restapi",
           color: "green-text-gradient",
         },
         {
           name: "scss",
           color: "pink-text-gradient",
         },
       ],
       image: jobit,
       source_code_link: "https://github.com/",
       deployment_link: ""
      },
     {
       name: "Trip Guide",
       description:
         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
       tags: [
         {
           name: "nextjs",
           color: "blue-text-gradient",
         },
         {
           name: "supabase",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
       image: tripguide,
       source_code_link: "https://github.com/",
       deployment_link: ""
      },
   ];
   
   export { services, technologies, experiences, testimonials, projects };