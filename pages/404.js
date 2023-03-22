import React from 'react'
import Image from 'next/image';
import Judges from '../public/assets/images/404.png'
import Link from 'next/link';

const ForOFour = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <Image
        src={Judges}
        alt='/'
        className="p-10 bg-white rounded-2xl w-[75%] sm:w-[40%] "
      />
      <div>
      <Link href='/'>
        <div className='py-4 text-2xl'>You may want to go back to <span className='font-SofiaBlack text-red-300'>Home</span></div>
      </Link>
      </div>
    </div>
  )
}

export default ForOFour