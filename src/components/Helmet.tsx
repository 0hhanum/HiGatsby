import React from "react";

// This Component will be Gatsby Head
interface IHelmet {
  title: string;
}
export default function Helmet({ title }: IHelmet) {
  return <title>{title} | 0hhanum</title>;
}
