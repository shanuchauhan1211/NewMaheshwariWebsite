import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import "./nav.css"
const NavBar = () => {
const[show,setShow]=useState(false);
const[showvideo,setShowvideo]= useState("./MF_Logo.mp4");
const [showTransition,setShowTransition]=useState(false);


useEffect(() => {
  
  document.body.style.overflow = show ? 'hidden' : 'auto';

  
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [show]);

function handleMouseEnter(url){

  if(showvideo !== url)
  {
     setShowTransition(true);
    setTimeout(() => {
      setShowvideo(url); 
      setShowTransition(false);
     
    }, 250); 
  }

}

function handleMouseLeave()
{
  if(showvideo !== "./MF_Logo.mp4")
    {
       setShowTransition(true);
      setTimeout(() => {
        setShowvideo("./MF_Logo.mp4"); 
        setShowTransition(false);
       
      }, 250); 
    }
}


  return (
   <>
   { 
    show?(<div className='relative h-screen w-full   bg-[#686869] flex'>


<div className=' md:w-1/2 white w-full h-full'>
<div className=' h-[8%] w-full  flex px-4 md:px-8  justify-between items-center'>
<p className='unkempt-bold lg:text-2xl md:text-xl text-md  block'>MAHESHWARI FILMS</p>
<p className='unkempt-bold md:block hidden'>Films Production</p>
<button onClick={()=>{setShow(!show);}} className="menu md:hidden block relative overflow-hidden h-[30px] w-[70px] duration-75   unkempt-bold  group">
         
         <div class="absolute bottom-1 md:bottom-0 left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:translate-y-[-100%] ">
         Close
         </div>
       
         
         <div className="absolute bottom-[-100%] left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 group-hover:opacity-100 ">
           Close
         </div>
       </button>




</div>
<div className='h-[92%]   fascinate-inline-regular  text-white inline-flex flex-col px-4 lg:text-7xl md:text-5xl text-4xl justify-center'>
    <motion.span   onMouseEnter={() => handleMouseEnter("./MF_Logo.mp4")} onMouseLeave={handleMouseLeave}
     className='hover:opacity-70  '>WORK</motion.span>
    <motion.span    onMouseEnter={() => handleMouseEnter("./Logo.mp4")} onMouseLeave={handleMouseLeave}
     className='hover:opacity-70 '>ABOUT</motion.span>
    <motion.span    onMouseEnter={() => handleMouseEnter("./MF_Logo.mp4")} onMouseLeave={handleMouseLeave}
     className='hover:opacity-70  '>CONTACT</motion.span>

</div>


</div>
<div className='md:w-1/2 white overflow-hidden md:block hidden h-full '>
<div className='relative   text-white h-[8%] w-full   flex px-4 md:px-8 z-10  justify-between items-center'>

<p className='unkempt-bold md:block hidden'>Dehradun,IN</p>
<button onClick={()=>{setShow(!show);}} className="white relative overflow-hidden h-[30px] w-[70px] md:h-[30px] md:w-[100px] duration-75 md:hover:border-b-4 md:border-dashed border-white md:text-2xl   unkempt-bold  group">
         
         <div class="absolute bottom-1 md:bottom-0 left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:translate-y-[-100%] ">
          Close
         </div>
       
         
         <div className="absolute bottom-[-100%] left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 group-hover:opacity-100 ">
       Close
         </div>
       </button>
       


</div>
<div className='z-0  relative -top-20 '>
<video className={`video duration-500  ${showTransition?"hide brightness-0":" brightness-200 opacity-100"}`}  key={showvideo} autoPlay loop muted playsInline>
                <source src={showvideo} type="video/mp4" />
                
            </video>
</div>
</div>


    </div>
    )  
    
    
    
    :
    
      ( <div className='nav bg-[#dddee4]   h-full w-full flex px-4 md:px-8 md:justify-end justify-between items-center'>

        <p className='unkempt-bold md:hidden block'>MAHESHWARI FILMS</p>
        <button onClick={()=>{setShow(!show);}} className="menu relative overflow-hidden h-[30px] w-[70px] md:h-[30px] md:w-[100px] duration-75 md:hover:border-b-4 md:border-dashed border-black md:text-2xl   unkempt-bold  group">
         
          <div class="absolute bottom-1 md:bottom-0 left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:translate-y-[-100%] ">
           Menu
          </div>
        
          
          <div className="absolute bottom-[-100%] left-0 w-full text-center transform transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 group-hover:opacity-100 ">
            Menu
          </div>
        </button>
        
        
        
            </div>
            
        )
   }
   
  
   </>
    
  )
}

export default NavBar