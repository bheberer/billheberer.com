import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyleProvider from './GlobalStyleProvider';
import Header from './Header';
import { lightTheme } from '../styles/themes';
import SEO from './SEO';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyleProvider>
          <Header />
          {children}
        </GlobalStyleProvider>
      </ThemeProvider>
    </>
  );
}
