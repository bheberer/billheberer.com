import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              bio
              employer
              employerURL
            }
          }
        }
      `}
      render={data => {
        const { author, bio, employer, employerURL } = data.site.siteMetadata;

        const { colors } = useTheme();

        const { neutralDark, neutralLight, border } = colors;

        return (
          <header
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridRow: '1 / 2',
              gridColumn: '1 / last-line',
              borderBottom: `1px solid ${border}`,
              marginBottom: -12,
              paddingBottom: 12,
              h1: {
                margin: '0',
                fontWeight: '600',
                lineHeight: '24px',
                fontSize: '30px',
                color: neutralDark
              },
              h2: {
                margin: '0px',
                fontWeight: '300',
                lineHeight: '14px',
                fontSize: '18px',
                color: neutralLight
              },
              ['@media (max-width: 675px)']: {
                h1: {
                  fontSize: '24px'
                },
                h2: {
                  fontSize: '14px'
                }
              }
            }}
          >
            <Bio
              author={author}
              bio={bio}
              employerURL={employerURL}
              employer={employer}
              border={border}
            />
          </header>
        );
      }}
    />
  );
}

function Bio({ author, bio, employerURL, employer, border }) {
  const { colors } = useTheme();
  const { primary, primaryDark } = colors;

  return (
    <>
      <Link to="/" css={{ textDecoration: 'none' }}>
        <h1>{author}</h1>
      </Link>
      <h2>
        {bio}
        <a
          css={{
            color: primary,
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              color: primaryDark
            }
          }}
          href={employerURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {employer}
        </a>
      </h2>
    </>
  );
}
