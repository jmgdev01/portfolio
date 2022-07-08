import React from 'react';
import './Card.css';

export const Card = ({
    icon,
    iconSize,
    title,
    description
}) => {

    return (
        <div className='card sm:px-3 px-0 py-3'>
            <div className='card-body shadow-lg'>
                <div className='w-full flex flex-row justify-center md:py-2 py-5'>
                    <img src={icon} width={iconSize} alt="/" />
                </div>
                <div className='w-full text--dark--gray'>
                    <p className='font-bold text-xl py-2'>{title}</p>
                    <p className='text-md'>{description}</p>
                </div>
            </div>
        </div>
    )
};
