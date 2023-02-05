import React from "react";
import Header from "./Header";

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
