import styles from './HpCampaigns.module.scss';

export const HpCampaignsCard = ({ data }: { data: any }) => {
  const { title, description, backgroundImage, link } = data.fields;

  return (
    <div className={styles.campaignCard}>
      <div className={styles.cardImage}>
        <img src={`https:${backgroundImage.fields.file.url}`} />
      </div>
      <div className={styles.textContent}>
        <div>
          <wb-heading tag="h2" size="m">{title}</wb-heading>
        </div>
        <div>
          <wb-text size="l" tag="p">{description}</wb-text>
        </div>
        <div>
          <wb-button href={link?.[0].fields.url} size="l" variant="primary">
            {link?.[0].fields.label}
          </wb-button>
        </div>
      </div>
    </div>
  );
};
