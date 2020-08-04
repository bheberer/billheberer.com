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
          <div css={{ display: 'flex', justifyContent: 'center' }}>
            <div
              css={{
                padding: 16,
                marginTop: 50,
                width: 678,
                minWidth: 200,
                height: 975,
                minheight: 500,
                gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 50px))',
                gridTemplateRows: 'repeat(auto-fill, minmax(30px, 50px))',
                gridRowGap: 16,
                gridColumnGap: 16,
                display: 'grid',
                ['@media (max-width: 500px)']: {
                  marginTop: 0
                }
              }}
            >
              <Header />
              {children}
            </div>
          </div>
        </GlobalStyleProvider>
      </ThemeProvider>
    </>
  );
}
