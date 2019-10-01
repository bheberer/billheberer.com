import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

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
        twitterURL
        linkedinURL
        githubURL
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
          />
        );
      }}
    />
  );
}
