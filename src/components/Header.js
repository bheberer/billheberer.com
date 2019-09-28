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
              title
              description
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
          title,
          description,
          employer,
          employerURL,
          twitterURL,
          linkedinURL,
          githubURL
        } = data.site.siteMetadata;

        const { colors } = useTheme();

        const { neutralDark, neutralLight, border } = colors;

        return (
          <>
            {/* <span css={{ height: 25, width: 25, backgroundColor: 'blue' }}>
              <input
                type="checkbox"
                name="themeToggle"
                value={isDarkMode}
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Dark Mode Toggle"
                css={{
                  position: 'absolute',
                  opacity: 0,
                  cursor: 'pointer',
                  height: 0,
                  width: 0
                }}
              />
            </span> */}
            <header
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottom: `1px solid ${border}`,
                paddingBottom: '20px',
                marginBottom: '55px',
                img: {
                  maxWidth: '100px',
                  marginTop: 15
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
                  img: {
                    alignSelf: 'flex-end'
                  }
                },
                ['@media (max-width: 420px)']: {
                  img: {
                    maxWidth: '80px'
                  },
                  h1: {
                    fontSize: '36px'
                  },
                  h2: {
                    fontSize: '16px'
                  }
                }
              }}
            >
              <Link to="">
                <img src={avatar} alt="Bill Heberer" />
              </Link>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '20px'
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    ['@media (max-width: 600px)']: {
                      flexDirection: 'column-reverse',
                      alignItems: 'flex-start',
                      nav: {
                        alignSelf: 'flex-end',
                        margin: '0px'
                      }
                    }
                  }}
                >
                  <h1>{title}</h1>
                  <nav
                    css={{
                      margin: '0 auto',
                      paddingTop: '10px',
                      a: { margin: '0 15px 0 15px' }
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
                          width: 32,
                          height: 32
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
                          width: 32,
                          height: 32
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
                          width: 32,
                          height: 32
                        })
                      }}
                    />
                  </nav>
                </div>
                <h2>
                  {description}
                  <a
                    href={employerURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>{employer}</i>
                  </a>
                </h2>
              </div>
            </header>
          </>
        );
      }}
    />
  );
}
