import React from 'react';
import './Badge.css';

export const Badge = ({
    icon,
    title
}) => {

    return (
        <div className='badge p-3'>
            <div className='w-full px-5 pt-5 pb-3 rounded-lg flex flex-col justify-center items-center font-bold'>
                {icon}
                <span className='mt-2 text-lg'>{title}</span>
            </div>
        </div>
    )
};
