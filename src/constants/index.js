import project1 from "../assets/projects/food.png";
import project2 from "../assets/projects/spoty.png";
import project3 from "../assets/projects/fitness.png";
import project4 from "../assets/projects/login.png";
import project5 from "../assets/projects/project5.png";


export const HERO_CONTENT = `I’m Tushar Choudhari, a passionate MERN stack developer skilled in crafting scalable, responsive, and high-performance web applications. My portfolio showcases my expertise in React.js, Tailwind CSS, Framer Motion, and Vite, highlighting real-world projects that demonstrate my ability to build modern, interactive user experiences. `;

export const ABOUT_TEXT = `Hello! I’m a passionate Computer Science and Engineering graduate from GIET University in Gunupur, Odisha. My journey into programming started in class 10 when I learned C++. This sparked my curiosity about how software works and led me to pursue engineering.

I have a strong foundation in programming languages like Python, C/C++, JavaScript, and PHP. I enjoy web development using frameworks like Django and Flask. I also have experience with machine learning tools and frontend development using HTML/CSS. Additionally, I work with databases like SQL and Firebase.

I’ve gained practical experience as a Software Developer Intern at DePronto Infotech, where I worked on projects for private banks in India. I enjoy solving coding challenges on platforms like LeetCode and HackerRank, where I have solved over 250 problems. I’m always eager to learn and explore new areas in software development.

I also participate in extracurricular activities and hold certifications like AWS Cloud Practitioner Essentials.`;

export const EXPERIENCES = [
  {
    year: "03 2023 To 08 2023",
    role: "Web Development",
    company: "Revedor",
    description: `web development internship at Revedor India, where you're working with HTML, CSS, Bootstrap, and Tailwind CSS. Do you want to add more details about your role, like specific projects, responsibilities, or technologies you're learning?`,
    technologies: ["HTML","CSS","JavaScript", "SQL"],
  }
  // {
  //   year: "Dec 2023 - May 2024",
  //   role: "Software Developer Intern",
  //   company: "DePronto Infotech.",
  //   description: `I've contributed to various projects for major private banks in India, focusing on resolving issues promptly to maintain high client satisfaction. By optimizing code and writing efficient scripts, I improved application performance by up to 30%. I maintain open communication with clients to understand and meet their evolving needs.`,
  //   technologies: ["Javascript","MSSQL","ReactJs", "Zend"],
  // },
  // {
  //   year: "Oct 2022 - Dec 2022",
  //   role: "Salesforce Developer Intern (AICTE Virual Internship)",
  //   company: "Smartbridge",
  //   description: `Completed an eight-week online internship with SmartBridge, in collaboration with AICTE. My tasks included completing modules on the Trailhead platform, where I successfully finished all trails. I earned the Apex Specialist Badge and Process Automation Specialist Super Badge, gaining practical skills in Salesforce CRM through hands-on learning.`,

  //   technologies: ["Salesforce", "Trailshead", "Apex"],
  // },
  // {
  //   year: "May 2022 - June 2022",
  //   role: "Data Analyst Intern",
  //   company: "Lagozon Edtech Private Limited",
  //   description: `Completed a six-week training and internship program where I received training in MySQL, focusing on topics like Joins, relations, and basic commands. I acquired knowledge of Power BI, including various visualizations, and learned about DAX functions and Power Query. I  implemented machine learning algorithms within the Power BI, and successfully presented a project based on these topics.`,

  //   technologies: ["Python", "PowerBI", "ML","SQL"],
  // }

];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering .",
    institution: "Prestige Institute of Engineering Management and Research, Indore.",
    duration: "sep 2022 - June 2025",
    description:
      " My coursework has provided me with a strong foundation in software development, data structures, and modern web technologies, helping me develop problem-solving skills and hands-on experience with real-world projects.s",
  },
  {
    degree: " Diploma in Computer Science and Engineering.",
    institution: "  Dr. B. R. Ambedkar Polytechnic College, Gwalior",
    duration: "June 2020 - May 2022",
    description:
      "This program enhanced my understanding of fundamental programming concepts, database management, and system design, allowing me to build a solid technical background.",
  },
  {
    degree: "12th Commerce",
    institution: " Excellence School Katangi, Balaghat,",
    duration: " May 2019",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Taekwondo, and other extracurriculars, which enriched my learning experience and personal development.",
  },
]; 

export const PROJECTS = [
  {
    title:"Food delivery",
    image: project1,
    description:
    "Developed a food delivery app clone using ReactJS with Hooks, implementing item selection and quantity management for a seamless user experience. Ensured responsive design and efficient state management for smooth functionality..",
    technologies:["React","Vercel","Renderer"],
    github:"https://github.com/tusharchoudhari0808/food-delivery-react-app",
    live:"https://food-delivery-react-app-git-main-tusharchoudhari0808s-projects.vercel.app/"
  },
  {
    title: "spotify-clone",
    image: project2,
    description:
      "Developed a Spotify clone using ReactJS, integrating dynamic UI, music playback, and responsive design for an enhanced user experience. Implemented state management and API handling for smooth functionality.",
    technologies: ["HTML", "CSS", "React js"],
    github : "https://github.com/tusharchoudhari0808/soptify-clone-react-app",
    live : "https://soptify-clone-react-ap-git-1586bc-tusharchoudhari0808s-projects.vercel.app/" ,
  },
  {
    title: "Login-SignUp Page ",
    image: project4,
    description:
      "Developed a MERN stack authentication system with login and signup functionality, using ReactJS, Node.js, Express, and MongoDB. Implemented JWT authentication and secure password hashing for user data protection.",
    technologies: ["HTML", "Telwind CSS", "Reactjs", "NodeJs","ExpressJs","MongoDb"],
    github : "https://github.com/tusharchoudhari0808/-login-signup-mern-app",
    live : "https://login-signup-mern-app-git-main-tusharchoudhari0808s-projects.vercel.app/login" ,
  },
  {
    title: "ONLINE INTEGRATED PLATFORM FOR PROJECTS",
    // image: ,
    description:
      "Developed an online integrated platform for project management using HTML, CSS, Bootstrap, PHP, and MySQL, streamlining collaboration and task tracking. Designed a responsive UI to enhance.",
    technologies: ["HTML", "CSS", "JavaScript","SQl","PHP"],
    github : "https://github.com/tusharchoudhari0808/Minor-project",
    live : "#" ,
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "Tailwind Css", "React",],
  //   github : "",
  //   live : "#" ,
  // },
];

export const CONTACT = {
  address: "indore,India",
  phoneNo: "+91 6260641811",
  email: "tusharchoudhari0808@gmail.com",
};