import React from 'react';
import Image from 'next/image';
import Me from '../../../public/assets/nick.jpeg'
import { useSelector } from 'react-redux';
import { about, firstText, greeting, secondText, skillsFirst, skillsSecond, skillsThird, whoAmI } from '../../../utils/languageChangeAbout';
import TextTitle from '../../../components/TextTitle';


const AboutComponent = () => {
  const lang = useSelector(state => state.lang.lang)
  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 justify-center' >
        <div className='max-w-[1240px] flex flex-col h-full w-full items-center md:items-start px-10 md:p-10 gap-10 justify-center md:justify-start'>
       <TextTitle title={about}/>
        <div className='flex gap-20 flex-col md:flex-row items-center md:items-start'>
          <div className='h-fit relative duration-500 w-fit group'>
              <Image src={Me} width={350} height={300} alt='profile'/>
              <div className='w-full h-full border-2 border-amber-300 absolute -z-10 top-5 left-5 md:group-hover:top-10 md:group-hover:left-10 duration-500'/>
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <h2>{greeting[lang]}</h2>
            <h4>{whoAmI[lang]}</h4>
            <p>{firstText[lang]}</p>
            <ul className='flex flex-col gap-5'>
              <li><span className='text-3xl text-amber-300'>✓</span>{skillsFirst[lang]}</li>
              <li><span className='text-3xl text-amber-300'>✓</span>{skillsSecond[lang]}</li>
              <li><span className='text-3xl text-amber-300'>✓</span>{skillsThird[lang]}</li>
            </ul>
            <p>{secondText[lang]}</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default AboutComponent;
