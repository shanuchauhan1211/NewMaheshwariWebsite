import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YouTubeChannel from './YoutubeChannel';

const FeatureWork = () => {
  const divRef1 = useRef(null); // Reference for the first div
  const divRef2 = useRef(null); // Reference for the second div
  const divRef3 = useRef(null);

  const [inView1, setInView1] = useState(false); // State for the first div
  const [inView2, setInView2] = useState(false); // State for the second div
  const [inView3, setInView3] = useState(false);
  // Intersection Observer for the first div
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setInView1(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the div is in view
    );

    const currentDiv1 = divRef1.current;
    if (currentDiv1) {
      observer1.observe(currentDiv1);
    }

    return () => {
      if (currentDiv1) {
        observer1.unobserve(currentDiv1);
      }
    };
  }, []);

  // Intersection Observer for the second div
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setInView2(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the div is in view
    );

    const currentDiv2 = divRef2.current;
    if (currentDiv2) {
      observer2.observe(currentDiv2);
    }

    return () => {
      if (currentDiv2) {
        observer2.unobserve(currentDiv2);
      }
    };
  }, []);


  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setInView3(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the div is in view
    );

    const currentDiv3 = divRef3.current;
    if (currentDiv3) {
      observer3.observe(currentDiv3);
    }

    return () => {
      if (currentDiv3) {
        observer3.unobserve(currentDiv3);
      }
    };
  }, []);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id='about' className="h-screen w-full bg-[#c7c8cc]">
      <div className="w-full bg-[#c7c8cc]">
        {/* Sticky Section 1 */}
        <div className="h-[70vh] sticky top-0 z-10 w-full rounded-t-2xl md:flex gap-2 md:gap-4 dm-serif-text-regular px-10">
          <div className="md:w-1/2">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-md md:text-2xl xl:text-3xl px-2"
            >
              "Welcome to Maheshwari Films, where storytelling meets innovation!
              We are a passionate filmmaking company dedicated to creating
              visually stunning, emotionally compelling, and unforgettable
              cinematic experiences."
            </p>
            <div className="flex justify-center h-full w-full">
              <div
                ref={divRef1}
                className={`bg-[#9e9e9e] newexpandable-div mt-[10%] hidden md:block ${
                  inView1 ? 'expandedheight' : ''
                }`}
              ></div>
              <div
                ref={divRef1}
                className={`bg-[#9e9e9e] expandable-div mt-[25%] ${
                  inView1 ? 'newexpanded' : ''
                }`}
              ></div>
            </div>
          </div>
          <div className="md:w-1/2 mt-[15%]">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-md md:text-2xl xl:text-3xl px-2"
            >
              From concept to the final cut, we bring stories to life with
              artistry, precision, and a touch of magic. We transform ideas into
              captivating visual narratives. At the heart of our work is a
              commitment to excellence and a vision to redefine the art of
              filmmaking.
            </p>
          </div>
        </div>

        {/* Sticky Section 2 */}
        <div className="h-[75vh] shadow-[-10px_0_60px_-15px_rgba(0,0,0,0.3)] sticky top-20 z-10 mt-14 lg:mt-2 w-full rounded-t-2xl bg-[#b1b1b6] flex flex-col-reverse md:flex-row gap-0 md:gap-4 dm-serif-text-regular px-10 py-12">
          <div className="md:w-1/2 mt-[15%]">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-sm md:text-2xl xl:text-3xl px-2 py-4"
            >
              🎬 <strong>Produced 15+ blockbuster feature films</strong>, bringing characters and stories to life that have left an indelible mark on the silver screen.<br/>
🎵 <strong>Created 100+ soul-stirring songs</strong>, blending music and storytelling to capture hearts and imaginations.<br/>
📖 <strong>Delivered 8+ thought-provoking short stories</strong>, showcasing the beauty of storytelling in its purest form.
            </p>
          </div>
          <div className="md:w-1/2">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-md md:text-2xl xl:text-3xl px-2"
            >
              In 1993, Maheshwari Films embarked on a journey fueled by passion,
              creativity, and a belief in the power of storytelling. 32 years of
              crafting cinematic experiences, a legacy built on dreams and
              dedication.
            </p>
            <div className="flex md:flex-row-reverse justify-center h-full w-full">
           
              <div
                ref={divRef2}
                className={`bg-[#cacad3] newexpandable-div mt-[10%] hidden md:block ${
                  inView2 ? 'expandedheight' : ''
                }`}
              ></div>
            <div
                ref={divRef2}
                className={`bg-[#cacad3] expandable-div mt-[25%] ${
                  inView2 ? 'newexpanded' : ''
                }`}
              ></div>  
            </div>
          </div>
        </div>

        {/* Sticky Section 3 */}
        <div className="h-[80vh] shadow-[-10px_0_60px_-15px_rgba(0,0,0,0.3)] sticky top-40 z-10 w-full py-10 rounded-t-2xl md:flex gap-2 md:gap-4 dm-serif-text-regular px-10 bg-[#8b8b8f]">
        <div className="md:w-1/2">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-md md:text-2xl xl:text-3xl px-2"
            >
              "Welcome to Maheshwari Films, where storytelling meets innovation!
              We are a passionate filmmaking company dedicated to creating
              visually stunning, emotionally compelling, and unforgettable
              cinematic experiences."
            </p>
            <div className="flex justify-center h-full w-full">
              <div
                ref={divRef3}
                className={`bg-[#b3afaf] newexpandable-div mt-[10%] hidden md:block ${
                  inView3 ? 'expandedheight' : ''
                }`}
              ></div>
              <div
                ref={divRef3}
                className={`bg-[#b3afaf] expandable-div mt-[25%] ${
                  inView3 ? 'newexpanded' : ''
                }`}
              ></div>
            </div>
          </div>
          <div className="md:w-1/2 mt-[15%]">
            <p
              data-aos="fade-up"
              className="bg-slate-50 shadow-2xl rounded-br-3xl text-md md:text-2xl xl:text-3xl px-2"
            >
              From concept to the final cut, we bring stories to life with
              artistry, precision, and a touch of magic. We transform ideas into
              captivating visual narratives. At the heart of our work is a
              commitment to excellence and a vision to redefine the art of
              filmmaking.
            </p>
          </div>
        </div>

        {/* Non-sticky Content */}
        <div className="relative z-20  shadow-[-10px_0_60px_-15px_rgba(0,0,0,0.3)] bg-[#777779]">
          <YouTubeChannel/>
        </div>
      </div>
    </div>
  );
};

export default FeatureWork;
