import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
