import styles from './HpCampaigns.module.scss';
import { HpCampaignsCard } from './HpCampaignsCard';

export const HpCampaigns = ({ data }: { data: any }) => {

  const cards = data.cardBlocks || [];

  return (
    <section className={styles.campaignsContainer}>
      <div className={styles.cardContainer}>
        <div className="wbx-grid-container">
          <div className={styles.campaignsHeadline} style={{ color: 'var(--wb-text-headline-text-headline-color)' }} >
            <span className="wb-heading-l">{data.title}</span>
          </div>
          <div className={`wbx-grid-row ${styles.campaignsGridRow}`}>
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
                <div className="wbx-grid-col-mq1-6 wbx-grid-col-mq3-5 wbx-grid-col-mq4-4" key={index}>
                  <HpCampaignsCard data={cardData} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
