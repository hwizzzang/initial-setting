import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import globalStyles from '@styles/global';
import theme from '@styles/theme';

function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
