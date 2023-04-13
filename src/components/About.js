import React from 'react'

const About = () => {
    return (
        <div
            name='About'
            className='md:w-full md:h-full bg-gradient-to-b from-gray-800 to-black text-white font-Montserrat'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-10'>
                    Illo adalah seorang penyanyi kelahiran Soppeng, 14 Oktober 1986. Memulai karir bermusik ditahun 2005 bermula dari band kampus dengan posisi sebagai gitaris. Kemudian 2010 membentuk band yang diberi nama Akatsuki dengan posisi sebagai bassis. Namun setelah mengeluarkan single, band Akatsuki akhirnya bubar dikarenakan kesibukan personil masing-masing. Pada tahun 2022, Illo memulai project solo dengan mengeluarkan single dengan judul Janji Setia pada tanggal 10 Juni 2022.
                    Untuk proses pembuatan album Promise diproduseri langsung oleh Illo yang sekaligus penulis lirik & lagu dalam album ini.  Sementara aransemen, mixing & mastering digarap di Adhy Studio yang merupakan studio rekaman yang berada di Kab. Bone. Album ini diberi judul Promise sebagai bentuk perwujudan janji akan merilis sebuah album sebagai dedikasi kepada teman band yang dulu.  Mudah-mudahan album ini dapat memberi warna baru di industri musik Indonesia.
                </p>
            </div>
        </div>
    )
}

export default About