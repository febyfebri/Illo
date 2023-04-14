import React from 'react';
import heroimage from '../assets/heroimage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl text-white font-bold font-Montserrat'>
                        Hi! <br></br>
                        Saya Nur Ilham Akbar
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md font-Montserrat'>
                        Saya memulai project solo dengan mengeluarkan single dengan judul Janji Setia pada tanggal 10 Juni 2022.
                        Untuk proses pembuatan album Promise diproduseri langsung oleh Illo yang sekaligus penulis lirik & lagu dalam album ini.
                    </p>
                    <div>
                        <a href='#about' className='group text-white font-Montserrat w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            More
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} /></span>
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={heroimage}
                        alt='my person'
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home