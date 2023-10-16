import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/work2.png';
import Img2 from '../assets/work3.png';
import Img3 from '../assets/work1.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>My latest <br /> Work.</h2>
              <p className='max-w-l mb-16'>Welcome to my portfolio! Here, you can see the cool stuff I've made in web development. These projects show how much I love building websites that are easy to use. Let me show you some of the awesome things I've done:</p>
              <a href='#contact'><button className='btn btn-sm'>Contact Me</button></a>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              <div className='-bottom-full absolute left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Website</span>
              </div>
              <div className='-bottom-full absolute left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Web Store</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              <div className='-bottom-full absolute left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Website</span>
              </div>
              <div className='-bottom-full absolute left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>E-commerce Website</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              <div className='-bottom-full absolute left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Website</span>
              </div>
              <div className='-bottom-full absolute left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Portfolio Website</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
