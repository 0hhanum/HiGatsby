import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";

export default function Content({
  data,
  children,
}: PageProps<Queries.getContentDetailQuery>) {
  const image = getImage(
    data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title={data.mdx?.frontmatter?.title || ""}>
      <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.title!} />
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
      frontmatter {
        author
        category
        title
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
