import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import GlobalStyleProvider from '../components/GlobalStyleProvider';

export default function Template({ data }) {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <GlobalStyleProvider>
      <Header />
      <article
        css={{
          maxWidth: '600px',
          h1: { color: '#59C2DF', fontSize: '36px' },
          h2: { color: '#59C2DF' },
          hr: {
            borderStyle: 'solid',
            borderWidth: '0.5px',
            borderColor: '#59C2DF'
          },
          p: {
            fontSize: '20px',
            color: 'black'
          }
        }}
      >
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </GlobalStyleProvider>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
