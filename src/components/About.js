import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Full Stack Website Developer.
            </h3>
            <p className='mb-6'>
            Hello there! My Name Is Aabid Saifi and I'm an Web Developer.<br/> My interest in web development started during my studies, and I've been working on some cool projects to practice and learn.
              I'm a fast learner, pay a lot of attention to small details, and I'm really excited about the chance to bring my creativity and skills to real-world projects. Looking forward to joining a great team, learning more, and making awesome websites.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                    <CountUp start={0} end={2} duration={3}
                    /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                    <CountUp start={0} end={10} duration={3}
                    /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                    <CountUp start={0} end={2} duration={3}
                    /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
             <a href='#contact'><button className='btn btn-lg'>Contact me</button></a>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
};

export default About;
