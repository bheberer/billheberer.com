import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyleProvider from './GlobalStyleProvider';
import Header from './Header';
import Footer from './Footer';
import { lightTheme } from '../styles/themes';
import SEO from './SEO';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyleProvider>
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 16,
              paddingRight: 16,
              minHeight: '100%'
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: 678
              }}
            >
              <div
                css={{
                  flexGrow: 1,
                  marginTop: 24,
                  width: '100%',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 50px))',
                  gridTemplateRows: 'repeat(auto-fill, minmax(30px, 50px))',
                  gridRowGap: 16,
                  gridColumnGap: 16,
                  display: 'grid',
                  ['@media (max-width: 500px)']: {
                    marginTop: 16
                  }
                }}
              >
                <Header />
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </GlobalStyleProvider>
      </ThemeProvider>
    </>
  );
}
