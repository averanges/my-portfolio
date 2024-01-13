import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from './ui/TextTyping';
import { greeting, mainDesc, name, occupation } from '../../utils/languageChangeMain';
import { useSelector } from 'react-redux';
import useGetText from './hooks/useGetText';



const Main = () => {
  const lang = useSelector(state => state.lang.lang)
  const sentences = useGetText()
  
  return (
    <div id='home' className='w-full h-screen text-center lg:text-left'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 m-auto md:m-0 min-h-[20px]'>
            <Typewriter sentences={sentences} period={200}/>
          </p>
          <h1 className='py-4 text-gray-700 m-auto md:m-0'>
           {greeting[lang]}<span className='bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent'> {name[lang]}</span>
          </h1>
          <h1 className='py-2 text-gray-700 m-auto md:m-0'>{occupation[lang]}</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto lg:m-0'>
            {mainDesc[lang]}
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto lg:m-0 py-4 '>
            <a
              href='https://www.linkedin.com/in/nick-belichenko-002234274/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/averanges'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
