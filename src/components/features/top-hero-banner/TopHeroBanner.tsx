import styles from './TopHeroBanner.module.scss';
import Link from 'next/link';
import { TopHeroBannerVideo } from './TopHeroBannerVideo';

export const TopHeroBanner = ({ data }: { data: any }) => {

  if (!data) return null;

  const { title, subtitle, backgroundType, backgroundImage, backgroundVideo = [] } = data;

  const backgroundUrl =
  backgroundType === 'video'
    ? `https:${backgroundVideo.fields.file.url}`
    : `https:${backgroundImage.fields.file.url}`;

  return (
    <section className={styles.heroBanner}>
      <div className={styles.hbContainer}>
      <TopHeroBannerVideo videoSrc={backgroundUrl} />

        <div className={styles.content}>
          <div className="wbx-grid-container">
            <div className="wbx-grid-row">
              <div className="wbx-grid-col-mq1-12 wbx-grid-col-mq3-9 wbx-grid-col-mq6-6 wbx-grid-col-mq9-3 wbx-grid-col-mq12-1">
                <h1 className="wb-heading-xl">{title}</h1>
                <p className="wb-text-l">{subtitle}</p>
                <div className={styles["content-btns"]}>
                  {data.link.map((btn: any, i: number) => (
                    <Link
                      key={i}
                      href={btn.fields.url}
                      className={`wbx-button wbx-button--${btn.fields.variant || 'primary'} wbx-button--large`}
                    >
                      {btn.fields.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
