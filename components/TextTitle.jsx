import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const TextTitle = ({title}) => {
    const [hover, setHover] = useState(false);
    const lang = useSelector(state => state.lang.lang)
  return (
    <h1
        className={`font-serif text-3xl md:text-5xl transition-all duration-700 mt-5 md:mt-20 w-fit relative  
        after:absolute after:w-4 after:h-4 after:rounded-full after:bg-amber-200 after:-right-6 after:bottom-1 bg-clip-text
        ${hover ? "font-extrabold tracking-wider" : "font-light tracking-tighter" 
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {title[lang]}
  </h1>
  )
}

export default TextTitle