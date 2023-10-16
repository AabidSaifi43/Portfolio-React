import React from 'react';
import Image from '../assets/avatar3.png';
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Aabid <span>Saifi</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg-text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'FullStack Developer',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>All set to begin my journey in the exciting world of website creation. I've got a solid grasp of HTML, CSS, and JavaScript, and i have sort knowledge of Backend too. And I absolutely love putting them together to make websites look cool and work smoothly.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href='#contact'><button className='btn btn-lg'>Contact me</button></a>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.youtube.com/@ASCoder143' target='blank_' className='hover:text-red-600 transition-all duration-600'>
                <FaYoutube />
              </a>
              <a href='https://github.com/AabidSaifi43' target='blank_' className='hover:text-gray-500 transition-all duration-600'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/aabid-saifi-958a50208/' target='blank_' className='hover:text-blue-500 transition-all duration-600'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/ascoder_143/?igshid=MzRlODBiNWFlZA%3D%3D' target='blank_' className='hover:text-pink-600 transition-all duration-600'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)}
            initial="hidden" whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Banner;
