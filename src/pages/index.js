import React from 'react';
import { graphql, Link } from 'gatsby';

import Header from '../components/Header';
import GlobalStyleProvider from '../components/GlobalStyleProvider';

export default function Layout({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <GlobalStyleProvider>
      <div
        css={{
          ul: {
            listStyleType: 'none',
            margin: '0 0 0 0',
            padding: '0 0 0 0',
            fontSize: '20px',
            width: '600px',
            li: {
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              borderBottom: '1px solid #D9D9D9',
              padding: '25px 0 25px 0'
            },
            P: {
              margin: '0',
              color: '#868686'
            },
            a: {
              display: 'block',
              color: '#59C2DF',
              textDecoration: 'underline',
              cursor: 'pointer',
              maxWidth: '450px',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                color: '#448DA5'
              }
            }
          },
          ['@media (max-width: 600px)']: {
            ul: {
              width: '100%'
            }
          }
        }}
      >
        <Header />
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
      </div>
    </GlobalStyleProvider>
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
