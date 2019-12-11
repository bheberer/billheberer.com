import React from 'react';
import feather from 'feather-icons';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Toggle from './Toggle';

export default function Footer({
  isDarkMode,
  setIsDarkMode,
  stickyMode = false
}) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              navData {
                url
                label
                iconLabel
              }
            }
          }
        }
      `}
      render={data => {
        const { navData } = data.site.siteMetadata;
        const { colors } = useTheme();
        const { border, primaryDark, primary } = colors;

        return (
          <nav
            css={{
              a: {
                color: primary,
                cursor: 'pointer',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  color: primaryDark
                },
                margin: '0 15px 0 15px'
              },
              ...(stickyMode && {
                position: 'absolute',
                bottom: '0'
              }),
              maxWidth: 600,
              marginBottom: 20,
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingTop: '30px',
              borderTop: `1px solid ${border}`
            }}
          >
            {navData.map(data => {
              return <NavIconLink key={data.label} {...data} />;
            })}
            <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </nav>
        );
      }}
    />
  );
}

function NavIconLink({ url, label, iconLabel }) {
  return (
    <a
      aria-label={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={{
        __html: feather.icons[iconLabel].toSvg({
          ['stroke-width']: 2.5,
          width: 25,
          height: 25
        })
      }}
    />
  );
}
