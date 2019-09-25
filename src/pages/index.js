import React from 'react';
import { graphql, Link } from 'gatsby';
import TransitionLink, {
  TransitionState,
  TransitionPortal
} from 'gatsby-plugin-transition-link';

import Header from '../components/Header';
import GlobalStyleProvider from '../components/GlobalStyleProvider';
import PageTransitionWrapper from '../components/PageTransitionWrapper';

export default function Layout({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <GlobalStyleProvider>
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <PageTransitionWrapper
              pose={[
                ['entering', 'entered'].includes(transitionStatus)
                  ? 'enter'
                  : 'exit'
              ]}
            >
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
                        <TransitionLink
                          to={path}
                          exit={{ length: 0.3 }}
                          entry={{ delay: 0.3 }}
                        >
                          {title}
                        </TransitionLink>
                        <p>{date}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </PageTransitionWrapper>
          );
        }}
      </TransitionState>
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
