import { ChakraProvider } from '@chakra-ui/react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import localFont from '@next/font/local';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Layout } from '@src/components/templates/layout';
import { theme } from '@src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';
import App, { AppContext } from 'next/app';
import { getFooterData } from '@src/components/features/footer/getFooter';

const spaceGrotesk = localFont({
  src: [
    {
      path: './utils/fonts/space-grotesk-v13-latin-300.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-500.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-600.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-700.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './utils/fonts/space-grotesk-v13-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps & { pageProps: any }) {
  const router = useRouter();

  return (
    <ContentfulLivePreviewProvider
      locale={router.locale || 'en-US'}
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}>
      <ChakraProvider
        theme={{
          ...theme,
          fonts: {
            heading: `${spaceGrotesk.style.fontFamily}, ${theme.fonts.heading}`,
            body: `${spaceGrotesk.style.fontFamily}, ${theme.fonts.body}`,
          },
        }}>
        <Layout footerData={pageProps.footerData}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ContentfulLivePreviewProvider>
  );
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const locale = appContext.ctx?.locale || 'en';
  const footerData = await getFooterData(locale);

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      footerData,
    },
  };
};

export default appWithTranslation(MyApp);
