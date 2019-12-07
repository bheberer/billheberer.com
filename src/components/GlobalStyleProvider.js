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
          ['#gatsby-focus-wrapper']: {
            minHeight: '100vh',
            position: 'relative'
          },
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
            transition: 'background-color .2s'
          },
          ['@media (max-width: 600px)']: {
            body: {
              maxWidth: '90%'
            }
          }
        }}
      />
      {children}
    </>
  );
}
