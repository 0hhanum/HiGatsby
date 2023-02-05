import { HeadFC } from "gatsby";
import React from "react";
import Header from "./Header";
import Helmet from "./Helmet";

interface ILayout {
  children?: any;
  title: string;
}

export default function Layout({ children, title }: ILayout) {
  return (
    <>
      <Header></Header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}
