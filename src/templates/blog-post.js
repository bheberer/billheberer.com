import React from 'react';
import { graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

export default function Template({ data }) {
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  const { colors } = useTheme();

  const { primary, neutralLight, primaryDark, neutralDark } = colors;

  return (
    <article
      css={{
        gridRow: '2',
        gridColumn: '1 / last-line',
        a: {
          color: primary,
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: primaryDark
          }
        },
        h1: {
          marginTop: 20,
          marginBottom: 0,
          color: primary,
          fontSize: '32px'
        },
        h2: { color: primary, marginBottom: -10 },
        h3: { color: neutralLight, fontWeight: 300, marginTop: 8 },
        p: {
          fontSize: '16px',
          color: neutralDark,
          lineHeight: '32px',
          marginBottom: '1.75rem'
        }
      }}
    >
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </article>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
