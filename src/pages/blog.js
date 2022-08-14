import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.id}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`;
export default BlogPage;
