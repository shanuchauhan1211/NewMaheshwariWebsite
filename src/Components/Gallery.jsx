import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Gallery() {
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false);

  const mainRef = useRef(null);
  const textref = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    { id: 1, src: "./pic1.JPG", alt: "Image 1" },
    { id: 2, src: "./pic6.jpeg", alt: "Image 2" },
    { id: 3, src: "./pic3.jpeg", alt: "Image 3" },
    { id: 4, src: "./pic4.jpeg", alt: "Image 4" },
    { id: 5, src: "./pic5.jpeg", alt: "Image 5" },
    { id: 6, src: "./pic2.jpeg", alt: "Image 6" },
  ];

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
          toggleActions: "play none play reverse",
          pin: true,
        },
      });

      timeline1.fromTo(
        textref.current,
        { clipPath: "inset(0 100% 0 0)", scale: 0.8 },
        { clipPath: "inset(0 0% 0 0)", scale: 1.2, opacity: 1, duration: 1 },
        "<=0"
      );

      // Animate all images
      images.forEach((_, index) => {
        timeline1.fromTo(
          imageRefs.current[index],
          {
            translateZ: 500,
            opacity: 0,
            x: `${index % 2 === 0 ? "30vh" : "-30vh"}`,
            y: "70vh",
            rotate: index % 2 === 0 ? -5 : 5,
          },
          {
            translateZ: 0,
            opacity: 1,
            x: "0vh",
            y: "0vh",
            rotate: 0,
            duration: 1.5,
            delay: index * 0.2,
          },
          1
        );
      });

      return () => {
        timeline1.scrollTrigger?.kill();
        timeline1.kill();
      };
    }
  }, [scrollTriggerLoaded]);

  return (
    <>
      <div
        ref={mainRef}
        className="h-1/2 md:h-screen w-full overflow-hidden dm-serif-text-regular flex flex-col justify-center items-center"
      >
        <p
          ref={textref}
          className="lg:text-7xl md:text-4xl text-xl text-[#cac2c2] h-[100px] relative xl:top-[200px]  top-[40px]"
        >
          Gallery
        </p>

        {/* Desktop View */}
        <div className="h-[400px] hidden xl:flex w-full z-10 justify-center items-center gap-10">
        <Swiper spaceBetween={20} slidesPerView={4} centeredSlides>  {images.map((image, index) => (
          <SwiperSlide key={image.id}> <div
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`lg:h-[${index % 2 === 0 ? "300px" : "200px"}] lg:w-[${
                index % 2 === 0 ? "300px" : "350px"
              }] relative ${
                index % 2 === 0 ? "top-[60px]" : "top-[80px]"
              } shadow-md`}
            >
              <img
                className="object-cover  hover:scale-125 duration-200  h-full w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            </SwiperSlide> 
          ))}
          </Swiper>
        </div>

        {/* Mobile and Medium Screens */}
        <div className="h-[400px] xl:hidden w-full z-10">
          <Swiper spaceBetween={20} slidesPerView={3} centeredSlides>
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  className="object-cover object-center h-full w-full rounded-md shadow-md"
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
