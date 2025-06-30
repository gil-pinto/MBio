import { Box } from '@chakra-ui/react';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { SeoFields } from '@src/components/features/seo';
import { client, previewClient } from '@src/lib/client';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';
import { TopHeroBanner } from '@src/components/features/top-hero-banner/TopHeroBanner';
import { HpCampaigns } from '@src/components/features/hp-campaigns/HpCampaigns';

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();
  const page = useContentfulLiveUpdates(props.page);

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <TopHeroBanner data={page.TopHeroBanner} />
    </>
  );  
};

export const getServerSideProps: GetServerSideProps = async ({ locale, preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const data = await gqlClient.pageLandingCollection({ locale, preview });

    const page = data.pageLandingCollection?.items[0];

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        page,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
