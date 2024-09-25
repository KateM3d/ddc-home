import React, { useEffect, useState } from "react";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import "./carousel.scss";

const Carousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video2, video3, video4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="carousel-container">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`carousel-video ${index === currentVideo ? "active" : ""}`}
          src={video}
          autoPlay
          muted
          loop
        />
      ))}
    </div>
  );
};

export default Carousel;
