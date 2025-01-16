import React, { useEffect, useState ,useRef } from 'react'
import NavBar from './NavBar'
import "./hero.css"
import FeatureWork from './FeatureWork'

const Hero = () => {
  const divRef = useRef(null);
  const [inView, setInView] = useState(false);

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
    <>
     <div className=' h-screen w-full '>
       <div className=' h-[8%] w-full shadow-xl'><NavBar /></div>
       <div className=' h-[92%]  w-full bg-[#c7c8cc] flex flex-col justify-center items-center'>

<div className=' flex flex-col h-[94%] items-center justify-center dm-serif-text-regular lg:text-8xl md:text-6xl text-3xl'>
<div className='flex gap-2  '>
  <p className=' inline-block  transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105'>M</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>A</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>H</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>E</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>S</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>H</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>W</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>A</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>R</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>I</p>
</div>
<img   className='md:h-[300px] md:w-[300px] h-[250px] w-[250px]' src="./LOGO.png" alt="" />
<div  className='flex gap-2  '>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>F</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>I</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>L</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>M</p>
  <p className=' inline-block transition duration-300 md:hover:scale-x-150 md:hover:scale-y-105 '>S</p>
</div>

</div>
<div className=' h-[6%] unkempt-bold w-full  lg:text-2xl text-md md:text-xl flex justify-between px-8'> <p>Dehradun,IN</p> <p>Films Production</p></div>

       </div>
    </div>
    
    
    
    
    
    <div className="h-screen w-full fixed top-0 left-0 z-[-1]">
  <video className="video h-full w-full object-cover" autoPlay loop muted playsInline>
    <source src="./MF_Logo.mp4" type="video/mp4" />
  </video>
</div>
<div className="relative z-10">
  <div className="h-screen w-full flex justify-center items-center text-3xl"></div>
</div>
 
<div className='bg-[#c7c8cc] h-[45%] w-full flex flex-col gap-2 py-10 justify-center  dm-serif-text-regular text-3xl md:text-5xl lg:7xl px-10'>
  <p className='bg-slate-50 shadow-2xl rounded-br-3xl px-2'>MAHESHWARI FILMS IS A  FILMS PRODUCTION COMPANY BORN TO TELL STORIES THAT MOVE PEOPLE.</p>
<div className='text-end  h-[90px] '><button  className="white  relative overflow-hidden h-[30px] w-[70px]  md:h-[30px] md:w-[100px] duration-75 md:hover:border-b-4 md:border-dashed border-black text-lg md:text-xl   unkempt-bold  group">
         
         <div class="absolute bottom-1 md:bottom-0 left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:translate-y-[-100%] ">
          MOre.
         </div>
       
         
         <div className="absolute bottom-[-100%] left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 group-hover:opacity-100 ">
        MOre.
         </div>
       </button></div>
       <div ref={divRef} className={`h-[2px] bg-black expandable-div ${inView?'expanded':''}`}></div>
       </div>
 
       <FeatureWork/> 
    </>
   
  )
}

export default Hero