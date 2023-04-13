import React from 'react';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://instagram.com/illo_official86?igshid=YmMyMTA2M2Y=',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Whatsapp <FaWhatsapp size={30} />
                </>
            ),
            href: 'https://wa.me/6285692872223',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Email <FaEnvelope size={30} />
                </>
            ),
            href: 'mailto:vam.offc@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                    Youtube <FaYoutube size={30} />
                </>
            ),
            href: 'https://youtube.com/@illoofficial8741',
            style: 'rounded-tr-md'
        },
    ]
    return (
        <div className='flex flex-col left-0 top-[35%] fixed'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li key={id} className='hidden lg:flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-200 bg-gray-500'>
                        <a href={href}
                            className='flex justify-between text-white items-center w-full font-Montserrat'
                        >
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks