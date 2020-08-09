import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';
import Mail from 'react-feather/dist/icons/mail';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';

export default function Footer({ stickyMode = false }) {
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
        const { border, primaryDark, primary, neutralLight } = colors;

        return (
          <div
            css={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              borderTop: `1px solid ${border}`,
              justifyContent: 'space-between',
              ...(stickyMode && {
                position: 'absolute',
                bottom: '0'
              })
            }}
          >
            <p
              css={{
                marginTop: 0,
                marginBottom: 0,
                color: neutralLight,
                fontSize: 12
              }}
            >
              Bill Heberer © 2020
            </p>
            <nav
              css={{
                a: {
                  // width: 30,
                  height: 30,
                  color: primary,
                  cursor: 'pointer',
                  transition: 'all .2s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    color: primaryDark
                  },
                  margin: '0 10px 0 10px'
                },

                marginBottom: 10,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: '10px'
              }}
            >
              {navData.map(data => {
                return <NavIconLink key={data.label} {...data} />;
              })}
            </nav>
          </div>
        );
      }}
    />
  );
}

function NavIconLink({ url, label, iconLabel }) {
  return (
    <a aria-label={label} href={url} target="_blank" rel="noopener noreferrer">
      {
        {
          linkedIn: <LinkedIn size="24px" />,
          github: <Github size="24px" />,
          email: <Mail size="28px" />,
          twitter: <Twitter size="24px" />
        }[iconLabel]
      }
    </a>
  );
}
