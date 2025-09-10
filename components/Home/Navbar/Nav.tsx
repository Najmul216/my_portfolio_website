import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react'
import { TbDevicesCode } from "react-icons/tb";
import { MdDownload } from "react-icons/md";

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[10000] fixed w-full'>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        {/* Logo*/}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
            <TbDevicesCode className='w-6 h-6 text-black' />
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>NAZMUL HASAN</h1>
        </div>
        {/* navLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => {
            return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
              <p>{link.label}</p>
            </Link>
          })}
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          {/* CV Button */}
          <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300
           text-white flex items-center space-x-2'>
            <MdDownload className='w-5 h-5' />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav