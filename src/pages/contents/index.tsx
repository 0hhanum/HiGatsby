import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Helmet from "../..//components/Helmet";

const IndexPage = ({ data }: PageProps<Queries.getContensQuery>) => {
  return (
    <>
      <Layout title="Contents"></Layout>
    </>
  );
};

export const Head: HeadFC = () => <Helmet title="Contents" />;
export default IndexPage;
