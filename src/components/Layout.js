import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyleProvider from './GlobalStyleProvider';
import Header from './Header';
import { lightTheme, darkTheme } from '../styles/themes';

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyleProvider>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <AnimatePresence exitBeforeEnter>
          {React.cloneElement(children, { setIsDarkMode, isDarkMode })}
        </AnimatePresence>
      </GlobalStyleProvider>
    </ThemeProvider>
  );
}
