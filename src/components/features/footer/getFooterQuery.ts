export const GET_FOOTER_QUERY = `
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
      }
      companyInfo {
        json
      }
    }
  }
`;
