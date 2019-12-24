import React from 'react';
import { graphql, Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;

  const { colors } = useTheme();

  const { border, neutralLight, primary, primaryDark } = colors;

  return (
    <div
      css={{
        height: 'calc(100vh - 200px)',
        a: {
          color: primary,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: primaryDark
          }
        },
        ul: {
          listStyleType: 'none',
          marginBottom: 100,
          padding: '0',
          fontSize: '20px',
          li: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            borderBottom: `1px solid ${border}`,
            padding: '25px 0 25px 0'
          },
          P: {
            margin: '0',
            paddingTop: '5px',
            color: neutralLight,
            fontWeight: 300
          },
          a: {
            maxWidth: '450px',
            lineHeight: '32.5px',
            fontWeight: 700
          }
        }
      }}
    >
      <ul>
        {edges.map(edge => {
          const { path, title, date } = edge.node.frontmatter;
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
              <p>{date}</p>
            </li>
          );
        })}
      </ul>
      <Footer
        stickyMode={true}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
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
