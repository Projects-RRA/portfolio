"use client";
import { useEffect, useRef } from 'react';

const LazyLoadedVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if ('loading' in HTMLVideoElement.prototype) {
      // Native lazy loading is supported
      video.src = src;
    } else {
      // Fallback for browsers that do not support native lazy loading
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.src = src;
            observer.unobserve(video);
          }
        },
        { rootMargin: '200px' } // Adjust as needed
      );

      observer.observe(video);

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, [src]);

  return (
    <video autoPlay muted loop id="bg-video" ref={videoRef}>
      {/* Add <source> tags if you have multiple video formats */}
      {/* <source src={src} type="video/mp4" /> */}
    </video>
  );
};

export default LazyLoadedVideo;
