import { useRef, useState } from "react";
import styles from './TopHeroBanner.module.scss';
import PauseIcon from 'public/assets/svg/pause-icon.svg';
import PlayIcon from 'public/assets/svg/play-icon.svg';

export const TopHeroBannerVideo = ({ videoSrc }: { videoSrc?: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  console.log("videoSrc:", videoSrc)

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

  if (!videoSrc) return null;

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
        src={videoSrc}
        poster="/assets/imgs/banner_poster.png"
      ></video>

      <div className={styles["video-controls"]}>
        <button type="button" onClick={handleTogglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
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
