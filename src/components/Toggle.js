import React from 'react';
import feather from 'feather-icons';
import { useTheme } from 'emotion-theming';

export default function Toggle({ isDarkMode, setIsDarkMode }) {
  const { colors } = useTheme();

  const { primary, primaryDark } = colors;

  return (
    <span
      css={{
        display: 'block',
        width: 50,
        height: 25,
        backgroundColor: primary,
        borderRadius: '30%'
      }}
    >
      <span />
    </span>
  );
}
