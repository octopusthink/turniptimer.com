import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const Page = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { metaDescription, summary, title } = page.fields;

  const description = metaDescription || summary;

  return (
    <App>
      <SEO title={title} description={description} />
      <PageWrapper>
        <PageHeader pageTitle={title} summary={summary} description={description} />
        <PageBody>
          <MDXRenderer>{body}</MDXRenderer>
        </PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        metaDescription
        slug
        summary
        title
      }
      body
      mdxAST
      rawBody
      id
    }
  }
`;

export default Page;
