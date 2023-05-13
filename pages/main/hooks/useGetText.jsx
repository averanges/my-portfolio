import React from 'react'
import { useSelector } from 'react-redux'


const useGetText = () => {
    const lang = useSelector(state => state.lang.lang)
    let currentText
    if (lang === 'en') {
       currentText = [
            'Let`s build something together',
            'Let`s create new ideas',
            'Let`s collaborate and innovate',
            'Let`s bring your vision to life',
            'Let`s make something amazing',
            'Let`s push the boundaries together',
            'Let`s design the future',
            'Let`s turn your dreams into reality'
          ]
    }
    if (lang === 'ru') {
        currentText = [
            'Давайте совместно разрабатывать новые идеи',
            'Давайте воплотим ваше видение в жизнь вместе',
            'Давайте сотворим нечто удивительное вместе',
            'Давайте вместе преодолеем границы',
            'Давайте создадим будущее вместе',
            'Давайте работать вместе, чтобы достичь величия',
            'Давайте воплотим ваши мечты в реальность вместе',
           ]
     }
     if (lang === 'kr') {
        currentText = [
            '함께 무엇인가를 만들어 봅시다',
            '새로운 아이디어를 함께 만들어 봅시다',
            '당신의 비전을 함께 실현해 봅시다',
            '함께 놀라운 것을 만들어 봅시다',
            '함께 한계를 넘어 봅시다',
            '미래를 디자인해 봅시다',
            '당신의 꿈을 함께 현실로 만들어 봅시다',
           ]
     }
     return currentText
}

export default useGetText