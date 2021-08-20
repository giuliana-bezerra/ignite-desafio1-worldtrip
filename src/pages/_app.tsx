import { ChakraProvider } from '@chakra-ui/react';

import makeServer from '../mirage';
import { theme } from '../styles/theme';

import '../styles/globals.css';

makeServer();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
