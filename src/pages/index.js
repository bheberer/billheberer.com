import React from 'react';
import { graphql, Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;

  const { colors } = useTheme();

  const { neutralDark, neutralLight, primary, primaryDark } = colors;

  return (
    <div
      css={{
        gridRow: '3',
        gridColumn: '1 / last-line',
        // height: 'calc(100vh - 200px)',
        a: {
          color: primary,
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: primaryDark,
            textDecoration: 'underline'
          }
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: '0',
          fontSize: '20px',
          P: {
            fontWeight: 300,
            lineHeight: '22px'
          },
          a: {
            maxWidth: '450px'
          }
        }
      }}
    >
      <ul>
        {edges.map((edge, i) => {
          const { path, title, date } = edge.node.frontmatter;
          return (
            <li key={path}>
              <div
                css={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: i === 0 ? '-32px' : '48px',
                  ['@media (max-width: 675px)']: {
                    flexDirection: 'column'
                  }
                }}
              >
                <Link
                  to={path}
                  css={{
                    fontWeight: 700,
                    textDecoration: 'none',
                    lineHeight: '26px',
                    ['@media (max-width: 675px)']: {
                      fontSize: '16px'
                    }
                  }}
                >
                  {title}
                </Link>
                <p
                  css={{
                    fontWeight: 600,
                    color: neutralLight,
                    margin: 0,
                    ['@media (max-width: 675px)']: {
                      fontSize: '16px'
                    }
                  }}
                >
                  {date}
                </p>
              </div>
              <p
                css={{
                  fontSize: 16,
                  maxWidth: 514,
                  marginTop: 10,
                  color: neutralDark
                }}
              >
                {edge.node.excerpt}
                <Link to={path} css={{ textDecoration: 'underline' }}>
                  Continue Reading →
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 170)
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;
