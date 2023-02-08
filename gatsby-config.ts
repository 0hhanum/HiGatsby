import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `0hhanum`,
    description: "Contact Me! - rntls123@naver.com",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
      },
    },
  ],
};

export default config;
