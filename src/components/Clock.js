import React from 'react';

function Clock() {
    return (
        <div className='flex flex-col items-center '>

            <div className='py-10 px-10 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4 md:space-x-6 hidden sm:block'>
                {/* Clock SVG */}
                <div className='relative w-16 h-16 md:w-20 md:h-20'>
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Outer Circle */}
                        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="4" fill="transparent" />

                        {/* Static Hour Hand */}
                        <line
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="30"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />

                        {/* Animated Minute Hand */}
                        <line
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="20"
                            className="animate-minute-hand"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            transform-origin="50% 50%"
                        />
                    </svg>
                </div>
            </div>

        </div>
    );
}

export default Clock;
