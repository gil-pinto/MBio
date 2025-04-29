import React from 'react';
import styles from './footer.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FooterData } from '../../../../types/footer';

const Footer: React.FC<FooterData> = ({
  footer_columns,
  legal_links,
  social_links,
  company_info,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        {footer_columns && footer_columns.length > 0 ? (
          footer_columns.map((col, i) => (
            <div className={styles.footerColumn} key={i}>
              <h4 className={styles.footerTitle}>{col.title}</h4>
              <ul className={styles.footerLinks}>
                {col.links && col.links.length > 0 ? (
                  col.links.map((link, j) => {
                    if (!link.label || !link.url) {
                      return <li key={j}>Link data is missing.</li>;
                    }
                    return (
                      <li key={j}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    );
                  })
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
        <div className={styles.footerSocial}>
          {social_links && social_links.length > 0 ? (
            social_links.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <img src={s.icon?.fields?.file?.url || ''} alt={s.platform} />
              </a>
            ))
          ) : (
            <p>No social links available.</p>
          )}
        </div>

        <div className={styles.footerLegal}>
          {legal_links && legal_links.length > 0 ? (
            legal_links.map((link, i) => {
              if (!link.label || !link.url) {
                return <p key={i}>Legal link data is missing.</p>;
              }
              return (
                <a key={i} href={link.url}>
                  {link.label}
                </a>
              );
            })
          ) : (
            <p>No legal links available.</p>
          )}
        </div>
      </div>

      <div className={styles.footerInfo}>
        <p>
          {company_info && company_info
            ? documentToReactComponents(company_info.json)
            : 'Company info not available.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
