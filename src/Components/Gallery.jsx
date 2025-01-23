import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Gallery() {
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false);

  const boxRef = useRef(null);
  const boxref2 = useRef(null);
  const boxref3 = useRef(null);
  const boxref4 = useRef(null);
  const boxref5 = useRef(null);
  const boxref6 = useRef(null);
  const mainRef = useRef(null);
  const textref= useRef(null);

  useLayoutEffect(() => {
    let ScrollTrigger;

    const loadScrollTrigger = async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        setScrollTriggerLoaded(true);
      }
    };

    loadScrollTrigger();

    if (scrollTriggerLoaded) {
      const timeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom top",
          toggleActions: 'play none play reverse',
          pin: true,
          
        },
      });

      timeline1.fromTo(
        textref.current,
        { clipPath: "inset(0 100% 0 0)", scale: 0.8 },
        { clipPath: "inset(0 0% 0 0)", scale: 1.2,opacity:1, duration: 1 },
        "<=0"
      );

      
      timeline1.from(boxRef.current, {
        translateZ: 500,
        opacity: 0,
        x: '0vh',
        y: '70vh',
        rotate:-12
      },1);

      timeline1.from(boxref2.current, {
        translateZ: 500,
        x: '30vh',
        y: '90vh',
        opacity: 0,
        rotate:-3
      }, 1); 

      timeline1.from(boxref3.current, {
        translateZ: 500,
        x: '-30vh',
        y: '90vh',
        opacity: 0,
        rotate:-3
      }, 1); 

      timeline1.from(boxref4.current, {
        translateZ: 500,
        x: '30vh',
        y: '90vh',
        opacity: 0,
        rotate:-6,
      }, 1); 

     
      timeline1.to(boxRef.current, {
        translateZ: 0,
        opacity: 1,
        x: '0vh',
        y: '0vh',
        duration: 1,
        rotate:0,
      }, 1); 

      timeline1.to(boxref2.current, {
        translateZ: 0,
        x: '0vh',
        y: '0vh',
        opacity: 1,
        duration: 0.5,
        rotate:0
      }, 1.5); 

      timeline1.to(boxref3.current, {
        translateZ: 0,
        x: '0vh',
        y: '0vh',
        opacity: 1,
        duration: 1.5,
        rotate:0
      }, 1.3); 

      timeline1.to(boxref4.current, {
        translateZ: 0,
        x: '0vh',
        y: '0vh',
        opacity: 1,
        duration: 2,
        rotate:0
      }, 1.8); 
     
      timeline1.fromTo(boxref5.current,{
        translateZ:500,
        opacity: 0,
        x: '30vh',
        y: '70vh',
        rotate:-3
} , { translateZ:0 , opacity:1 , x:'0vh', y:'0vh', duration:0.5,rotate:0},1.6
)
timeline1.fromTo(boxref6.current,{
  translateZ:500,
  opacity: 0,
  x: '50vh',
  y: '70vh',
  rotate:12,
} , { translateZ:0 , opacity:1 , x:'0vh', y:'0vh', duration:0.5,rotate:0},1.2
)


     
      return () => {
        timeline1.scrollTrigger?.kill();
        timeline1.kill();
      };
    }
  }, [scrollTriggerLoaded]);

  return (
    <>
      <div ref={mainRef} className=' h-screen w-full overflow-hidden dm-serif-text-regular  flex flex-col justify-center items-center'>
      <p ref={textref} className="lg:text-7xl md:text-4xl text-xl  text-[#cac2c2] h-[100px]  relative top-[200px]"> Gallery </p>
        <div className='h-[400px]  w-full z-10 flex justify-center items-center gap-10'>
          <div ref={boxRef}  className="lg:h-[300px] lg:w-[250px] md:h-[180px] md:w-[300px] relative -top-8 left-[70px]  z-10 shadow-md "><img className="object-cover h-full w-full " src="./pic1.JPG" alt="" /></div>
          <div ref={boxref2} className="lg:h-[270px] lg:w-[350px] md:h-[160px] md:w-[500px] relative top-[90px] left-[10px]  shadow-md "><img className="object-cover h-full w-full " src="./pic6.jpeg" alt="" /></div>
          <div ref={boxref3} className="lg:h-[250px] lg:w-[200px]  md:h-[180px] md:w-[400px] relative -left-[20px]   shadow-lg"><img className="object-cover h-full w-full " src="./pic3.jpeg" alt="" /></div>
          <div ref={boxref5} className="lg:h-[250px] lg:w-[350px]  md:h-[150px] md:w-[500px] relative top-[60px] -left-[40px] z-10   shadow-md"><img className="object-cover h-full w-full " src="./pic4.jpeg" alt="" /></div>
          <div ref={boxref6} className="lg:h-[200px] lg:w-[200px]  md:h-[150px] md:w-[500px] relative  -left-[100px]   shadow-md"><img className="object-cover h-full w-full " src="./pic5.jpeg" alt="" /></div>
          <div ref={boxref4} className="lg:h-[200px] lg:w-[250px]  md:h-[150px] md:w-[400px] relative top-[80px]  -left-[170px]  shadow-md"><img className="object-cover h-full w-full " src="./pic2.jpeg" alt="" /></div>
        </div>
      </div>
    </>
  )
}






  