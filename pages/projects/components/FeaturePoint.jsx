import React, { useState } from 'react'

const FeaturePoint = ({title, descr}) => {
    const [open, setOpen] = useState(false)
  return (
        <div className='w-full h-fit flex flex-col gap-10'>
          <div className='w-full h-14 bg-white rounded-full shadow-xl items-center flex pl-5 font-bold gap-2 '>
              <div onClick={() => setOpen(prev => !prev)}
              className='cursor-pointer hover:text-amber-200 duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <p>{title}</p>
            </div>
            <div className={`pl-5 bg-slate-100 p-2 rounded-xl text-left ${open ? "flex" : "hidden"}`}>
            <p>{descr}</p>
           </div>
        </div>
  )
}

export default FeaturePoint