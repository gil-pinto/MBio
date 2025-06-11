import React from 'react';
import { TopHeroBanner } from './top-hero-banner/TopHeroBanner';

interface ModularBlockRendererProps {
  block: {
    __typename?: string;
    [key: string]: any;
  };
}

export const ModularBlockRenderer: React.FC<ModularBlockRendererProps> = ({ block }) => {
  switch (block.__typename) {
    case 'PageProduct':
      
    console.log('pageproduct in modules:', block)
      return (
        <div>
          <h3>{block.name}</h3>
          <p>{block.description}</p>
          <p>Price: {block.price}</p>
          {block.featuredProductImage?.fields?.file?.url && (
            <img
              src={`https:${block.featuredProductImage.fields.file.url}`}
              alt={block.featuredProductImage.fields.title || 'Product image'}
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>
      );

    case 'HeroBanner':
    console.log('herobanner in modules:', block)
      return (
        <>
          <TopHeroBanner data={block}/>
        </>
        );

    default:
      return <div>Unknown block type: {block.__typename}</div>;
  }
};