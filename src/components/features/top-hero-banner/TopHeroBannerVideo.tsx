'use client';
import { useEffect, useRef, useState } from "react";
import './TopHeroBanner.module.css';

export const TopHeroBannerVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.oneweb.mercedes-benz.com/plugin/workbench/core/7.68.0/workbench/workbench.esm.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="container">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        src="https://www.mercedes-benz.de/content/dam/hq/passengercars/cars/cla/cla-saloon-c174-pi/homepage/01-2025/video/mercedes-benz-cla-c174-homepage-videostage-1920x1920-01-2025.mp4"
        poster="https://www.mercedes-benz.de/content/dam/hq/passengercars/cars/cla/cla-saloon-c174-pi/homepage/01-2025/images/mercedes-benz-cla-c174-homepage-videostage-still-3840x3840-01-2025.jpg/1745918149957.jpg?im=Crop,rect=(0,1066,3840,1707);Resize=(1534,682)"
      ></video>

      <div className="video-controls">
        <button type="button" onClick={handleTogglePlay} dangerouslySetInnerHTML={{ __html: isPlaying ? svgPause : svgPlay }} />
      </div>

      <div className="content">
        <wb-grid>
          <wb-grid-row>
            <wb-grid-col mq1="5">
              <h1 className="wb-heading-xl">Bem vindo à Mercedes-Benz</h1>
              <p className="wb-text-l">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="content-btns">
                <a className="wbx-button wbx-button--translucent wbx-button--large">Secondary Button</a>
                <a className="wbx-button wbx-button--primary wbx-button--large">Primary Button</a>
              </div>
            </wb-grid-col>
          </wb-grid-row>
        </wb-grid>
      </div>

      {!isLoaded && !hasError && (
        <div className="video-loader-overlay">
          <p>Loading...</p>
          <div className="spinner" />
        </div>
      )}

      {hasError && (
        <div className="error-message">
          <p>Erro ao carregar o vídeo.</p>
        </div>
      )}
    </div>
  );
};

const svgPlay = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M16.696 11.567 7.804 6.433a.5.5 0 0 0-.75.433v10.268a.5.5 0 0 0 .75.433l8.892-5.134a.5.5 0 0 0 0-.866z"></path>
  </svg>
`;

const svgPause = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M8 5h3v14H8zm5 0h3v14h-3z"></path>
  </svg>
`;
