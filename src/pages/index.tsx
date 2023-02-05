import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";

const IndexPage = ({ data }: PageProps<Queries.getContentsQuery>) => {
  return (
    <>
      <Layout title="INDEX">
        <ul>
          {data.allFile.nodes.map((content, index) => (
            <li key={index}>{content.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const Head: HeadFC = () => <Helmet title="Home" />;
export const query = graphql`
  query getContents {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export default IndexPage;
