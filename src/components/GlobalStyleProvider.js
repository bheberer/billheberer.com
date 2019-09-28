import React from 'react';
import { Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export default function GlobalStyleProvider({ children }) {
  const { colors } = useTheme();

  const { primaryDark, primary, background } = colors;

  return (
    <>
      <Global
        styles={{
          body: {
            backgroundColor: background,
            overflowY: 'scroll',
            font: '16px "Helvetica Neue", Helvetica, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            maxWidth: 600,
            margin: '0 auto',
            transition: 'background-color .2s',
            a: {
              color: primary,
              textDecoration: 'underline',
              cursor: 'pointer',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                color: primaryDark
              }
            }
          }
        }}
      />
      {children}
    </>
  );
}
