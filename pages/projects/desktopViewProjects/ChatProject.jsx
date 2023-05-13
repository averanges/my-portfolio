import React from 'react'
import ReactImg from '../../../public/assets/skills/react.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import socket from '../../../public/assets/skills/socket.png';
import node from '../../../public/assets/skills/node.png';
import Card from '../ui/Card';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { descChat, projectText } from '../../../utils/languageChangeProjects';
import Chat from '../../../public/assets/projects/chat1.png'

const ChatProject = () => {
  const lang = useSelector(state => state.lang.lang)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 2}}
    className='w-full h-full flex flex-col items-center gap-10'>
            <div className='w-full md:w-[90%] h-full p-5 md:p-16 flex relative justify-end flex-col md:flex-row'>
              <div>
                <Card source={Chat} alt='chat'/>
                <div className='w-full md:w-[60%] h-[55%] shadow-xl shadow-slate-300 absolute left-0 -z-20'/>
              </div>
              <div className='flex justify-start flex-col items-end md:gap-5 w-full md:w-[60%]'>
                  <p className='text-sm uppercase relative tracking-widest after:bg-amber-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10'>{projectText[lang]}</p>
                <h2 className='z-10'>Bubble Chat</h2>
                <div className='md:bg-white shadow-2xl relative shadow-slate-200 w-full'>
                  <div className='h-full p-5 md:border-[1px] border-slate-300' >
                    <p className='text-sm text-center md:text-base md:text-right'>{descChat[lang]}</p>
                  </div>
                  <div className='w-full h-full  absolute top-0 -z-10 shadow-2xl shadow-slate-300'/>
                </div>
                <div className='flex gap-3 w-full md:w-fit'>
                  <div className='flex gap-2'>
                    <Image src={ReactImg} width={30} height={20} alt='react'/>
                    <p className='text-sm md:text-lg '>React</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={Tailwind} width={30} height={20} alt='tailwind'/>
                    <p className='text-sm md:text-lg '>Tailwind</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={node} width={30} height={20} alt='node'/>
                    <p className='text-sm md:text-lg '>Node</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={socket} width={30} height={20} alt='socket'/>
                    <p className='text-sm md:text-lg '>Socket.io</p>
                  </div>
                </div>
                <div className='flex gap-5'>
                  <a
                      href='https://github.com/fireclint'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>
                    <div className='rounded-full shadow-lg shadow-gray-400 hover:bg-amber-200 hover:shadow-amber-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
  )
}

export default ChatProject