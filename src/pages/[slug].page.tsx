import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient, Entry } from 'contentful';
import Head from 'next/head';
import { getGenericContentPageData } from './getpages';
import { ModularBlockRenderer } from '@src/components/features/renderModules';

type Params = {
  slug: string;
};

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

export const getStaticPaths: GetStaticPaths<Params> = async ({ locales }) => {
  const entries = await contentfulClient.getEntries({
    content_type: 'genericContentPage',
  });

  const paths =
    (locales ?? []).flatMap(locale =>
      (entries.items as Entry<any>[])
        .map(item => {
          const slug = item.fields.urlPath as string;
          return slug ? { params: { slug }, locale } : null;
        })
        .filter(Boolean),
    ) ?? [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ pageData: any }, Params> = async ({
  params,
  locale,
}) => {
  const slug = params?.slug ?? '';
  const currentLocale = locale ?? 'en-US';

  const pageData = await getGenericContentPageData(slug, currentLocale);

  if (!pageData) {
    return { notFound: true };
  }

  return {
    props: { pageData },
  };
};

const Page = ({ pageData }: { pageData: any }) => {
  const {
    modularBlocksCollection: { items: modularBlocks = [] } = {},
    pageTitle,
    seoTitle,
    seoDescription,
  } = pageData;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main>
        <h1>{pageTitle}</h1>

        {modularBlocks.length > 0 && (
          <ul>
            {modularBlocks.map((block: { sys: { id: string } }, index: number) => (
              <li key={block.sys?.id ?? index}>
                <ModularBlockRenderer block={block} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Page;
