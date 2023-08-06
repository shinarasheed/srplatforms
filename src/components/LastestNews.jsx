import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Title } from "./Title";

import "../styles/latestnews.scss";

export const LastestNews = () => {
  const data = useStaticQuery(graphql`
    {
      blog: allMarkdownRemark {
        posts: nodes {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
          excerpt
          id
        }
      }
    }
  `);
  const { posts } = data.blog;

  return (
    <section className="lastestnews">
      <Title title="Lastest News" />
      <article className="lastestnews__news">
        {posts.map((post, index) => (
          <div key={index}>
            <Link to={post.fields.slug}>
              <GatsbyImage
                image={
                  post.frontmatter.featuredImage?.childImageSharp
                    ?.gatsbyImageData
                }
              />

              <div>
                <h5 className="news__title">{post.frontmatter.title}</h5>
                <p className="news__description">{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};
