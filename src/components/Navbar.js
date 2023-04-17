import React from 'react'

const Navbar = () => {

    return (
        <header>
            <nav className='flex flex-row w-full h-min  justify-between  md:px-0 px-3 md:justify-around items-center py-3 md:py-5 
            bg-slate-900 m-0 fixed top-0 z-40'>
                <div className='text-white font-semibold text-2xl font-serif '>
                    Palash
                </div>
                <ul className='hidden md:flex flex-row md:w-1/3 justify-between '>
                    <li className='text-white font-semibold text-lg cursor-pointer'>Home</li>
                    <li className='text-white font-semibold text-lg cursor-pointer'>About</li>
                    <li className='text-white font-semibold text-lg cursor-pointer'>Projects</li>
                    <li className='text-white font-semibold text-lg cursor-pointer'>Experience</li>
                </ul>
                <div className='p-3 bg-red-600 rounded-3xl text-white font-semibold cursor-pointer hover:bg-red-800 delay-150 ease-in'
                    onClick={() => {
                        window.open("https://drive.google.com/file/d/1Kp41rl85n-cotrh-JuNn7O3q5oXo9QJs/view", '_blank', 'noopener,noreferrer');

                    }}>
                    Download CV
                </div>
            </nav>
        </header>
    )
}

export default Navbar