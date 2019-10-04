import React from 'react';
import feather from 'feather-icons';
import { useTheme } from 'emotion-theming';

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
        display: 'block',
        width: 50,
        height: 25,
        backgroundColor: primary,
        marginLeft: 'auto',
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
          display: 'block',
          position: 'relative',
          width: 22,
          height: 22,
          top: 1.5,
          left: isDarkMode ? 26 : 2,
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
            top: -17,
            width: 20,
            height: 20,
            left: 7
          }}
          dangerouslySetInnerHTML={{
            __html: feather.icons['moon'].toSvg({
              ['stroke-width']: 2.5,
              width: 15,
              height: 15
            })
          }}
        />
      ) : (
        <span
          css={{
            color: background,
            display: 'block',
            position: 'relative',
            top: -17,
            width: 20,
            height: 20,
            left: 28,
            zIndex: 1
          }}
          dangerouslySetInnerHTML={{
            __html: feather.icons['sun'].toSvg({
              ['stroke-width']: 2.5,
              width: 15,
              height: 15
            })
          }}
        />
      )}
    </span>
  );
}
