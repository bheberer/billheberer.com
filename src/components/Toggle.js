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
        display: 'flex',
        alignItems: 'center',
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
          position: 'relative',
          width: 20,
          height: 20,
          left: isDarkMode ? 27 : 2,
          transition: 'all .2s',
          borderRadius: '50%',
          backgroundColor: background,
          zIndex: 2
        }}
      />
      {isDarkMode ? (
        <span
          css={{
            zIndex: 1,
            color: background,
            display: 'block',
            position: 'relative',
            top: 2.5,
            left: -12
          }}
        >
          <FaMoon size="15px" />
        </span>
      ) : (
        <span
          css={{
            color: background,
            display: 'block',
            position: 'relative',
            top: 2.5,
            left: 6,
            zIndex: 1
          }}
        >
          <FaSun size="15px" />
        </span>
      )}
    </span>
  );
}
