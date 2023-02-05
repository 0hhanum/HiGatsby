import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">0hhanum</Link>
          </li>
          <li>
            <Link to="https://github.com/0hhanum">Github</Link>
          </li>
        </ul>
      </nav>
      <h1>INDEX</h1>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>0hhanum</title>;
