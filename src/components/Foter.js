import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Foter = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaInstagram size={30} /> Instagram
                </>
            ),
            href: 'https://instagram.com/illo_official86?igshid=YmMyMTA2M2Y=',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaWhatsapp size={30} /> Whatsapp
                </>
            ),
            href: 'https://wa.me/6285692872223',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    <FaEnvelope size={30} /> Email
                </>
            ),
            href: 'mailto:vam.offc@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                    <FaYoutube size={30} /> Youtube
                </>
            ),
            href: 'https://youtube.com/@illoofficial8741',
            style: 'rounded-tr-md'
        },
    ]
    return (
        <footer className=" bg-gradient-to-b from-black to-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-xl text-white sm:text-center font-Pacifico"><img src={logo} alt='logo' width={70} /></span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    {links.map(({ id, child, href }) => (
                        <li key={id} className='flex flex-wrap'>
                            <a href={href} className="flex items-center mr-4 hover:underline md:mr-6 ">{child}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Foter