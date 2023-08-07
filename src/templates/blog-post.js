import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import "../styles/blogpost.scss";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Section>
      <Banner className="bannerSection">
        <img alt="" src={post.frontmatter.featuredImage?.publicURL} />
      </Banner>
      {/* <h4>{post.frontmatter.title}</h4> */}
      <article className="description">
        <div
          className="descriptionSection"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Section>
  );
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          publicURL
        }
      }
    }
  }
`;

const Banner = styled.div`
  img {
    width: 100%;
    height: 40rem;
  }
`;
const Section = styled.article`
  h5 {
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  h4 {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
  }

  .description {
    display: flex;
    padding-bottom: 5rem;
    gap: 10rem;
    font-size: 1.8rem;
    margin-right: 10rem;
    margin-left: 10rem;
    font-family: "Raleway", sans-serif;
    @media (max-width: 860px) {
      flex-direction: column-reverse;
      gap: 2rem;
      font-size: 2rem;
      margin-top: 3rem;
      padding-bottom: 2rem;
      margin-right: 3rem;
      margin-left: 3rem;
    }

    h6 {
      font-size: 2rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    ul {
      list-style-type: none;
    }

    .banner {
      width: 100%;
    }

    .descriptionSection {
      flex: 2;

      P {
        line-height: 1.7;
      }
    }

    .bannerSection {
      flex: 1;
    }
  }
`;
