export const ModularBlockRenderer = ({ block }: any) => {
  switch (block.__typename) {
    case 'PageProduct':
      return (
        <div>
          <h3>{block.name}</h3>
          <p>{block.description}</p>
          <p>Price: {block.price}</p>
          {block.featuredProductImage && (
            <img
              src={block.featuredProductImage.url}
              alt={block.featuredProductImage.description || 'Product image'}
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>
      );

    case 'HeroBanner':
      return (
        <div>
          <div>
            <p>Hello its Mercedes </p>
          </div>
        </div>
      );

    default:
      return <div>Unknown block type: {block.__typename}</div>;
  }
};
