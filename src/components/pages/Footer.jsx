import React from 'react';
import './Footer.css';
import { FaRegCopyright } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function Footer() {
    return (
        <div className='footer--section w-full h-full px-10 py-24'>
            <div className='max-w-[1240px] h-full mx-auto'>
                <div className='w-full flex flex-row flex-wrap justify-center items-center'>
                    <div className='footer--logo py-3'>
                        <p className='text--light flex flex-row justify-center items-center'>
                            <h1 className='text-5xl font-bold text--primary cursor-pointer'>JN<span className='text--light'>ML</span></h1>
                        </p>
                    </div>
                    <div className='footer--copyright py-3'>
                        <p className='text--light flex flex-row justify-center items-center'>
                            <FaRegCopyright size={20} />
                            <span className='text-md font-bold uppercase ml-2'>Developed By John Michael Gadot</span>
                        </p>
                    </div>
                    <div className='footer--social py-3'>
                        <p className='text--light flex flex-row justify-center items-center'>
                            <span className='mx-4'><BsGithub size={25} /></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer