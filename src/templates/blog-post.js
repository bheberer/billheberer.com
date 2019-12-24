import React from 'react';
import { graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

export default function Template({ data }) {
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  const { colors } = useTheme();

  const { primary, neutral, neutralLight, primaryDark } = colors;

  return (
    <article
      css={{
        a: {
          color: primary,
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: primaryDark
          }
        },
        h1: {
          color: primary,
          fontSize: '32px',
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'row'
        },
        h2: { color: primary, fontWeight: 400 },
        h3: { color: neutralLight, fontWeight: 300 },
        hr: {
          borderStyle: 'solid',
          borderWidth: '0.5px',
          borderColor: '#D9D9D9'
        },
        p: {
          fontSize: '20px',
          color: neutral,
          lineHeight: '28px',
          marginBottom: '1.75rem'
        }
      }}
    >
      <h1>{title}</h1>
      <h3>{date}</h3>
      <hr />
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
