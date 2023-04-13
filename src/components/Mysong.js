import React from 'react';
import heroimage from '../assets/heroimage.png';

const Mysong = () => {

    const songs = [
        {
            id: 1,
            artis: 'Illo',
            song: 'Janji Setia'
        },
        {
            id: 2,
            artis: 'Illo',
            song: 'Biarkan'
        },
        {
            id: 3,
            artis: 'Illo',
            song: 'Sahabat'
        },
        {
            id: 4,
            artis: 'Illo',
            song: 'Terlahir'
        },
        {
            id: 5,
            artis: 'Illo',
            song: 'Cisem (Cinta Semu)'
        },
    ]
    return (
        <div
            name='About'
            className='md:w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white font-Montserrat'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Song</p>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
                    {songs.map(({ id, song, artis }) => (
                        <div className='auto w-auto bg-gradient-to-r from-gray-800 to-black hover:bg-gradient-to-l from-black to-gray-800 duration-300'>
                            <div key={id} className='flex items-center'>
                                <img
                                    src={heroimage}
                                    className=' w-1/5'
                                />
                                <div className='ml-4 flex flex-col'>
                                    <p className='font-bold'>{artis}</p>
                                    <p className='text-gray-500'>{song}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mysong