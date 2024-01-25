import React from 'react'
import ReactImg from '../../../public/assets/skills/react.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import express from '../../../public/assets/skills/express.png';
import node from '../../../public/assets/skills/node.png';
import Card from '../ui/Card';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import tamkar from '../../../public/assets/projects/tamkar.png'
import { useSelector } from 'react-redux';
import { descShop, projectText } from '../../../utils/languageChangeProjects';
import Link from 'next/link';

const ShopProject = () => {
  const lang = useSelector(state => state.lang.lang)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 2}}
    className='w-full h-full flex flex-col items-center gap-10'>
            <div className='w-[90%] h-full p-16 flex relative justify-end '>
              <div>
              <Card source={tamkar} alt='tamkar'/>
              <div className='w-[60%] h-[55%] shadow-lg shadow-slate-400 absolute left-0 -z-10 rounded-3xl'></div>
              </div>
              <div className='flex justify-start flex-col items-end gap-5 w-[60%]'>
                  <p className='uppercase relative tracking-widest after:bg-amber-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10'>{projectText[lang]}</p>
                <h2>Tamkar Beauty</h2>
                <div className='bg-white outline-2 outline-black shadow-2xl relative shadow-slate-200'>
                  <div className='h-full p-5 border-[1px] border-slate-300' >
                    <p className='text-right'>{descShop[lang]}</p>
                  </div>
                  <div className='w-full h-full bg-red-500 absolute top-0 -z-10 shadow-2xl shadow-slate-400'>2</div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex gap-2 items-center'>
                    <Image src={ReactImg} width={35} height={20} alt='react'/>
                    <p className='text-sm md:text-md'>React</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={Tailwind} width={25} height={20} alt='tailwind'/>
                    <p className='text-sm md:text-md'>Tailwind</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={node} width={25} height={20} alt='node'/>
                    <p className='text-sm md:text-md'>Node</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={express} width={100} height={30} alt='express'/>
                    <p className='text-sm md:text-md'></p>
                  </div>
                </div>
                <div className='flex gap-5'>
                  <a
                      href='https://github.com/averanges/tamkar-shop'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>
                    <Link href='https://tamkar-beauty.vercel.app'
                    className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                </div>
              </div>
            </div>
          </motion.div>
  )
}

export default ShopProject