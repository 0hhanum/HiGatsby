import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout title="INDEX">
        This will be 'children' prop of Layout Component
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>0hhanum</title>;
