import React from 'react';
import { TopHeroBanner } from './top-hero-banner/TopHeroBanner';
import { OwcTextMedia } from './owc-text-media-module/owcTextMediaModule';
import { HpCampaigns } from './hp-campaigns/HpCampaigns';

interface ModularBlockRendererProps {
  block: {
    __typename?: string;
    [key: string]: any;
  };
}

export const ModularBlockRenderer: React.FC<ModularBlockRendererProps> = ({ block }) => {
  switch (block.__typename) {
    
    case 'PageProduct':
      console.log('pageproduct in modules:', block);
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
      return (
        <section>
          <TopHeroBanner data ={block}/>
        </section>
      );


    case 'OwcTextMediaModule':
      return (
        <>
          <OwcTextMedia data={block} />
        </>
      );

      case 'HpCampaignsContainer':
        console.log('hp campaign in modules:', block)
        return(
          <section>
            <HpCampaigns data={block} />
          </section>
        );

    default:
      return <div>Unknown block type: {block.__typename}</div>;
  }
};
