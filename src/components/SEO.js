import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import favicon from '../../static/favicon.png';

const SEOQuery = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        bio
        employer
        description
        siteURL
      }
    }
  }
`;

export default function SEO() {
  return (
    <StaticQuery
      query={SEOQuery}
      render={data => {
        const { siteMetadata } = data.site;
        const { title, description, siteURL } = siteMetadata;
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={title}
            meta={[
              { name: 'description', content: description },
              { property: 'og:url', content: siteURL },
              { property: 'og:title', content: title },
              { property: 'og:description', content: description }
            ]}
            link={[
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '48x48',
                href: `${favicon}`
              },
              {
                rel: 'stylesheet',
                href:
                  'https://fonts.googleapis.com/css?family=Open+Sans&display=fallback'
              }
            ]}
          />
        );
      }}
    />
  );
}
