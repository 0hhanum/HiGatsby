import { HeadFC } from "gatsby";
import React from "react";
import Header from "./Header";
import Helmet from "./Helmet";

interface ILayout {
  children?: any;
  title?: string;
}

export default function Layout({ children, title }: ILayout) {
  return (
    <div className="container">
      <Header></Header>
      <main>
        {title ? <h1>{title}</h1> : null}
        {children}
      </main>
    </div>
  );
}
