import React, { useState, useEffect } from 'react';
import styles from './footer.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FooterData } from '../../../../types/footer';

const Footer: React.FC<FooterData> = ({
  footer_columns,
  legal_links,
  social_links,
  company_info,
  up_bottom,
  subscribe_callout,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleColumn = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  return (
    <footer className={styles.footer}>
      {up_bottom && (
        <div className={styles.upBottomContainer}>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.upBottom}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}>
            <p>{up_bottom.upText}</p>
            {up_bottom.arrowUrl && (
              <img src={up_bottom.arrowUrl} alt="Arrow Up" className={styles.arrowImage} />
            )}
          </div>
        </div>
      )}

      {subscribe_callout && (
        <div className={styles.subscribeCallout}>
          <div className={styles.subscribeDescription}>
            <h4>{subscribe_callout.title}</h4>
            {subscribe_callout.description
              ? documentToReactComponents(subscribe_callout.description.json)
              : 'No description provided.'}
          </div>
          {subscribe_callout.buttonText && subscribe_callout.buttonUrl && (
            <a href={subscribe_callout.buttonUrl} className={styles.subscribeButton}>
              {subscribe_callout.buttonText}
            </a>
          )}
        </div>
      )}

      <div className={styles.footerColumns}>
        {footer_columns && footer_columns.length > 0 ? (
          footer_columns.map((col, i) => (
            <div className={styles.footerColumn} key={i}>
              <h4
                className={`${styles.footerTitle} ${isTablet ? styles.clickable : ''} ${
                  openIndexes.includes(i) ? styles.open : ''
                }`}
                onClick={() => isTablet && toggleColumn(i)}>
                <span>{col.title}</span>
                {isTablet && up_bottom?.arrowUrl && (
                  <img src={up_bottom.arrowUrl} alt="Toggle section" className={styles.icon} />
                )}
              </h4>

              <ul
                className={styles.footerLinks}
                style={{
                  display: !isTablet || openIndexes.includes(i) ? 'block' : 'none',
                }}>
                {col.links?.length ? (
                  col.links.map((link, j) =>
                    link.label && link.url ? (
                      <li key={j}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ) : (
                      <li key={j}>Link data is missing.</li>
                    ),
                  )
                ) : (
                  <li>No links available.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No footer columns available.</p>
        )}
      </div>

      <div className={styles.footerBottom}>
        <ul className={styles.footerSocial}>
          {social_links?.length ? (
            social_links.map((s, i) => (
              <li>
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}>
                  <img src={s.icon?.fields?.file?.url || ''} alt={s.platform} />
                </a>
              </li>
            ))
          ) : (
            <p>No social links available.</p>
          )}
        </ul>

        <ul className={styles.footerLegal}>
          {legal_links?.length ? (
            legal_links.map((link, i) =>
              link.label && link.url ? (
                <li>
                  <a key={i} href={link.url}>
                    {link.label}
                  </a>
                </li>
              ) : (
                <p key={i}>Legal link data is missing.</p>
              ),
            )
          ) : (
            <p>No legal links available.</p>
          )}
        </ul>
      </div>

      <div className={styles.footerInfo}>
        {company_info?.json ? (
          documentToReactComponents(company_info.json)
        ) : (
          <p>Company info not available.</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
