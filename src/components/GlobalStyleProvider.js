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
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: background,
            overflowY: 'scroll',
            font: '16px "Helvetica Neue", Helvetica, Arial, sans-serif',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility'
          }
        }}
      />
      {children}
    </>
  );
}
