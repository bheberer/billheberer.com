import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import feather from 'feather-icons';

import avatar from '../assets/avatar.png';

export default function Header() {
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

        return (
          <header
            css={{
              display: 'flex',
              maxWidth: '600px',
              flexDirection: 'row',
              alignItems: 'center',
              borderBottom: '1px solid #D9D9D9',
              paddingBottom: '20px',
              marginBottom: '55px',
              img: {
                maxWidth: '100px'
              },
              h1: {
                margin: '10px 0 5px 0',
                fontWeight: '600',
                fontSize: '48px',
                color: '#232425'
              },
              h2: {
                margin: '0px',
                fontWeight: '300',
                fontSize: '20px',
                color: '#868686'
              },
              a: {
                cursor: 'pointer',
                color: '#59C2DF',
                textDecoration: 'underline',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  color: '#448DA5'
                }
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
            <img src={avatar} alt="Bill Heberer" />
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
                    href={githubURL}
                    dangerouslySetInnerHTML={{
                      __html: feather.icons['github'].toSvg({
                        ['stroke-width']: 2.5,
                        width: 32,
                        height: 32
                      })
                    }}
                  />
                  <a
                    href={linkedinURL}
                    dangerouslySetInnerHTML={{
                      __html: feather.icons['linkedin'].toSvg({
                        ['stroke-width']: 2.5,
                        width: 32,
                        height: 32
                      })
                    }}
                  />
                  <a
                    href={twitterURL}
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
                <a href={employerURL}>
                  <i>{employer}</i>
                </a>
              </h2>
            </div>
          </header>
        );
      }}
    />
  );
}
