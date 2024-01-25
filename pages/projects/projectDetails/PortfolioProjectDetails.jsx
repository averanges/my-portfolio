import React from 'react'
import FeaturePoint from '../components/FeaturePoint'
import Image from 'next/image';
import tailwind from "../../../public/assets/skills/tailwind.png"
import redux from "../../../public/assets/skills/redux.png"
import next from "../../../public/assets/skills/nextjs.png"
import framer from "../../../public/assets/skills/framer.png"
import { chatProjectImageData, portfolioProjectImageData } from '../../../utils/consts/ImagesData';
import { chatProjectFeaturesData, portfolioProjectFeaturesData, shopProjectFeaturesData } from '../../../utils/consts/FeatureData';
import { useSelector } from 'react-redux';
import { blockTitles, chatProjectSubDescr, extraData, portfolioProjectSubDescr, shopProjectSubDescr, techStackSubTitles } from '@/utils/languageChangeProjectDetails';

const PortfolioProjectDetails = () => {
    const lang = useSelector(state => state.lang.lang)

    const imageData = portfolioProjectImageData.map(el => ( 
    <div className='w-52 lg:w-80 h-40 bg-white shadow-xl rounded-xl flex justify-center items-center'>
        <Image src={el} alt="" className='object-cover w-full h-auto rounded-xl'/>
    </div>))
    const featurePointData = portfolioProjectFeaturesData.map(el => <FeaturePoint title={el.title[lang]} descr={el.descr[lang]}/>)
  return (
    <div className='flex justify-between mt-24 w-[90%] h-[80%] mb-20'>
        <div className='w-full lg:w-[40%] h-full flex flex-col gap-10'>
        <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-100 to-slate-200 w-fit text-5xl'>Personal Portfolio</h2>
        <div className='flex w-full gap-5'>
            <span className='bg-amber-200 shadow-inner rounded-xl px-3 py-1 text-white'>{extraData.solo[lang]}</span>
            <span className='bg-amber-200 shadow-inner rounded-xl px-3 py-1 text-white'>{extraData.responsive[lang]}</span>
            <span className='bg-amber-200 shadow-inner rounded-xl px-3 py-1 text-white'>{extraData.side[lang]}</span>
        </div>
        <p className='text-slate-800 text-left'>{portfolioProjectSubDescr[lang]}</p>
        <div className='grid grid-cols-2 w-fit gap-10'>
            {imageData}
        </div>
        </div>
        <div className='w-[40%] pt-20 flex justify-center'>
        <div className='h-full w-[80%] flex flex-col gap-10'>
            <h3 className='text-2xl'>{blockTitles.features[lang]}<span className='text-4xl text-amber-200'>.</span></h3>
            <div className='w-full h-full flex flex-col gap-10'>
                {featurePointData}
            </div>
        </div>
        </div>
        <div className='hidden w-[20%] pt-20 lg:flex flex-col gap-5'>
            <h3 className='text-2xl'>{blockTitles.stack[lang]}<span className='text-4xl text-amber-200'>.</span></h3>
            <div>
                <div className='flex gap-2 items-center'>
                <span className='flex h-1 w-6 bg-amber-200'></span>
                <p>{techStackSubTitles.styling[lang]}</p>
                </div>
                <div className='flex items-center font-semibold gap-3 mt-2'>
                    <div className='w-8 h-full ml-14'>
                        <Image src={tailwind} className='object-cover w-auto h-full'/>
                    </div>
                    <p>Tailwind CSS</p>
                </div>
                <div className='flex items-center font-semibold gap-3 mt-2'>
                    <div className='w-8 h-full ml-14'>
                        <Image src={framer} className='object-cover w-auto h-full'/>
                    </div>
                    <p>Framer-Motion</p>
                </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
            <span className='flex h-1 w-6 bg-amber-200'></span>
            <p>{techStackSubTitles.state[lang]}</p>
            </div>
            <div className='flex items-center font-semibold mt-2'>
            <div className='w-12 h-full ml-14'>
                <Image src={redux} className='object-cover w-auto h-full'/>
            </div>
            <p>Redux Toolkit</p>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
            <span className='flex h-1 w-6 bg-amber-200'></span>
            <p>{techStackSubTitles.server[lang]}</p>
            </div>
            <div className='flex items-center font-semibold gap-3 mt-2'>
                <div className='w-8 h-full ml-16'>
                    <Image src={next} className='object-cover w-auto h-full'/>
                </div>
                <p>Next.js</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PortfolioProjectDetails