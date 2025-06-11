import dynamic from 'next/dynamic';
import styles from './TopHeroBanner.module.scss';
import { useHasMounted } from '@src/hooks/useHasMounted';

const TopHeroBannerVideo = dynamic(
  () => import('./TopHeroBannerVideo').then(mod => mod.TopHeroBannerVideo),
  { ssr: false }
);

export const TopHeroBanner = ({ data }: { data: any }) => {
  const hasMounted = useHasMounted();
  if (!data || !hasMounted) return null;

  const { title, subtitle, backgroundType, backgroundImage, backgroundVideo, link = [] } = data;

  const backgroundUrl =
  backgroundType === 'video'
    ? `https:${backgroundVideo.fields.file.url}`
    : `https:${backgroundImage.fields.file.url}`;

      console.log("bgVideo:", backgroundVideo, data.backgroundVideo)
      console.log("bgUrl:", backgroundUrl)
  return (
    <section className={styles.heroBanner}>
      <div className={styles.hbContainer}>
      <TopHeroBannerVideo videoSrc={backgroundUrl} />

        <div className={styles.content}>
          <wb-grid>
            <wb-grid-row>
              <wb-grid-col mq6="6" mq3="9" mq1="12">
                <h1 className="wb-heading-xl">{title}</h1>
                <p className="wb-text-l">{subtitle}</p>
                <div className={styles["content-btns"]}>
                  {data.link.map((btn: any, i: number) => (
                    <a
                      key={i}
                      href={btn.fields.url}
                      className={`wbx-button wbx-button--${btn.fields.variant || 'primary'} wbx-button--large`}
                    >
                      {btn.fields.label}
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
