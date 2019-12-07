import React from 'react';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import { useTheme } from 'emotion-theming';

import Footer from '../components/Footer';

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

export default function Index({ data, location, isDarkMode, setIsDarkMode }) {
  const { edges } = data.allMarkdownRemark;

  const { colors } = useTheme();

  const { border, neutralLight, primary, primaryDark } = colors;

  return (
    <>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        animate="enter"
        initial="initial"
        exit="exit"
        css={{
          height: 'calc(100vh - 200px)',
          a: {
            color: primary,
            textDecoration: 'underline',
            cursor: 'pointer',
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
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          stickyMode={true}
        />
      </motion.div>
    </>
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
