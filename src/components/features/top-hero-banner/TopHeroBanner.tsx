import dynamic from 'next/dynamic';
import styles from './TopHeroBanner.module.css'

const TopHeroBannerVideo = dynamic(() => import('./TopHeroBannerVideo').then(mod => mod.TopHeroBannerVideo), {
  ssr: false,
});

export const TopHeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className="hb-container">
        <TopHeroBannerVideo />
      </div>
    </section>
  );
};
