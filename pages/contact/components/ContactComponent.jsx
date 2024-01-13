import React, { useState } from 'react';
import Map from '../ui/Map';
import TextTitle from '../../../components/TextTitle';
import { useSelector } from 'react-redux';
import { messageButtonText, placeholderEmail, placeholderMessage, placeholderName, smallText, title } from '../../../utils/languageChangObjectsContact';
import emailjs from '@emailjs/browser'
import * as Yup from 'yup'

const ContactComponent = () => {
  const lang = useSelector(state => state.lang.lang)
  const [errors, setErrors] = useState({})
  const [inputFocused, setInputFocused] = useState({
    name: false,
    email: false,
    message: false
  })

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputValues = (e) => {
    const {value, id} = e.target
    setValues(prevValues => ({...prevValues, [id]: value}))
  }

  const validtion = Yup.object().shape({
    name: Yup.string().required('Please, provide you name.'),
    email: Yup.string().email('Valid email is required.').required('Please, provide your email address.'),
    message: Yup.string().required('Please, write your message.')
  })

  const handleSubmit = async () => {
    try {
      await validtion.validate(values, { abortEarly: false });
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          values,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
      setValues({ name: '', email: '', message: ''})
    } catch (err) {
      const validationErrors = {};
      {err && err?.inner?.forEach((error) => {
        validationErrors[error.path] = error.message;
      });}
      setErrors(validationErrors);
      console.log(err)
    }
  }
  // nLtH7BesUFoIZn85G
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    handleSubmit()
  }

  return (
    <div id='contact' className='w-screen h-screen'>
      <div className='m-auto w-full h-full flex flex-col md:flex-row md:h-[90%] justify-center items-center gap-10 md:gap-0'>
        <div className='flex-1 h-full flex justify-center items-center mt-20'>
          <div className='w-[80%] flex-col gap-10 flex h-full justify-center items-center'>
            <div className='w-full flex justify-center md:justify-start'>
              <TextTitle title={title} />
            </div>
            <div>
              <p>{smallText[lang]}</p>
            </div>
            <form onSubmit={(e) => handleSubmitForm(e)}
            className='w-full flex flex-col gap-10'>
              <div className='w-full flex gap-5'>
                <div className='flex-1 relative'>
                  <label htmlFor="name" className={`absolute left-3 duration-300 
                  ${!inputFocused.name && values.name === '' ? 'top-3 text-slate-400' : 'text-amber-300 text-xs top-1' }`}>{placeholderName[lang]}</label>
                   <input type="text" id='name' value={values.name} 
                   onFocus={(e) => setInputFocused(prevFocus => ({...prevFocus, name: true}))} 
                   onBlur={(e) => setInputFocused(prevFocus => ({...prevFocus, name: false}))}
                   onChange={(e) => handleInputValues(e)}
                   className={`p-3 border-[1px] shadow-inner outline-none placeholder:text-sm w-full ${errors.name ? 'border-[1px] border-red-500' : ''}`}/>
                   {errors.name && <span className='text-red-500'>{errors.name}</span>}
                </div>
                <div className='flex-1 relative'>
                  <label htmlFor="email" className={`absolute left-3 duration-300
                  ${!inputFocused.email && values.email === '' ? 'top-3 text-slate-400' : 'text-amber-300 text-xs top-1' }`}>{placeholderEmail[lang]}</label>
                   <input type="text" id='email' value={values.email} 
                   onFocus={(e) => setInputFocused(prevFocus => ({...prevFocus, email: true}))} 
                   onBlur={(e) => setInputFocused(prevFocus => ({...prevFocus, email: false}))}
                   onChange={(e) => handleInputValues(e)}
                   className={`p-3 border-[1px] shadow-inner outline-none placeholder:text-sm w-full ${errors.email ? 'border-[1px] border-red-500' : ''}`}/>
                  {errors.email && <span className='text-red-500'>{errors.email}</span>}
                </div>
              </div>
              <div className='w-full relative'>
                <label htmlFor="message" className={`absolute top-3 left-4 duration-300 
                ${!inputFocused.message && values.message === '' ? 'top-3 text-slate-400' : 'text-amber-300 text-xs top-2'}`}>{placeholderMessage[lang]}</label>
                <input type="text" id='message' value={values.message}
                onFocus={(e) => setInputFocused(prevFocus => ({...prevFocus, message: true}))} 
                onBlur={(e) => setInputFocused(prevFocus => ({...prevFocus, message: false}))}
                onChange={(e) => handleInputValues(e)}
                className={`w-full h-full pb-24 md:pb-36 pt-5 border-[1px] shadow-inner outline-none ${errors.message ? 'border-[1px] border-red-500' : ''}`} style={{ textIndent: '1em' }} />
                {errors.message && <span className='text-red-500'>{errors.message}</span>}
              </div>
              <div className='w-full flex justify-end'>
                <button type='submit' 
                className='border-[1px] text-amber-400 shadow-inner rounded-none border-amber-400 p-2 md:p-3 duration-500 hover:shadow-sm hover:shadow-amber-300'>
                  {messageButtonText[lang]}
                </button>
              </div>
            </form>
        </div>
          </div>
        <div className='flex-1 h-full w-full bg-black justify-end items-end flex'>
          <Map/>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
