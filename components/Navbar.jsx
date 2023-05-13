import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/logoNew.png'
import Flags from './Flags';
import Navlinks from './Navlinks';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');
  const lang = useSelector(state => state.lang.lang)
  const resume = {en: 'Resume', ru: 'Резюме', kr: '이력서'}

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: 'white' }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[10] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[10]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
            <Image
              src={NavLogo}
              alt='logo'
              width={125}
              height={75}
              className='cursor-pointer'
            />
        </Link>
        <div className='flex gap-5'>
          <Flags/>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex gap-10 items-center'>
            <Navlinks/>
            <button className="relative px-4 py-2 bg-gradient-to-r from-amber-300 via-amber-300 to-yellow-500 font-medium
             text-white transition-all duration-500 border-b-4 border-transparent hover:border-white shadow-md hover:shadow-xl shadow-slate-400">
              {resume[lang]}
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 transform scale-x-0"></span>
            </button>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    src={NavLogo}
                    width='125'
                    height='75'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col gap-5 mt-40'>
              <Navlinks/>
            <div className='pt-40'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
