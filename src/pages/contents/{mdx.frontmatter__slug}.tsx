import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";

export default function Content({
  data,
  children,
}: PageProps<Queries.getContentDetailQuery>) {
  return (
    <Layout title={data.mdx?.frontmatter?.title || ""}>
      <div>{children}</div>
    </Layout>
  );
}
export const Head = ({ data }: PageProps<Queries.getContentDetailQuery>) => (
  <Helmet title={data.mdx?.frontmatter?.title || ""} />
);
export const query = graphql`
  query getContentDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      id
      body
      frontmatter {
        author
        category
        title
        slug
      }
    }
  }
`;
