import React from 'react';

function Topmenu() {
    const projects = '/projects';
    const blog = '/blog';

    return (
        <nav className='h-auto p-5 w-full bg-default flex justify-start sticky top-0'>
            <div className='w-1/4 px-6 text-left cursor-default'> 
                <a href='/'>
                    Marco Di Tullo
                </a> 
            </div>
            <div className='w-1/4 pr-9 text-right cursor-pointer' href={projects}>
                <a href={projects} >Projects</a>
            </div>
            <div className='w-1/4 pl-6 text-left cursor-pointer' href={projects}>
                <a href={blog} >Blog</a>
            </div>
        </nav>
    );
}

export default Topmenu;