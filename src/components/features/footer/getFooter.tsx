import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GET_FOOTER_QUERY } from './getFooterQuery';
import { FooterData } from '../../../../types/footer';

const ENTRY_ID = '2nEzgazLBWtpkolmjrve55';
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const useFooterData = () => {
  const { locale } = useRouter();
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: GET_FOOTER_QUERY,
              variables: {
                id: ENTRY_ID,
                locale: locale ?? 'en',
              },
            }),
          },
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch footer: ${errorText}`);
        }

        const { data } = await response.json();
        const footer = data?.footer;

        if (!footer) {
          throw new Error('No footer data found');
        }

        const parsedFooter: FooterData = {
          footer_columns:
            footer.footerColumnsCollection?.items?.map((col: any) => ({
              title: col.title ?? 'Untitled',
              links:
                col.linksCollection?.items?.map((link: any) => ({
                  label: link.label ?? 'Missing label',
                  url: link.url ?? '#',
                })) ?? [],
            })) ?? [],
          legal_links:
            footer.legalLinksCollection?.items?.map((link: any) => ({
              label: link.label ?? 'Missing label',
              url: link.url ?? '#',
            })) ?? [],
          social_links:
            footer.socialLinksCollection?.items?.map((social: any) => ({
              platform: social.platform ?? 'Unknown',
              url: social.url ?? '#',
              icon: {
                fields: {
                  file: {
                    url: social.icon?.url ?? '',
                  },
                },
              },
            })) ?? [],
          company_info: footer.companyInfo ?? null,
        };

        setFooterData(parsedFooter);
      } catch (err: any) {
        console.error('Error fetching footer:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, [locale]);

  return { footerData, loading, error };
};

export default useFooterData;
