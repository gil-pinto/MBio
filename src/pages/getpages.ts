import { GraphQLClient, gql } from 'graphql-request';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export async function getGenericContentPageData(slug: string, locale: string) {
  const query = gql`
    query GetGenericContentPage($slug: String!, $locale: String!) {
      genericContentPageCollection(where: { urlPath: $slug }, locale: $locale, limit: 1) {
        items {
          pageTitle
          urlPath
          seoTitle
          seoDescription
          sys {
            id
          }
          modularBlocksCollection(locale: $locale) {
            items {
              __typename

              ... on PageProduct {
                sys {
                  id
                }
                internalName
                name
                description
                price
                slug
                featuredProductImage {
                  url
                  description
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = { slug, locale };
  const response = await client.request(query, variables);

  return response.genericContentPageCollection.items[0];
}
