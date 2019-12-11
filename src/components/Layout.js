import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyleProvider from './GlobalStyleProvider';
import Header from './Header';
// import Footer from './Footer';
import { lightTheme, darkTheme } from '../styles/themes';
import SEO from './SEO';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = value => {
    const valueToStore =
      typeof value === 'function' ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [storedValue, setValue];
}

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <SEO />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyleProvider>
          <Header />
          {React.cloneElement(children, { setIsDarkMode, isDarkMode })}
          {/* <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        </GlobalStyleProvider>
      </ThemeProvider>
    </>
  );
}
