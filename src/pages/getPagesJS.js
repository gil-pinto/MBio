import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchAllEntries(contentType, queryParams = {}) {
  const allItems = [];
  let skip = 0;
  const limit = 100;
  let total = 0;

  do {
    const response = await client.getEntries({
      content_type: contentType,
      skip,
      limit,
      ...queryParams,
    });

    allItems.push(...response.items);
    total = response.total;
    skip += limit;
  } while (skip < total);

  return allItems;
}
