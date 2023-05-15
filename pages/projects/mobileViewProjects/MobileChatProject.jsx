import Image from 'next/image'
import React from 'react'
import Chat from '../../../public/assets/projects/chat.png'
import { useSelector } from 'react-redux'
import ReactImg from '../../../public/assets/skills/react.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import socket from '../../../public/assets/skills/socket.png';
import node from '../../../public/assets/skills/node.png';
import { descChat, projectText } from '../../../utils/languageChangeProjects';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';



const MobileChatProject = () => {
    const lang = useSelector(state => state.lang.lang)

  return (
    <div className='flex flex-col gap-5 shadow-md shadow-slate-300 p-4'>
        <div>
            <Image src={Chat} alt='chat'/>
        </div>
        <div className='flex flex-col gap-3 text-center items-center '>
            <div className='w-fit'>
                <p className='text-sm uppercase relative tracking-widest after:bg-amber-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10'>{projectText[lang]}</p>
            </div>
            <h2>Bubble Chat</h2>
            <div className='flex gap-3 w-full justify-center'>
                  <div className='flex gap-2 items-center'>
                    <Image src={ReactImg} width={35} height={20} alt='react'/>
                    <p className='text-sm md:text-lg '>React</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={Tailwind} width={25} height={20} alt='tailwind'/>
                    <p className='text-sm md:text-lg '>Tailwind</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={node} width={25} height={20} alt='node'/>
                    <p className='text-sm md:text-lg '>Node</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Image src={socket} width={30} height={20} alt='socket'/>
                    <p className='text-sm md:text-lg '>Socket.io</p>
                  </div>
              </div>
            <p className='text-sm'>{descChat[lang]}</p>
        </div>
        <div className='w-full flex justify-end gap-5 '>
          <div className='flex gap-2 items-center'>
            <FaGithub />
            <Link href='https://github.com/averanges/bubble-chat'>GIT</Link>
          </div>
            <div className='flex gap-2 items-center cursor-pointer'>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <Link href='https://bubble-talks.vercel.app'
              className='uppercase'>view</Link>
            </div>
        </div>
    </div>
  )
}

export default MobileChatProject