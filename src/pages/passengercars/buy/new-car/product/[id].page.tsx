import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient } from 'contentful';
import Head from 'next/head';
import { ProductDetailPage } from '@src/components/features/product-detail/ProductDetailPage';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries({ content_type: 'productDetailPage' });

  const paths = entries.items.map((item: any) => {
    const slug = item.fields.urlPath?.split('/').pop(); // extrai o último segmento como ID
    return { params: { id: slug } };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const entries = await client.getEntries({
    content_type: 'productDetailPage',
    'fields.urlPath[match]': id,
    include: 10,
  });

  const page = entries.items[0];

  console.log('page, entries.items[0]', page, entries.items[0])

  if (!page) return { notFound: true };

  const fields = page.fields;

  console.log('fields, page.fields', fields, page.fields)

  return {
    props: {
      productId: id,
      title: fields.pageTitle ?? null,
      seoTitle: fields.seoTitle ?? null,
      seoDescription: fields.seoDescription ?? null,
    },
  };
};

const ProductDetailPageWrapper = ({ productId, title, seoTitle, seoDescription }: any) => (
  <>
    <Head>
      <title>{seoTitle || 'Product Detail Page'}</title>
      <meta name="description" content={seoDescription || ''} />
    </Head>

    <ProductDetailPage productId={productId} title={title} />
  </>
);

export default ProductDetailPageWrapper;
