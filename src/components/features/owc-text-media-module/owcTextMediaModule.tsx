import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './OwcTextMedia.module.scss';

export const OwcTextMedia = ({ data }: { data: any }) => {
  const imageUrl = data.picture?.fields?.file?.url || '';
  const imageAlt = data.picture?.fields?.title || '';
  const title = data.headline;
  const subtitle = data.label;
  const links = Array.isArray(data.link) ? data.link : [data.link];

  return (
    <section className={styles.heroBanner}>
      <div className={styles.hbContainer}>
        {imageUrl && (
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={imageAlt} className={styles.image} />
          </div>
        )}

        <div className={styles.content}>
          {subtitle && <p className="wb-text-l">{subtitle}</p>}
          <div className="wbx-grid-container">
            <div className="wbx-grid-row">
              <div className="wbx-grid-col-mq1-12 wbx-grid-col-mq3-9 wbx-grid-col-mq6-6 wbx-grid-col-mq9-3 wbx-grid-col-mq12-1">
                {title && <h1 className="wb-heading-xl">{title}</h1>}
                {data.richTextBody && (
                  <div className="wb-text-l">{documentToReactComponents(data.richTextBody)}</div>
                )}
                <div className={styles['content-btns']}>
                  {links.map((btn: any, i: number) => (
                    <Link
                      key={i}
                      href={btn.fields.url}
                      className={`wbx-button wbx-button--${
                        btn.fields.linkVariant || 'primary'
                      } wbx-button--large`}>
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
