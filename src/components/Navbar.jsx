import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navItems = [
  //   { label: 'Home', to: '/' },
  //   { label: 'About Me', to: '/about' },
  //   { label: 'Education', to: '/education' },
  //   { label: 'Tech', to: '/technologies' },
  //   { label: 'Experience', to: '/experience' },
  //   { label: 'Projects', to: '/projects' },
  //   { label: 'Contact', to: '/contact' }
  // ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="w-full">
      {/* Main Navigation */}
      <nav className='w-full flex items-center justify-between py-5 bg-black bg-opacity-95 border-b-2 outline-4 border-gray-500 backdrop-blur-sm'>
        <div className='flex flex-shrink-0 items-center'>
          <h2 className='text-white mx-1 text-2xl font-bold'>Tushar Choudhari</h2>
        </div>

        {/* Mobile Menu Toggle */}
        {/* <div className='md:hidden'>
          <button 
            onClick={toggleMenu} 
            className='text-white focus:outline-none'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> */}

        {/* Desktop Navigation */}
        {/* <div className='hidden md:flex space-x-4 items-center'>
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.to} 
              className='text-neutral-300 hover:text-white transition-colors'
            >
              {item.label}
            </Link>
          ))}
        </div> */}

        {/* Mobile Menu Overlay */}
        {/* {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-black/90 md:hidden'>
            <div className='flex flex-col items-center space-y-4 py-6'>
              {navItems.map((item, index) => (
                <Link
                  key={index} 
                  to={item.to} 
                  className='text-neutral-300 hover:text-white'
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </nav>

      {/* Separate Animated Border Image */}
      {/* <motion.div 
        className="w-full h-20"
        style={{
          backgroundImage: `url('/src/assets/UnderlineXmas.png')`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center'
        }}
        animate={{
          y: [0, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
    </div>
  );
};

export default Navbar;