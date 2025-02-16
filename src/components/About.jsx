import React from 'react'
import aboutImg from '../assets/tushar-1.jpg';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> 🪁About
         <span className='text-neutral-500'> Me.☀️
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-5 max-w-xl py-7 font-medium '>
                        Hello! I’m Tushar Choudhari, a Computer Science student with expertise in MERN stack development, passionate about building scalable, responsive web applications. I have hands-on experience with React.js, Node.js, Express.js, and MongoDB, along with proficiency in RESTful APIs, cloud services (Azure, Firebase), and Agile methodologies.
                        <br></br>
                        <br></br>
                        I have strong expertise in frontend development, specializing in HTML, CSS, Tailwind CSS, and React.js. My experience includes building responsive, user-friendly web applications with modern UI frameworks, ensuring seamless user experiences. I leverage React.js to develop dynamic and interactive components, while Tailwind CSS helps me create scalable and maintainable designs with minimal effort. My knowledge of CSS and responsive design principles enables me to craft web applications that work flawlessly across various devices and screen sizes.

On the backend, I work with Node.js and Express.js to develop scalable and efficient server-side applications. I have experience handling database management using SQL and MongoDB, ensuring secure and optimized data storage and retrieval. Additionally, I utilize cloud platforms like Azure (Basic), Firebase, and Vercel for hosting and deployment, ensuring smooth application performance. My proficiency in Git/GitHub helps me maintain version control and collaborate effectively with teams. Moreover, I use tools like Visual Studio Code, Figma, and Canva to streamline development, design prototypes, and create engaging UI/UX layouts.
                        <br></br>
                        <br></br>
                        During my internship at Revedor India (March 2023 – August 2023), I developed a responsive web platform that significantly improved user engagement by 30%. By optimizing website performance, I successfully reduced page load time by 25%, enhancing the overall user experience. Additionally, I collaborated with a team to streamline development processes, increasing project delivery speed by 20%.
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  