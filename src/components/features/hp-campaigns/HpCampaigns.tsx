import { useEffect, useRef } from 'react';
import styles from './HpCampaigns.module.scss';
import dynamic from 'next/dynamic';

const HpCampaignsCard = dynamic(
  () => import('./HpCampaignsCard').then(mod => mod.HpCampaignsCard),
  { ssr: false }
);

export const HpCampaigns = ({ data }: { data: any }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const container = sectionRef.current;
      if (!container) return;

      const gridRow = container.querySelector('wb-grid-row');
      if (gridRow) {
        (gridRow as HTMLElement).style.gridTemplateColumns = 'repeat(auto-fit, minmax(50px, 1fr))';
        (gridRow as HTMLElement).style.gap = '3%';
        (gridRow as HTMLElement).style.marginBottom = '100px';
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const cards = data.cardBlocks || [];

  return (
    <section className={styles.campaignsContainer} ref={sectionRef}>
      <div className={styles.cardContainer}>
        <wb-grid>
          <div className={styles.campaignsHeadline}>
            <wb-heading tag="h1" size="l">{data.title}</wb-heading>
          </div>
          <wb-grid-row>
            {cards
              .filter((card: any) => {
                const fields = card?.fields;
                return (
                  fields?.title ||
                  fields?.description ||
                  fields?.backgroundImage?.fields?.file?.url ||
                  (fields?.link && fields?.link[0]?.fields?.url)
                );
              })
              .map((cardData: any, index: number) => (
                <wb-grid-col key={index} mq1="6" mq3="5" mq4="4">
                  <HpCampaignsCard data={cardData} />
                </wb-grid-col>
              ))}
          </wb-grid-row>
        </wb-grid>
      </div>
    </section>
  );
};
