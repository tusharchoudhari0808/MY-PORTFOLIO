import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        🍃 Education.🎐
      </motion.h1>

      {EDUCATION.map((education, index) => (
        <div key={education.institution + education.degree} className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className='w-full lg:w-1/4'
          >
            <p className='mb-2 text-sm text-neutral-400'>{education.duration}</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className='w-full max-w-xl lg:w-3/4'
          >
            <h4 className='mb-2 font-semibold'>{education.degree}</h4>
            <h6 className='mb-2 font-semibold text-sm'>{education.institution}</h6>
            <p className='mb-4 text-neutral-400 text-justify'>{education.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Education;
