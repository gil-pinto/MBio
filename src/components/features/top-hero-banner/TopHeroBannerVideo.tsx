'use client';
import { useRef, useState } from "react";
import styles from './TopHeroBanner.module.scss';
import PauseIcon from 'public/assets/svg/pause-icon.svg';
import PlayIcon from 'public/assets/svg/play-icon.svg';

export const TopHeroBannerVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <div className={styles.container}>
      <video
        className={styles.video}
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        src="/assets/videos/banner_video.mp4"
        poster="/assets/imgs/banner_poster.png"
      ></video>

      <div className={styles["video-controls"]}>
        <button type="button" onClick={handleTogglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div className={styles.content}>
        <wb-grid>
          <wb-grid-row>
            <wb-grid-col mq5="5" mq3="9" mq1="12">
              <h1 className="wb-heading-xl">Bem vindo à Mercedes-Benz</h1>
              <p className="wb-text-l">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className={styles["content-btns"]}>
                <a className="wbx-button wbx-button--translucent wbx-button--large">Secondary Button</a>
                <a className="wbx-button wbx-button--primary wbx-button--large">Primary Button</a>
              </div>
            </wb-grid-col>
          </wb-grid-row>
        </wb-grid>
      </div>

      {!isLoaded && !hasError && (
        <div className={styles["video-loader-overlay"]}>
          <p>Loading...</p>
          <div className={styles.spinner} />
        </div>
      )}

      {hasError && (
        <div className={styles["error-message"]}>
          <p>Erro ao carregar o vídeo.</p>
        </div>
      )}
    </div>
  );
};