import React, { useState } from 'react'
import NavButton from './NavButton'
import {ImMenu, ImCross, ImGithub, ImLinkedin, ImMail4} from 'react-icons/im'
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-1 2xl:px-16'>
        <Link href="/" className='font-SofiaBlack p-2 text-5xl'>
          <div>bitterkofte</div>
        </Link>
        <div>
          <div className='hidden md:flex'>
            <Link href="/" className='font-SofiaBold p-2 text-3xl'>
              <div>Contact Me</div>
            </Link>
            <Link href="/" className='font-SofiaBold p-2 text-3xl'>
              <div>Download CV</div>
            </Link>
          </div>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <ImMenu size={40}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-full bg-black/70' : ''}>
        <div onClick={handleNav} className={nav ? "fixed left-0 top-0 w-[25%] sm:w-[40%] md:w-[65%] h-full" : ''}></div>
        <div
        className={
          nav
            ? 'flex flex-col justify-between fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[35%] h-full bg-black p-10 ease-in duration-500'
            : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
        }>
          {/* Nav Top */}
          <div className='border border-emerald-500'>
            <div className='flex w-full items-center justify-between'>
              <div>
                <div className='font-SofiaBlack text-3xl'>bitterkofte</div>
              </div>
              <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                <ImCross size={15}/>
              </div>
            </div>
            <div className='border-b rounded border-gray-300 my-4'>
              <p className='w-[85%] md:w-[%90] px-2 py-3'>Hi, I'm Hasan</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className='py-4 flex flex-col border border-yellow-300'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Download CV</li>
              </Link>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact Me</li>
              </Link>
            </ul>
          </div>

          {/* Nav Icons */}
          <div className='border border-red-500 flex justify-between'>
            <a
              href='https://github.com/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImLinkedin size={32}/>
            </a>
            <a
              href='https://github.com/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImGithub size={32}/>
            </a>
            <a
              href='hasantalhahtc@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <ImMail4 size={32}/>
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar