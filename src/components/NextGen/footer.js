import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='' data-aos="fade-up">
    <div className='bg-[#2F2EA6]'>
        <h1 className='lg:text-6xl text-white p-4 text-3xl'>So what are you waiting for?</h1>
        <p className='text-white text-center text-xl lg:text-3xl'>Apply now and start your journey to becoming a future</p>
        <p className='text-white text-center text-xl lg:text-3xl pb-5'>leader!</p>
    </div>
  </div>
  )
}

export default Footer