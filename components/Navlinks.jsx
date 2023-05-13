import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
  const lang = useSelector(state => state.lang.lang)
  const router = useRouter();
  const location = router.pathname.split('').filter((el, idx, arr) => arr.length > 1 ? el !== '/' : el).join('')

  let navlink
  if (lang === 'en'){
    navlink = ['/', 'about', 'projects', 'contact'].map((el, idx) => (
      <li key={idx} className={`text-sm uppercase  ${el === location ? 'border-b border-amber-300' : ''} flex`}>
          <Link href={`/${el !== '/' ? el : ''}`}>{el === '/' ? 'home' : el}</Link>
      </li>
    ))
  }
  if (lang === 'ru') {
    navlink = [{link: '/' , name: 'Главная'}, {link: 'about' , name: 'Обо мне'}, {link: 'projects' , name: 'Проекты'}, {link: 'contact' , name: 'Контакты'}].map((el, idx) => (
      <li key={idx} className={`text-sm uppercase  ${el.link === location ? 'border-b border-amber-300' : ''} flex`}>
          <Link href={`/${el.link !== '/' ? el.link : ''}`}>{el.name}</Link>
      </li>
    ))
  }
  if (lang === 'kr') {
    navlink = [{link: '/' , name: '홈'}, {link: 'about' , name: '자기소개'}, {link: 'projects' , name: '프로젝트'}, {link: 'contact' , name: '연락처'}].map((el, idx) => (
      <li key={idx} className={`text-sm uppercase  ${el.link === location ? 'border-b border-amber-300' : ''} flex`}>
          <Link href={`/${el.link !== '/' ? el.link : ''}`}>{el.name}</Link>
      </li>
    ))
  }
  return (
    <>
      {navlink}
    </>
  )
}

export default Navlinks