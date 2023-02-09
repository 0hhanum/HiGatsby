import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps<Queries.getContensQuery>) => {
  return (
    <>
      <Layout title="INDEX">
        <>
          <section>
            {data.allMdx.nodes.map((content, index) => (
              <article key={index}>
                <Link to={`contents/${content.frontmatter?.slug}`}>
                  <h3>{content.frontmatter?.title}</h3>
                  <h5>Author: {content.frontmatter?.author}</h5>
                  <h5>Category: {content.frontmatter?.category}</h5>
                  <p>{content.excerpt}</p>
                </Link>
                <hr />
              </article>
            ))}
          </section>
          {data.allContentfulContents.nodes.map((node, index) => (
            <GatsbyImage
              image={getImage(node.image?.gatsbyImageData!)!}
              key={index}
              alt={node.name || "no alt"}
            />
          ))}
        </>
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
    allContentfulContents {
      nodes {
        name
        image {
          gatsbyImageData(width: 200)
        }
      }
    }
  }
`;
export default IndexPage;
