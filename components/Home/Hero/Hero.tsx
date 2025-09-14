'use client';

import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <div className='relative z-10 flex flex-col items-center'>
          <Image src="/images/s1.jpg" alt='heroImage' width={180} height={180} className='rounded-full border-8 border-[#0c0c48aa]' />
          <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Developing web products, apps & <br/>
            <span className='text-cyan-300'> Conversion web analytics.</span>
          </h1>
          <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
            This is <span className='text-cyan-300 pl-2'>Nazmul</span>, A Passionate -
            <span className='text-cyan-300 font-bold'>
            <Typewriter
              options={{
                strings: [
                          'Full-Stack Developer.',
                          'App Developer.',
                          'Web Analytics Expert.',
                          'Dev-Ops Engineer.'
                          ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2"

              }}
            />
            </span>
          </h2>
        </div>
    </div>
  )
}

export default Hero