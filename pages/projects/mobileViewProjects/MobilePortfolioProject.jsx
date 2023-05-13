import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import next from '../../../public/assets/skills/nextjs.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import framer from '../../../public/assets/skills/framer.png';
import { descPortfolio, projectText } from '../../../utils/languageChangeProjects';
import portfolioImg from '../../../public/assets/projects/portfolio.png'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const MobilePortfolioProject = () => {
    const lang = useSelector(state => state.lang.lang)

  return (
    <div className='shadow-md shadow-slate-300 p-4 flex flex-col gap-5'>
        <div>
            <Image src={portfolioImg} alt='portfolio'/>
        </div>
        <div className='flex flex-col gap-3 text-center items-center'>
            <div className='w-fit'>
                <p className='text-sm uppercase relative tracking-widest after:bg-amber-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10'>{projectText[lang]}</p>
            </div>
            <h2>Portfolio Project</h2>
            <div className='flex gap-3'>
                  <div className='flex gap-2'>
                    <Image src={next} width={30} height={20} alt='next'/>
                    <p className='text-lg'>Next</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={Tailwind} width={30} height={20} alt='taiwind'/>
                    <p className='text-lg'>Tailwind</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={framer} width={30} height={20} alt='framer'/>
                    <p className='text-lg'>Framer Motion</p>
                  </div>
              </div>
            <p className='text-sm'>{descPortfolio[lang]}</p>
        </div>
        <div className='w-full flex justify-end gap-5 '>
          <div className='flex gap-2 items-center'>
            <FaGithub />
            <button>GIT</button>
          </div>
            <div className='flex gap-2 items-center cursor-pointer'>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <Link href='https://nickbel.vercel.app/'
              className='uppercase'>view</Link>
            </div>
        </div>
    </div>
  )
}

export default MobilePortfolioProject