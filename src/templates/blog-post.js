import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTheme } from 'emotion-theming';

export default function Template({ data, location }) {
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const { colors } = useTheme();

  const { primary, neutral, neutralLight } = colors;

  return (
    <motion.article
      key={location.pathname}
      variants={pageVariants}
      animate="enter"
      initial="initial"
      exit="exit"
      css={{
        h1: {
          color: primary,
          fontSize: '32px',
          fontWeight: 300,
          display: 'flex',
          flexDirection: 'row'
        },
        h2: { color: primary, fontWeight: 300 },
        h3: { color: neutralLight, fontWeight: 300 },
        hr: {
          borderStyle: 'solid',
          borderWidth: '0.5px',
          borderColor: '#D9D9D9'
        },
        p: {
          fontSize: '20px',
          color: neutral,
          lineHeight: '30px',
          marginBottom: '1.75rem'
        }
      }}
    >
      <h1>{title}</h1>
      <h3>{date}</h3>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </motion.article>
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
