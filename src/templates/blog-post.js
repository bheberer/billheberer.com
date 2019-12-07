import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

export default function Template({
  data,
  location,
  isDarkMode,
  setIsDarkMode
}) {
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    enter: {
      opacity: 1,
      translateX: -300,
      transition: { duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }
    },
    exit: {
      opacity: 0,
      translateX: -600,
      transition: { duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }
    }
  };

  const { colors } = useTheme();

  const { primary, neutral, neutralLight, primaryDark } = colors;

  return (
    <>
      <motion.article
        key={location.pathname}
        variants={pageVariants}
        animate="enter"
        initial="initial"
        exit="exit"
        css={{
          a: {
            color: primary,
            textDecoration: 'underline',
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              color: primaryDark
            }
          },
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
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </motion.article>
    </>
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
