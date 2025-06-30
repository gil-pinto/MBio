import styles from './HpCampaigns.module.scss';

export const HpCampaignsCard = ({ data }: { data: any }) => {
  const { title, description, backgroundImage, link } = data.fields || {};

  const hasDescription = !!description;
  const hasLink = link?.[0]?.fields?.url && link?.[0]?.fields?.label;
  const hasImage = backgroundImage.fields.file.url;

  return (
    <div className={styles.campaignCard}>
      {hasImage && (
        <div className={styles.cardImage}>
          <img src={`https:${backgroundImage.fields.file.url}`} />
        </div>
      )}

      <div className={styles.textContent}>
        {title && (
          <div>
            <wb-heading tag="h2" size="m">{title}</wb-heading>
          </div>
        )}

        {hasDescription && (
          <div>
            <wb-text size="l" tag="p">{description}</wb-text>
          </div>
        )}

        {hasLink && (
          <div>
            <wb-button href={link[0].fields.url} size="l" variant="primary">
              {link[0].fields.label}
            </wb-button>
          </div>
        )}
      </div>
    </div>
  );
};
