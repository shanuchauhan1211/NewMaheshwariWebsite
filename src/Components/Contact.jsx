import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
const [inView, setInView] = useState(false);
 const divRef = useRef(null);
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the div is in view
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);



  return (
    <div id='contact' className='md:h-[90vh] h-[70vh] md:px-10 px-2 dm-serif-text-regular w-full'>
        <div
        className='md:h-[60%] h-[70%] w-full flex flex-col  md:gap-8 gap-2 text-white py-4 '>
            <p>Get in Touch</p>
            <div className='flex lg:text-6xl md:text-4xl text-lg gap-2'>
            <a href="tel:+918006670570"> <div className='flex  '>
  <p className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>8</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>0</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>0</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>6</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>6</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>7</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>0</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>5</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>7</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>0</p>
</div></a> / <a href="tel:+918191833513"><div className='flex  '>
  <p className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>8</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>1</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>9</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>1</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>8</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>3</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>3</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>5</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>1</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>3</p>
</div></a><p className='text-sm'>CALL</p></div>


<a href="mailto:ashokchauhan1717@gmail.com"></a><div className='flex lg:text-6xl md:text-4xl text-lg '>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>A</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>S</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>H</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>O</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>K</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>C</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>H</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>A</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>U</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>H</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>A</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>N</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>1</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>7</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>1</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>7</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>@</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>g</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>m</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>a</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>i</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>l</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>.</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>c</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>o</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>m</p>
    <p className='text-sm ml-2'>MAIL</p>
</div>
<a href=""></a><div className='flex lg:text-6xl md:text-4xl  text-lg '>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>I</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>N</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>S</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>T</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>A</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>G</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>R</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>A</p>
    <p  className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>M</p>

    <p className='text-sm ml-2'>FOLLOW</p>
</div>
        </div>
        <div ref={divRef} className={`h-[2px]  bg-white expandable-div mt-1 ${inView?'expanded':''}`}></div>

        <div className='py-8 flex justify-between items-center text-white'>
          <div><p className='lg:text-6xl md:text-4xl text-xl'>MAHESHWARI FILMS</p></div>
          <div className='md:text-2xl text-sm'>
            <a href="#home"><p>Home</p></a>
          <a href="#about"><p>About</p></a>
         <a href="#work"><p>Work</p></a> </div>
        </div>
        <div ref={divRef} className={`h-[2px]  bg-white expandable-div mt-1 ${inView?'expanded':''}`}></div>
        <div className='text-white flex justify-between py-5'>
          <p>Be Creative</p>
          <p>Copyright © 2025</p>
        </div>

    </div>
  )
}

export default Contact