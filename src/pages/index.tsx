import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";

const IndexPage = ({ data }: PageProps<Queries.getContensQuery>) => {
  console.log(data);
  return (
    <>
      <Layout title="INDEX">
        <ul>
          {data.allMdx.nodes.map((content, index) => (
            <li key={index}>{content.frontmatter?.title}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const Head: HeadFC = () => <Helmet title="Home" />;
export const query = graphql`
  query getContens {
    allMdx {
      nodes {
        frontmatter {
          author
          title
          category
        }
        excerpt(pruneLength: 20)
      }
    }
  }
`;
export default IndexPage;
