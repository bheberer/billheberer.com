import React from 'react';
import { Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export default function GlobalStyleProvider({ children }) {
  const { colors } = useTheme();

  const { background } = colors;

  return (
    <>
      <Global
        styles={{
          '#___gatsby': {
            height: '100%'
          },
          '#gatsby-focus-wrapper': {
            height: '100%'
          },
          html: {
            height: '100%'
          },
          body: {
            margin: 0,
            height: '100%',
            backgroundColor: background,
            overflowY: 'scroll',
            font:
              '16px "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility'
          }
        }}
      />
      {children}
    </>
  );
}
