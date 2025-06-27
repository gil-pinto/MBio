import React, { useEffect } from 'react';
import { useHasMounted } from '../../../hooks/useHasMounted';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const OwcTextMedia = ({ data }: { data: any }) => {
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted) return;

    let interval: NodeJS.Timeout;

    const applyStyles = () => {
      const teaser = document.querySelector('wb-banner-teaser');

      if (teaser?.shadowRoot) {
        const wrapper = teaser.shadowRoot.querySelector('.wrapper');
        const wbAspectRatio = teaser.shadowRoot.querySelector('.wb-aspect-ratio');
        const content = teaser.shadowRoot.querySelector('.content');

        if (wrapper) {
          wrapper.style.display = 'flex';
          wrapper.style.flexDirection = 'row-reverse';
          wrapper.style.justifyContent = 'space-around';
        }

        if (wbAspectRatio) {
          (wbAspectRatio as HTMLElement).style.width = '40%';
        }

        if (content) {
          (content as HTMLElement).style.width = '40%';
        }

        clearInterval(interval);
      }
    };

    interval = setInterval(applyStyles, 100);

    return () => {
      clearInterval(interval);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <div>
      <div data-on="main">
        <wb-banner-teaser
          image-src={data.picture.fields.file.url}
          image-label={data.picture.fields.title}
          image-ratio="1x1"
          top-padding="">
          <wb-text size="m">{data.label}</wb-text>
          <wb-heading tag="h2" size="l">
            {data.headline}
          </wb-heading>
          <wb-text size="l" tag="p">
            {documentToReactComponents(data.richTextBody)}
          </wb-text>
          <wb-button slot="footer" size="l" variant={data.link.fields.linkVariant}>
            {data.link.fields.label}
          </wb-button>
        </wb-banner-teaser>
      </div>
    </div>
  );
};
