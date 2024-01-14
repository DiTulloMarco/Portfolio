import React from 'react';

function Topmenu() {
    const projects = 'google.com';
    return (
        <nav className='h-auto p-5 w-full bg-default flex justify-start sticky top-0'>
            <div className='w-1/4 px-6 text-left'>Marco Di Tullo</div>
            <a className='w-1/4 -mr-4 text-right' href={projects}>
                Projects
            </a>
        </nav>
    );
}

export default Topmenu;