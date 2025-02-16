import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const currentYear = new Date().getFullYear();
    return (
        <footer className='pt-14 pb-14'>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="container mx-auto text-center"
            >
                <p className="text-white text-xl mb-4">
                    Developed with <motion.span 
                        className="text-red-500" 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}>
                        ❤
                    </motion.span> by Tushar
                </p>
                
                <div className="flex justify-center space-x-6 text-white mb-6">
                <a href="https://www.linkedin.com/in/tushar-choudhari-72650621a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaLinkedin>
              </a>
              <a href="https://leetcode.com/u/Tusharchoudhari0808/" target="_blank" rel="noopener noreferrer"> 
                <LiaExternalLinkAltSolid className='text-white transition ease-in-out delay-100 hover:-translate-y-1 ' size={24}></LiaExternalLinkAltSolid>
                </a>
                <a href="_" target="_blank" rel="noopener noreferrer"> 
                <FaInstagram className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaInstagram></a>
                <a href="https://github.com/tusharchoudhari0808" target="_blank" rel="noopener noreferrer"> 
                <FaGithub className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaGithub> </a>
                <a href="" target="_blank" rel="noopener noreferrer"> 
                <BsTwitterX className='text-white transition ease-in-out delay-100 hover:-translate-y-2' size={24}></BsTwitterX> </a>
                </div>

                <button 
                    onClick={scrollToTop} 
                    className="text-sm text-blue-500 underline mb-4">
                    Back to Top
                </button>

                <p className="text-white text-sm">
                    © {currentYear} Tushar Choudhari. All Rights Reserved.
                </p>
            </motion.div>
        </footer>
    );
}

export default Footer;
