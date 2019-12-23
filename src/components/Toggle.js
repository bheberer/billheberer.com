import React from 'react';
import { useTheme } from 'emotion-theming';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Toggle({ isDarkMode, setIsDarkMode }) {
  const { colors } = useTheme();

  const { primary, primaryDark, background } = colors;

  return (
    <span
      role="switch"
      aria-checked={isDarkMode}
      aria-label="dark mode toggle"
      tabIndex={0}
      css={{
        display: 'inline-block',
        position: 'relative',
        width: 50,
        height: 24,
        backgroundColor: primary,
        marginLeft: 'auto',
        marginRight: 15,
        borderRadius: '50px',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          backgroundColor: primaryDark
        }
      }}
      onClick={() => setIsDarkMode(!isDarkMode)}
      onKeyUp={e => {
        [' ', 'Enter'].includes(e.key) && setIsDarkMode(!isDarkMode);
      }}
    >
      <span
        css={{
          position: 'absolute',
          width: 20,
          height: 20,
          top: 2,
          transform: `translateX(${isDarkMode ? '2px' : '27px'})`,
          transition: 'all .2s',
          margin: 'auto',
          borderRadius: '50%',
          backgroundColor: background
        }}
      />
      <span
        css={{
          position: 'absolute',
          color: background,
          width: 15,
          height: 15,
          top: 4.5,
          transform: `translateX(${isDarkMode ? '27px' : '5px'})`,
          transition: 'all .2s',
          margin: 'auto'
        }}
      >
       {isDarkMode ? <FaMoon size="15px" /> : <FaSun size="15px" />} 
      </span>
    </span>
  );
}
