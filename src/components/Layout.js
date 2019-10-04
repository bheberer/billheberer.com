import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyleProvider from './GlobalStyleProvider';
import Header from './Header';
import { lightTheme, darkTheme } from '../styles/themes';
import Toggle from './Toggle';
import SEO from './SEO';

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <SEO />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyleProvider>
          <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header />
          <AnimatePresence exitBeforeEnter>
            {React.cloneElement(children, { setIsDarkMode, isDarkMode })}
          </AnimatePresence>
        </GlobalStyleProvider>
      </ThemeProvider>
    </>
  );
}