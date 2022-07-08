import React, { useState } from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Typewriter from "typewriter-effect";
import { HiOutlineCursorClick } from 'react-icons/hi';
import { FaHistory } from 'react-icons/fa';
import { Button } from './../Button';

function Hero() {
  return (
    <>
      <div id='hero-section' className='hero--section h-screen w-full mt-[-64px] px-10'>
        <div className='max-w-[1240px] h-full mx-auto text-center flex flex-col justify-center'>
          <p className='md:text-5xl sm:text-4xl text-3xl font-bold p-2 mt-[32px] text--light'>Hello, I'm</p>
          <h1 className='md:text-[85px] sm:text-6xl text-5xl font-bold md:py-6 py-3 text--primary'>JOHN MICHAEL GADOT</h1>
          <div className='flex justify-center items-center text--light'>
            <p className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>A </p>
            <p className='md:text-5xl sm:text-4xl text-2xl font-bold pl-2'>
              <Typewriter
              options={{
                strings: ['Creative Freelancer', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,
              }}
              />
            </p>
          </div>
          <div className='mx-auto md:my-8 my-4 flex flex-row flex-wrap justify-center items-center'>
            {
              <Link to='contact-section' spy={true} smooth={true} offset={-64} duration={500}>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  buttonColor='btn--primary'
                  buttonHover='btn--hover--dark'
                  text='HIRE ME'
                  type='submit'
                  path='./'
                  icon={<HiOutlineCursorClick size={25} />}
                >
                </Button>
              </Link>
            }

            {
              <Link to='project-section' spy={true} smooth={true} offset={-64} duration={500}>
                <Button
                  buttonStyle='btn--solid'
                  buttonSize='btn--large'
                  buttonColor='btn--dark'
                  buttonHover='btn--hover--primary'
                  text='SEE MY PAST WORK'
                  type='submit'
                  path='./'
                  icon={<FaHistory size={25} />}
                >
                </Button>
              </Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero