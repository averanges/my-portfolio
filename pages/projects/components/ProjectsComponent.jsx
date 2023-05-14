import React, { useState } from 'react';
import ChatProject from '../desktopViewProjects/ChatProject';
import ShopProject from '../desktopViewProjects/ShopProject';
import PortfolioProject from '../desktopViewProjects/PortfolioProject';
import TextTitle from '../../../components/TextTitle';
import { useEffect } from 'react';
import MobileProjectsView from '../mobileViewProjects/MobileProjectsView';
import LeftButton from '../ui/LeftButton';
import RightButton from '../ui/RightButton';

const ProjectsComponent = () => { 
  const [projectInView, setProjectInView] = useState(0)
  const [windowWidth, setWindowWidth] = useState(null)
  const projects = [<ChatProject key={0}/>,<ShopProject key={1}/>, <PortfolioProject key={2}/>]

  useEffect(() => {
    const handleWindowResize = () => {
     setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    } 
  })

  const title = {ru: 'Некоторые вещи, которые я создал', kr: '일부 내가 만든 것들', en: 'Some Things I’ve Built'}
  return (
    <div id='projects' className='w-full xl:h-screen p-2 overflow-hidden'>
      <div className='w-full mx-auto flex justify-center items-center h-full gap-10'>
        <div className='flex w-full xl:w-[85%] justify-between h-full'>
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
      </div>
    </div>
  );
};

export default ProjectsComponent;
