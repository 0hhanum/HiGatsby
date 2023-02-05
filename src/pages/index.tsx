import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout title="INDEX">
        This will be 'children' prop of Layout Component
      </Layout>
    </>
  );
};

export const Head: HeadFC = () => <Helmet title="Home" />;
export default IndexPage;
