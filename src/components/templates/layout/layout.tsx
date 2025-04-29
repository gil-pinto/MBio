import React from 'react';
import { Flex, useTheme, Spinner, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../header';
import Footer from '@src/components/features/footer/footer';
import useFooterData from '@src/components/features/footer/getFooter';

interface LayoutPropsInterface {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  const router = useRouter();
  const theme = useTheme();
  const isHomePage = router.pathname === '/';

  const { footerData, loading, error } = useFooterData();

  return (
    <>
      <Header
        borderBottom={isHomePage ? '' : '1px'}
        borderColor={isHomePage ? undefined : theme.f36?.gray200}
      />

      <Flex flexGrow="1" flexDirection="column" width="100%" as="main" pb={{ base: 8, lg: 12 }}>
        {children}
      </Flex>

      {loading && (
        <Center py={8}>
          <Spinner size="lg" />
        </Center>
      )}

      {error && (
        <Center py={4} color="red.500">
          Error loading footer: {error.message}
        </Center>
      )}

      {!loading && footerData && <Footer {...footerData} />}
    </>
  );
};
