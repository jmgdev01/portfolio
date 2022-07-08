import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiOutlineArrowUp } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const closeMobileMenu = () => {
        setNav(false);
    }

    const [navBar, setNavBar] = useState(false);
    
    const changeNavBackground = () => {
        if (window.scrollY >= 64) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeNavBackground);

    return (
        <>
            <nav className={`${navBar ? 'nav--con active' : 'nav--con'} w-full sticky top-0 `}>
                <div className='flex flex-col justify-start items-start max-w-[1240px] mx-auto px-5 md:flex-row h-16 md:justify-between md:items-center'>
                    <div className='w-full flex flex-row justify-between items-center h-16 px-5 md:px-0'>
                        <Link to='hero-section' spy={true} smooth={true} offset={-64} duration={500} onClick={closeMobileMenu}>
                            <h1 className='text-3xl font-bold text--primary cursor-pointer'>JN<span className='text--light'>ML</span></h1>
                        </Link>
                        <div onClick={handleNav} className='block md:hidden cursor-pointer text--gray'>
                            {!nav ? <HiMenu size={20} /> : ''}
                        </div>
                    </div>
                    <div className={`nav md:block md:static md:top-0 md:ml-[1.25rem] md:rounded-none md:bg-transparent w-full ${!nav ? 'hidden' : 'block fixed top-16 ml-[-1.25rem]'}`}>
                        <ul className='nav--menu flex flex-row flex-wrap justify-center rounded-lg text--gray 
                        md:flex-row md:justify-end md:flex-nowrap md:bg-transparent
                        md:mx-0 md:mt-0 md:p-0
                        mx-14 mt-10 p-5'>
                            <div className='nav--header block md:hidden w-full pb-5 mb-5 border-b-2'>
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <div className='flex flex-row justify-start items-center w-full'>
                                        <label className='text-xl font-bold text--primary'>WHERE TO GO?</label>
                                    </div>
                                    <div onClick={handleNav} className='cursor-pointer text--gray'>{!nav ? '' : <HiX size={20} />}</div>
                                </div>
                            </div>
                            <div className='hide md:px-32 md:block'></div>
                            <li className='nav--item md:w-full sm:w-1/2 w-full md:py-0 md:px-2 py-2 px-2'>
                                <Link to='about-section' spy={true} smooth={true} offset={-64} duration={500}>
                                    <div className='w-full text-center md:py-5 md:px-5 py-1 font-medium' onClick={closeMobileMenu}>About</div>
                                </Link>
                            </li>
                            <li className='nav--item md:w-full sm:w-1/2 w-full md:py-0 md:px-2 py-2 px-2'>
                                <Link to='project-section' spy={true} smooth={true} offset={-64} duration={500}>
                                    <div className='w-full text-center md:py-5 md:px-5 py-1 font-medium' onClick={closeMobileMenu}>Project</div>
                                </Link>
                            </li>
                            <li className='nav--item md:w-full sm:w-1/2 w-full md:py-0 md:px-2 py-2 px-2'>
                                <Link to='contact-section' spy={true} smooth={true} offset={-64} duration={500}>
                                    <div className='w-full text-center md:py-5 md:px-5 py-1 font-medium' onClick={closeMobileMenu}>Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Link to='hero-section' spy={true} smooth={true} offset={-64} duration={500} onClick={closeMobileMenu}>
                <span className={`scroll--up ${navBar ? 'block' : 'hidden'}`}>
                    <AiOutlineArrowUp size={30} />
                </span>
            </Link>
        </>
    )
}

export default Navbar