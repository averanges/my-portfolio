"use client"

import React, { useState, useEffect } from 'react';
import ChatProject from '../desktopViewProjects/ChatProject';
import ShopProject from '../desktopViewProjects/ShopProject';
import PortfolioProject from '../desktopViewProjects/PortfolioProject';
import TextTitle from '../../../components/TextTitle';
import MobileProjectsView from '../mobileViewProjects/MobileProjectsView';
import LeftButton from '../ui/LeftButton';
import RightButton from '../ui/RightButton';
import DataStorageProject from '../desktopViewProjects/DataStorageProject';
import DataStorageProjectDetails from '../projectDetails/DataStorageProjectDetails';

const ProjectsComponent = () => { 
  const [projectInView, setProjectInView] = useState(0)
  const [windowWidth, setWindowWidth] = useState(null)
  const [downArrow,setDownArrow] = useState(false)
  const [scrollY, setScrollY] = useState(null)
  const projects = [<ChatProject key={0}/>,<ShopProject key={1}/>,<DataStorageProject key={2}/> , <PortfolioProject key={3} />]

  useEffect(() => {
    if(window) {
      setScrollY(window.innerHeight)
    }
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth)
       }
       const handleScroll = () => {
         setScrollY( window.innerHeight - window.scrollY);
       }
    window.addEventListener('resize', handleWindowResize)
    window.addEventListener('scroll', handleScroll);
    handleWindowResize()
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  },[])

  useEffect(() => {
      setInterval(() => setDownArrow(prev => !prev), 500)
  }, [])
  
  const title = {ru: 'Некоторые вещи, которые я создал', kr: '일부 내가 만든 것들', en: 'Some Things I’ve Built'}
  return (
    <div className='relative'>
      <div id='projects' className='w-full h-screen p-2 overflow-hidden'>
        <div className='w-full mx-auto flex flex-col justify-center items-center h-full'>
          <div className='flex w-full xl:w-[85%] justify-between h-full flex-1'>
            <div className='h-full hidden xl:flex items-center'>
              <LeftButton setProjectInView={setProjectInView} projectInView={projectInView}/>
            </div>
            <div className='flex flex-col mt-20 gap-5 items-center md:items-start xl:px-5 w-full'>
              <div className='ml-10'>
                <TextTitle title={title}/>
              </div>
                {windowWidth > 770 ? projects[projectInView] : <MobileProjectsView/>}
                <div className='w-full justify-center hidden md:flex xl:hidden'>
                  <div className='p-2 border-[1px] border-slate-200 rounded-full flex gap-5 hover:border-amber-200 duration-200'>
                    <span onClick={() => setProjectInView(0)}
                    className='ml-2 cursor-pointer hover:font-semibold hover:text-amber-400 duration-300'>1</span>
                    <span onClick={() => setProjectInView(1)}
                    className='border-x-[1px] px-3 border-slate-200 cursor-pointer hover:font-semibold hover:text-amber-400 duration-300'>2</span>
                    <span onClick={() => setProjectInView(2)}
                    className='mr-2 cursor-pointer hover:font-semibold hover:text-amber-400 duration-300'>3</span>
                  </div>
                </div>
            </div>
            <div className='h-full hidden xl:flex items-center'>
              <RightButton setProjectInView={setProjectInView} projectInView={projectInView}/>
            </div>
          </div>
          <div className='w-[80%] flex justify-end relative'>
            <div
            className={`hidden md:block absolute right-0 -top-16 duration-500 ${downArrow ? "opacity-100" : " -translate-y-2 opacity-60"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} 
              className={`w-16 h-16 stroke-amber-200`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden w-full h-screen bg-slate-50 absolute top-0 md:flex justify-center items-end text-slate-800"
        style={{ transform: `translateY(${scrollY}px)`}}>
          <DataStorageProjectDetails/>
        </div>
    </div>
  );
};

export default ProjectsComponent;
