import { changeLang } from '../store/langSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flag from 'react-world-flags'

const Flags = () => {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.lang.lang)
  const activeLang = lang.toUpperCase()
    const handleFlagClick = (name) => {
      const lowerName = name.toLowerCase()
      dispatch(changeLang(lowerName))
    }

    const flags = ['RU', 'KR', 'EN'].map((el, idx) => (
      <div key={idx} onClick={() => handleFlagClick(el)}
      className={`flex gap-1 items-center cursor-pointer font-semibold ${activeLang === el ? 'border-[1px] p-1 border-amber-300 shadow-md rounded-full shadow-orange-200' : ''}`}>
        <Flag code={el === 'EN' ? 'GB' : el} width={25}/>
        <span>{el}</span>
      </div>
  ))
  return (
    <>{flags}</>
  )
}

export default Flags