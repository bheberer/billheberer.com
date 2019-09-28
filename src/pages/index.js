import React from 'react';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import { useTheme } from 'emotion-theming';

const pageVariants = {
  initial: { opacity: 0, x: 300 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: {
    opacity: 0,
    x: -300,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

export default function Index({ data, location }) {
  const { edges } = data.allMarkdownRemark;

  const { colors } = useTheme();

  const {
    border,
    neutralLight
  } = colors;
  
  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      animate="enter"
      initial="initial"
      exit="exit"
      css={{
        ul: {
          listStyleType: 'none',
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
        },
        ['@media (max-width: 600px)']: {
          ul: {
            width: '90%',
            margin: '0 auto'
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
    </motion.div>
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
