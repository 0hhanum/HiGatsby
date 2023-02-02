import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>INDEX</h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>0hhanum</title>;
