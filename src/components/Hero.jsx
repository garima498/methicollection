import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col border border-gray-400 sm:flex-row'>
        {/* Hero Left Side */}
        <div className='flex items-center w-full py-10 sm:w-1/2 sm:py-0'> 
             <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='text-sm font-medium md:text-base'>OUR BESTSELLERS</p>

                </div>
                <h1 className='text-3xl leading-relaxed sm:py-3 lg:text-5xl'>Latest Arrivals </h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-center'></p>
                    <p></p>

                </div>


             </div>

        </div>

    </div>
  )
}

export default Hero