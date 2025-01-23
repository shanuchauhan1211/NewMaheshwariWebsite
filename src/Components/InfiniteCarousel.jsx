import React, { useState, useEffect, useRef } from 'react';

import './infinite.css';

const InfiniteCarousel = () => {
    const data = [
        { name: "Slide 1", url: "", description: "some1" },
        { name: "Slide 2", url: "", description: "some2" },
        { name: "Slide 3", url: "", description: "some3" },
        { name: "Slide 4", url: "", description: "some4" },
        
    ];

    const initial = {
        value: 1,
        direction: "",
        translate: 280,
    };

    const divRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(initial);
    const [animate, setAnimate] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const updateMobileStatus = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMobileStatus);
        return () => {
            window.removeEventListener("resize", updateMobileStatus);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex.value < data.length - 1) {
            setCurrentIndex((prev) => ({
                ...prev,
                value: prev.value + 1,
                direction: "right",
                translate: prev.translate - (isMobile ? 580 : 600), // Adjust for mobile
            }));
        }
    };

    const handlePrev = () => {
        if (currentIndex.value > 0) {
            setCurrentIndex((prev) => ({
                ...prev,
                value: prev.value - 1,
                direction: "left",
                translate: prev.translate + (isMobile ? 580: 600), // Adjust for mobile
            }));
        }
    };

    const transformValue = `translateX(${currentIndex.translate}px)`;

    useEffect(() => {
        setAnimate(true);

        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentIndex.value]);

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
            { threshold: 0.1 }
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
        <div className=" h-[100vh] w-full overflow-hidden flex flex-col justify-around items-center dm-serif-text-regular ">
            <div className="w-full px-10">
                <p className="text-2xl md:text-4xl lg:text-7xl text-[#cac2c2]">Upcoming</p>
                <div
                    ref={divRef}
                    className={`h-[2px] bg-white mt-2 expandable-div ${
                        inView ? "expanded" : ""
                    }`}
                ></div>
            </div>
            <div className="h-[400px] flex justify-center items-center overflow-hidden">
                <div
                    className="flex md:gap-[400px] gap-[388px] transition-transform duration-500"
                    style={{ transform: transformValue }}
                >
                    {data.map((slide, index) => (
                        <div
                            style={{
                                transform: `translateY(${
                                    currentIndex.value === index ? "40px" : "-10px"
                                }) rotate(${currentIndex.value === index ? `6deg` : `0deg`})`,
                            }}
                            className={`duration-300 rounded-xl ${
                                index === currentIndex.value
                                    ? `h-[280px] w-[230px] `
                                    : `h-[250px] w-[200px] `
                            } flex items-center justify-center bg-gray-300 border-r-2 border-white`}
                            key={index}
                        >
                            {slide.name}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-around h-[150px] w-full">
                <div>
                    <button
                        className="md:h-[40px] h-[25px] w-[25px] md:w-[40px] pl-[7px] mr-4 rounded-full border"
                        onClick={handlePrev}
                    >
                        <img src="./left.svg" alt="" />
                    </button>
                    <button
                        className="md:h-[40px] h-[25px] w-[25px] md:w-[40px] pl-[7px] rounded-full border"
                        onClick={handleNext}
                    >
                        <img className="rotate-[180deg]" src="./left.svg" alt="" />
                    </button>
                </div>

                <div className="lg:h-[200px] md:h-[150px] md:w-[220px] lg:w-[300px] h-[100px] w-[150px] relative rounded-lg lg:-top-[50px] bg-white">
                    <p className={`${animate ? "slide-up" : ""}`}>
                        {data[currentIndex.value].name}
                    </p>
                    <p className={`${animate ? "slide-up" : ""}`}>
                        {data[currentIndex.value].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfiniteCarousel;
