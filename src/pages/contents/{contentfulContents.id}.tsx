import { graphql, Page, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";

export default function DynamicContent({
  data,
}: PageProps<Queries.getDynamicContentDetailQuery>) {
  const image = getImage(data.contentfulContents?.image?.gatsbyImageData!);
  const name = data.contentfulContents?.name || "no title";
  const createdAt = data.contentfulContents?.createdAt!;
  const views = data.contentfulContents?.views || 0;
  return (
    <Layout title={name}>
      <GatsbyImage image={image!} alt={name} />
      <h4>created at {createdAt}</h4>
      <h4>{views} views</h4>
    </Layout>
  );
}

export const Head = ({
  data,
}: PageProps<Queries.getDynamicContentDetailQuery>) => (
  <Helmet title={data.contentfulContents?.name!} />
);
export const query = graphql`
  query getDynamicContentDetail($id: String) {
    contentfulContents(id: { eq: $id }) {
      name
      views
      createdAt(formatString: "YYMMDD")
      image {
        gatsbyImageData(width: 400)
      }
    }
  }
`;
