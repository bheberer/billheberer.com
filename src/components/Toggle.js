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
            width: 20,
            height: 20,
            left: -12
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
            top: 2.5,
            width: 20,
            height: 20,
            left: 6,
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
