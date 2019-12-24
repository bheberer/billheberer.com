import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { Email } from 'react-icons/md';
// import LinkedIn from '@material-ui/icons/LinkedIn';
// import Twitter from '@material-ui/icons/Twitter';
// import Email from '@material-ui/icons/Email';
// import GitHub from '@material-ui/icons/GitHub';

import Toggle from './Toggle';

export default function Footer({
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
              paddingTop: '15px',
              borderTop: `1px solid ${border}`
            }}
          >
            {navData.map(data => {
              return <NavIconLink key={data.label} {...data} />;
            })}
            <Toggle />
          </nav>
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
          linkedIn: <FaLinkedin size="24px" />,
          github: <FaGithub size="24px" />,
          email: <MdEmail size="28px" />,
          twitter: <FaTwitter size="24px" />
        }[iconLabel]
      }
    </a>
  );
}
