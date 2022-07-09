import React from 'react';
import './About.css';
import Logo from '../../assets/logo-latest-small.png';
import ResponsiveDesign from '../../assets/responsive-design.png';
import ResusableMinimalCode from '../../assets/reusable-minimal-code.png';
import GreatUIUX from '../../assets/great-ui-ux.png';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiReact, SiTailwindcss, SiBootstrap, SiGithub, SiPhp, SiMysql, SiAdobephotoshop, SiAdobeillustrator, SiFigma } from 'react-icons/si';
import { Button } from './../Button';
import { Card } from './../Card';
import { Badge } from './../Badge';

function About() {
    return (
        <>
            <div id='about-section' className='about--section w-full h-full px-10 py-16'>
                <div className='max-w-[1240px] h-full mx-auto'>
                    <div className='w-full flex flex-row flex-wrap justify-center items-center pt-5 pb-10 md:pb-0'>
                        <div className='w-full'>
                            <p className='text--primary text-5xl font-black uppercase text-center md:pb-10 pb-0'>
                                <span className='tracking-[.05em]'>ABOUT ME</span>
                            </p>
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col justify-center items-center py-10 sm:px-10 px-0'>
                            <img className='md:w-[300px] sm:w-[275px] w-[250px]' src={Logo} alt="/" />
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col justify-center text--dark--gray'>
                            <h1 className='md:text-5xl sm:text-4xl text-3xl font-black py-4 uppercase'>JOHN MICHAEL GADOT</h1>
                            <p className='pb-3'>A <b>Freelance Full-Stack Developer</b> based in the Philippines.</p>
                            <p className='pb-3'>I'm passionate in crafting web applications that are scalable and efficient while providing engaging and pixel-perfect user experiences.</p>
                            <p className='pb-5 font-bold text-xl'>Currently, I'm seeking for an opportunity where I can implement and further my skills simultaneously.</p>
                            <div className='mx-auto md:mx-0 my-2'>
                                {<Button
                                    buttonStyle='btn--solid'
                                    buttonSize='btn--medium'
                                    buttonColor='btn--light'
                                    buttonHover='btn--hover--primary'
                                    text1='DOWNLOAD CV'
                                    text2='DOWNLOAD CV'
                                    type='submit'
                                    path='./'
                                    icon={<HiOutlineInboxIn size={25} />}
                                ></Button>}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='w-full pt-5 pb-10'>
                        <div className='w-full'>
                            <p className='text--primary text-2xl font-black uppercase text-center py-5'>
                                <span>Things that I enjoy to do</span>
                            </p>
                        </div>
                        <div className='w-full flex flex-row flex-wrap justify-center items-center'>
                            <Card
                                icon={ResponsiveDesign}
                                iconSize={90}
                                title='Responsive Design'
                                description={`I'm have an interest in responsiveness and making web applications I build look good on various screen sizes using both Mobile First approach and desktop Media Queries.`}
                            ></Card>

                            <Card
                                icon={GreatUIUX}
                                iconSize={90}
                                title='Efficient UI/UX'
                                description={`I appreciate simple content structure and clean design patterns. I have an eye for design, which allows me to transform templates into Pixel-Perfect Components that is accessible to various types of users.`}
                            ></Card>

                            <Card
                                icon={ResusableMinimalCode}
                                iconSize={90}
                                title='Reusable & Minimal Code'
                                description={`I'm doing my best to write my code as minimal and efficient as possible by using CSS variables, writing Custom Utility Classes, and creating Reusable Components.`}
                            ></Card>

                        </div>
                    </div>
                    <hr />
                    <div className='w-full pt-5 pb-10'>
                        <div className='w-full'>
                            <p className='text--primary text-2xl font-black uppercase text-center py-5'>
                                <span>Technologies and Tools I use</span>
                            </p>
                        </div>
                        <div className='w-full flex flex-row flex-wrap justify-center items-center'>
                            <Badge
                                icon={<SiHtml5 size={30} />}
                                title='HTML5'
                            ></Badge>

                            <Badge
                                icon={<SiCss3 size={30} />}
                                title='CSS3'
                            ></Badge>

                            <Badge
                                icon={<SiJavascript size={30} />}
                                title='JavaScript'
                            ></Badge>

                            <Badge
                                icon={<SiJquery size={30} />}
                                title='JQuery'
                            ></Badge>

                            <Badge
                                icon={<SiReact size={30} />}
                                title='React'
                            ></Badge>

                            <Badge
                                icon={<SiTailwindcss size={30} />}
                                title='Tailwind CSS'
                            ></Badge>

                            <Badge
                                icon={<SiBootstrap size={30} />}
                                title='Bootstrap'
                            ></Badge>

                            <Badge
                                icon={<SiGithub size={30} />}
                                title='Github'
                            ></Badge>

                            <Badge
                                icon={<SiPhp size={30} />}
                                title='PHP'
                            ></Badge>

                            <Badge
                                icon={<SiMysql size={30} />}
                                title='MySQL'
                            ></Badge>
                        </div>
                    </div>
                    <hr />
                    <div className='w-full pt-5 pb-10'>
                        <div className='w-full'>
                            <p className='text--primary text-2xl font-black uppercase text-center py-5'>
                                <span>Design Software</span>
                            </p>
                        </div>
                        <div className='w-full flex flex-row flex-wrap justify-center items-center'>
                            <Badge
                                icon={<SiAdobephotoshop size={30} />}
                                title='Photoshop'
                            ></Badge>

                            <Badge
                                icon={<SiAdobeillustrator size={30} />}
                                title='Illustrator'
                            ></Badge>

                            <Badge
                                icon={<SiFigma size={30} />}
                                title='Figma'
                            ></Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About