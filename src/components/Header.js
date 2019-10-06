import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import feather from 'feather-icons';
import { useTheme } from 'emotion-theming';

import avatar from '../assets/avatar.png';
import Toggle from './Toggle';

export default function Header({ isDarkMode, setIsDarkMode }) {
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
              twitterURL
              linkedinURL
              githubURL
            }
          }
        }
      `}
      render={data => {
        const {
          author,
          bio,
          employer,
          employerURL,
          twitterURL,
          linkedinURL,
          githubURL
        } = data.site.siteMetadata;

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
                marginTop: 5
              },
              h1: {
                margin: '0',
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
            <Navbar
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              githubURL={githubURL}
              linkedinURL={linkedinURL}
              twitterURL={twitterURL}
              border={border}
            />
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

function Navbar({
  githubURL,
  linkedinURL,
  twitterURL,
  isDarkMode,
  setIsDarkMode
}) {
  return (
    <nav
      css={{
        marginTop: 10,
        marginBottom: 20,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '10px',
        a: { margin: '0 15px 0 15px' },
        marginLeft: -30
      }}
    >
      <a
        aria-label="Github"
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{
          __html: feather.icons['github'].toSvg({
            ['stroke-width']: 2.5,
            width: 25,
            height: 25
          })
        }}
      />
      <a
        aria-label="LinkedIn"
        href={linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{
          __html: feather.icons['linkedin'].toSvg({
            ['stroke-width']: 2.5,
            width: 25,
            height: 25
          })
        }}
      />
      <a
        aria-label="Twitter"
        href={twitterURL}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{
          __html: feather.icons['twitter'].toSvg({
            ['stroke-width']: 2.5,
            width: 25,
            height: 25
          })
        }}
      />
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </nav>
  );
}

function Bio({ author, bio, employerURL, employer, border }) {
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
        <h1>{author}</h1>
        <h2>
          {bio}
          <a href={employerURL} target="_blank" rel="noopener noreferrer">
            <i>{employer}</i>
          </a>
        </h2>
      </div>
    </section>
  );
}
