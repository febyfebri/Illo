import React from 'react'

const Footer = () => {
    return (
        <footer className="pb-5 bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-white sm:justify-start">
                        <h1 className=' font-Pacifico'>Illo</h1>
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                        T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer