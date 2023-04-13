import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Youtube = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Gallery</p>
                    <div className='mt-10'>
                        <Splide>
                            <SplideSlide>
                                <iframe
                                    src="https://www.youtube.com/embed/Lceukfeknh0"
                                    frameBorder="0"
                                    title="song1"
                                    className=' w-full h-96'></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <iframe
                                    src="https://www.youtube.com/embed/q2BZ3HK2h9Y"
                                    frameBorder="0"
                                    title="song2"
                                    className=' w-full h-96'></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <iframe
                                    src="https://www.youtube.com/embed/99xt28j8aDw"
                                    frameBorder="0"
                                    title="song3"
                                    className=' w-full h-96'></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <iframe
                                    src="https://www.youtube.com/embed/i3L3jexePA4"
                                    frameBorder="0"
                                    title="song4"
                                    className=' w-full h-96'></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <iframe
                                    src="https://www.youtube.com/embed/XhW4hYzgmxg"
                                    frameBorder="0"
                                    title="song5"
                                    className=' w-full h-96'></iframe>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube