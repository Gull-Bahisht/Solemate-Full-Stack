import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border bg-red-100'>
        {/* Hero left size */}
        <div className=' w-full  flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-bold text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-relaxed">
            Latest Arrivals
            </h1>                
                <div className='flex items-center justify-center gap-2'>
                    <p className=' justify-center font-bold text-sm md:text-base '>
                        SHOP NOW
                    </p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    

                </div>
            </div>
        </div>
        {/* Hero right side */}
        <img className='w-full sm:w-1/2' src={assets.hero2} alt='Hero Img'/>

    </div>
  )
}

export default Hero
