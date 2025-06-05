import dynamic from 'next/dynamic';
import styles from './TopHeroBanner.module.scss';

const TopHeroBannerVideo = dynamic(
  () => import('./TopHeroBannerVideo').then(mod => mod.TopHeroBannerVideo),
  { ssr: false }
);

export const TopHeroBanner = ({ data }: { data: any }) => {
  if (!data) return null;

  const { title, subtitle, backgroundType, backgroundImage, backgroundVideo, link = [] } = data;

  const backgroundUrl =
    backgroundType === 'video'
      ? backgroundVideo?.url
      : backgroundImage?.url;

  return (
    <section className={styles.heroBanner}>
      <div className={styles.hbContainer}>
        <TopHeroBannerVideo videoSrc={backgroundType === 'video' ? backgroundUrl : undefined} />

        <div className={styles.content}>
          <wb-grid>
            <wb-grid-row>
              <wb-grid-col mq5="5" mq3="9" mq1="12">
                <h1 className="wb-heading-xl">{title}</h1>
                <p className="wb-text-l">{subtitle}</p>
                <div className={styles["content-btns"]}>
                  {link.map((btn: any, i: number) => (
                    <a
                      key={i}
                      href={btn.url}
                      className={`wbx-button wbx-button--${btn.style || 'primary'} wbx-button--large`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </wb-grid-col>
            </wb-grid-row>
          </wb-grid>
        </div>
      </div>
    </section>
  );
};
