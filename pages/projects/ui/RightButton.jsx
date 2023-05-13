
const RightButton = ({setProjectInView}) => {
    return (
    <div className='relative flex'>
            <div className='w-20 h-10 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-2xl shadow-amber-700 skew-y-6 absolute -top-2 -left-2'></div>
            <div onClick={() => setProjectInView(prevIdx => prevIdx === 2 ? 0 : prevIdx + 1)}
            className='w-20 h-10 skew-y-6 bg-white border-[1px] border-slate-200 shadow-2xl shadow-amber-700 flex items-center justify-center group cursor-pointer'>
                <div className='absolute group-hover:translate-x-2 duration-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:stroke-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className='absolute'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:stroke-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className='absolute group-hover:-translate-x-2 duration-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:stroke-amber-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
            </div>
        </div>
    )
}

export default RightButton