// src/lib/getFooter.ts
import { GraphQLClient } from 'graphql-request';

const getClient = () => {
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

  return new GraphQLClient(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
};

const GET_FOOTER_QUERY = `
  query GetFooter($id: String!, $locale: String) {
    footer(id: $id, locale: $locale) {
      upBottom {
        __typename
        ... on UpBottom {
          upText
          arrow {
            url
          }
          url
        }
      }
      subscribeCallout {
        __typename
        ... on SubscriptionCallout {
          title
          description {
            json
          }
          buttonText
          buttonUrl
        }
      }
      footerColumnsCollection {
        items {
          title
          linksCollection {
            items {
              ... on Link {
                label
                url
              }
            }
          }
        }
      }
      legalLinksCollection {
        items {
          ... on Link {
            label
            url
          }
        }
      }
      socialLinksCollection {
        items {
          platform
          url
          icon {
            url
          }
        }
      }      companyInfo {
        json
      }
    }
  }
`;

const ENTRY_ID = '2nEzgazLBWtpkolmjrve55';

export const getFooterData = async (locale: string = 'en-US') => {
  const client = getClient();

  const variables = {
    id: ENTRY_ID,
    locale,
  };

  const data = await client.request(GET_FOOTER_QUERY, variables);
  return data.footer;
};
