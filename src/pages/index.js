import React from 'react';
import { graphql } from 'gatsby';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      {edges.map(edge => (
        <div key={edge.frontmatter.path}>{edge.frontmatter.title}</div>
      ))}
    </>
  );
}

const pageQuery = graphql`
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
