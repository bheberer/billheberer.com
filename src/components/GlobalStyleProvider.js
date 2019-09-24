import React from 'react';
import { Global } from '@emotion/core';

export default function GlobalStyleProvider({ children }) {
  return (
    <>
      <Global
        styles={{
          body: {
            font: '16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }}
      />
      {children}
    </>
  );
}
