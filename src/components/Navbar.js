import React, { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About Me'
        },
        {
            id: 3,
            link: 'My Song'
        },
        {
            id: 4,
            link: 'Gallery'
        }
    ]
    return (
        <div className='flex justify-between items-center text-white px-4 w-full h-20 bg-black'>
            <div>
                <h1 className=' font-Pacifico text-4xl'>
                    Illo
                </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer font-Montserrat font-medium text-gray-300 capitalize hover:scale-105 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-gray-950 to-black'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='py-6 cursor-pointer font-Montserrat font-medium text-gray-300 capitalize hover:scale-105 duration-200'>
                            {link}
                        </li>
                    ))}
                </ul>
            )}
            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <HiOutlineXMark size={30} /> : <HiBars3BottomRight size={30} />}
            </div>
        </div>
    )
}

export default Navbar