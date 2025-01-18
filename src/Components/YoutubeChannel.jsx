import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./hero.css"

const YouTubeChannel = () => {
  const [videos, setVideos] = useState([]);
  const divRef = useRef(null);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
  
  const MAX_RESULTS = 10;                

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              part: "snippet",
              order: "date",
              maxResults: MAX_RESULTS,
            }
          }
        );
        setVideos(response.data.items);
        console.log(response)
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

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
    <div className="p-10 flex flex-col gap-10 dm-serif-text-regular text-[#ece6e6]" >
   <div> <p className=" text-md md:text-4xl lg:text-7xl">WORK</p>  <div ref={divRef} className={`h-[2px] bg-white expandable-div mt-1 ${inView?'expanded':''}`}></div></div>   
      <div className="flex flex-wrap justify-evenly gap-1" >
        {videos.map((video,index) => (
          video.id.videoId && ( // Check if videoId exists
            <div  key={video.id.videoId}>
                 <p className="mb-5"> {index+1}. {video.snippet.title}</p>
                 
              <iframe className={`h-[200px] w-[240px] md:w-[380px] ${index+1==1||index+1==6?'md:h-[400px] md:w-[500px]':''} `}
               
                src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id.videoId}`}
                title={video.snippet.title}
                
                allow=" autoplay "
                allowFullScreen
              ></iframe>
             
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannel;
