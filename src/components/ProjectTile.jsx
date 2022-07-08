import React from 'react';
import './ProjectTile.css';

export const ProjectTile = ({
    title,
    type,
    description,
    tag1,
    tag2,
    image
}) => {

    return (
        <div className='w-full flex flex-row flex-wrap justify-center items-center'>
            <div className='md:w-2/5 w-full flex flex-col justify-center pt-12 pb-6'>
                <h1 className='project--tile--title md:text-4xl text-3xl font-black text--dark--gray uppercase pr-2'>{title}</h1>
                <p className='project--tile--type'>{type}</p>
                <p className='project--tile--description p-5 my-5 text-md'>{description}</p>
                <p className='project--tile--tags flex flex-row flex-wrap'>
                    <span>{tag1}</span><span>{tag2}</span>
                </p>
            </div>
            <div className='project--tile--image md:w-3/5 w-full flex flex-col justify-center items-center md:py-12'>
                <img className='md:w-[800px] w-[700px] rounded-lg' src={image} alt="/" />
            </div>
        </div>
    )
};
