// pages/[slug].tsx (ou outro caminho conforme a sua estrutura)
import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient, Entry } from 'contentful';
import Head from 'next/head';
import { ModularBlockRenderer } from '@src/components/features/renderModules';

function cleanData(value: any, seen = new WeakSet()): any {
  if (value === undefined || value === null) return null;
  if (typeof value !== 'object') return value;

  if (seen.has(value)) {
    return value.sys ? { sys: value.sys } : null;
  }

  seen.add(value);

  if (Array.isArray(value)) {
    return value.map(item => cleanData(item, seen));
  }

  const cleanedObj: any = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      if (key === 'relatedProducts') {
        cleanedObj[key] = value[key].map((rp: any) => ({ sys: rp.sys }));
      } else {
        cleanedObj[key] = cleanData(value[key], seen);
      }
    }
  }
  return cleanedObj;
}
type Params = {
  slug: string[];
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
          const urlPath = item.fields.urlPath as string;
          if (!urlPath) return null;

          const slugArray = urlPath.startsWith('/')
            ? urlPath.slice(1).split('/')
            : urlPath.split('/');

          return { params: { slug: slugArray }, locale };
        })
        .filter(Boolean),
    ) ?? [];

  return {
    paths,
    fallback: false,
  };
};

async function getGenericContentPageData(slug: string, locale: string) {
  const entries = await contentfulClient.getEntries({
    content_type: 'genericContentPage',
    'fields.urlPath': slug,
    locale,
    limit: 1,
  });

  return entries.items[0]?.fields || null;
}

export const getStaticProps: GetStaticProps<{ pageData: any }, Params> = async ({
  params,
  locale,
}) => {
  const slugArray = params?.slug ?? [];
  const slug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray;
  const currentLocale = locale ?? 'en-US';

  let pageData = await getGenericContentPageData(slug, currentLocale);

  if (!pageData) {
    return { notFound: true };
  }

  pageData = cleanData(pageData);

  return {
    props: { pageData },
  };
};

const Page = ({ pageData }: { pageData: any }) => {
  const modularBlocks = pageData.modularBlocksCollection?.items ?? pageData.modularBlocks ?? [];

  const enrichedBlocks = modularBlocks
    .filter((block: any) => block != null)
    .map((block: any) => {
      const contentTypeId = block.sys?.contentType?.sys?.id || 'unknown';
      const __typename = contentTypeId.charAt(0).toUpperCase() + contentTypeId.slice(1);
      return {
        __typename,
        ...block.fields,
      };
    });

  return (
    <>
      <Head>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.seoDescription} />
      </Head>

      <main>
        <h1>{pageData.pageTitle}</h1>

        {enrichedBlocks.length > 0 ? (
          <ul>
            {enrichedBlocks.map((block, index) => (
              <li key={block.sys?.id ?? index}>
                <ModularBlockRenderer block={block} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No blocks to display</p>
        )}
      </main>
    </>
  );
};

export default Page;
