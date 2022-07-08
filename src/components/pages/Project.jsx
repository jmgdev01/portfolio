import React from 'react';
import './Project.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import { ProjectTile } from './../ProjectTile';

function Project() {
    return (
        <div id='project-section' className='project--section w-full h-full px-10 py-16'>
            <div className='max-w-[1240px] h-full mx-auto'>
                <div className='w-full py-5'>
                    <div className='project--header w-full'>
                        <p className='text--light text-5xl font-black uppercase text-center'>
                            <span className='tracking-[.05em]'>Projects I've Built</span>
                        </p>
                    </div>

                    <ProjectTile
                    title='Portfolio'
                    type='Website'
                    description={`
                    This web-based portfolio was built using React JS to create reusable and custom components, and Tailwind CSS to ensure responsiveness of the design on various screen sizes.  
                    `}
                    tag1='React JS'
                    tag2='Tailwind CSS'
                    image={Project1}
                    >
                    </ProjectTile>

                    <ProjectTile
                    title='Quiz Management System'
                    type='Web-based App'
                    description={`
                    QMS is used to monitor and manage the quizzes of the learners. It was developed using Bootstrap to make responsive design, and PHP to create dynamic content.
                    `}
                    tag1='Bootstrap'
                    tag2='PHP'
                    image={Project2}
                    >
                    </ProjectTile>

                </div>
            </div>
        </div>
    )
}

export default Project