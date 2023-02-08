import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";

const IndexPage = ({ data }: PageProps<Queries.getContensQuery>) => {
  console.log(data);
  return (
    <>
      <Layout title="INDEX">
        <section>
          {data.allMdx.nodes.map((content, index) => (
            <>
              <article key={index}>
                <Link to={`contents/${content.frontmatter?.slug}`}>
                  <h3>{content.frontmatter?.title}</h3>
                  <h5>Author: {content.frontmatter?.author}</h5>
                  <h5>Category: {content.frontmatter?.category}</h5>
                  <p>{content.excerpt}</p>
                </Link>
              </article>
              <hr />
            </>
          ))}
        </section>
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
          slug
        }
        excerpt(pruneLength: 20)
      }
    }
  }
`;
export default IndexPage;
