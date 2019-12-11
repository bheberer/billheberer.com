import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

import avatar from '../assets/avatar.png';

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
              alignItems: 'center',
              justifyContent: 'center',
              img: {
                maxWidth: '100px',
                marginTop: 20
              },
              h1: {
                margin: '0',
                marginTop: 15,
                fontWeight: '600',
                fontSize: '48px',
                color: neutralDark
              },
              h2: {
                margin: '0px',
                fontWeight: '300',
                fontSize: '20px',
                color: neutralLight
              },
              a: {
                fontWeight: 600
              },
              ['@media (max-width: 600px)']: {
                marginTop: 15
              },
              ['@media (max-width: 450px)']: {
                img: {
                  maxWidth: '80px'
                },
                h1: {
                  fontSize: '36px'
                },
                h2: {
                  fontSize: '16px'
                }
              },
              ['@media (max-width: 360px)']: {
                h1: {
                  fontSize: '30px'
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
    <section
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottom: `1px solid ${border}`,
        paddingBottom: '20px',
        marginBottom: '35px'
      }}
    >
      <Link to="/">
        <img src={avatar} alt="Bill Heberer" />
      </Link>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '20px'
        }}
      >
        <Link to="/" css={{ textDecoration: 'none' }}>
          <h1>{author}</h1>
        </Link>
        <h2>
          {bio}
          <a
            css={{
              color: primary,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                color: primaryDark
              }
            }}
            href={employerURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>{employer}</i>
          </a>
        </h2>
      </div>
    </section>
  );
}
