import React from 'react';
import { Flex, useTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../header';
import Footer from '@src/components/features/footer/footer';
import { RawFooterData, FooterData } from '../../../../types/footer';

interface LayoutPropsInterface {
  children: React.ReactNode;
  footerData: RawFooterData;
}

export const Layout = ({ children, footerData }: LayoutPropsInterface) => {
  const router = useRouter();
  const theme = useTheme();
  const isHomePage = router.pathname === '/';

  const transformedFooterData: FooterData = {
    footer_columns:
      footerData.footerColumnsCollection?.items?.map((col: any) => ({
        title: col.title ?? 'Untitled',
        links:
          col.linksCollection?.items?.map((link: any) => ({
            label: link.label ?? 'Missing label',
            url: link.url ?? '#',
          })) ?? [],
      })) ?? [],
    legal_links:
      footerData.legalLinksCollection?.items?.map((link: any) => ({
        label: link.label ?? 'Missing label',
        url: link.url ?? '#',
      })) ?? [],
    social_links:
      footerData.socialLinksCollection?.items?.map((social: any) => ({
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
    company_info: footerData.companyInfo ?? null,
    up_bottom: footerData.upBottom
      ? {
          upText: footerData.upBottom.upText ?? '',
          arrowUrl: footerData.upBottom.arrow?.url ?? '',
          url: footerData.upBottom.url ?? '',
        }
      : null,
    subscribe_callout: footerData.subscribeCallout
      ? {
          title: footerData.subscribeCallout.title ?? '',
          description: footerData.subscribeCallout.description ?? null,
          buttonText: footerData.subscribeCallout.buttonText ?? '',
          buttonUrl: footerData.subscribeCallout.buttonUrl ?? '#',
        }
      : null,
  };

  return (
    <>
      <Header
        borderBottom={isHomePage ? '' : '1px'}
        borderColor={isHomePage ? undefined : theme.f36?.gray200}
      />
      <Flex flexGrow="1" flexDirection="column" width="100%" as="main" pb={{ base: 8, lg: 12 }}>
        {children}
      </Flex>
      <Footer {...transformedFooterData} />
    </>
  );
};
