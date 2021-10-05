import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'


const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog" pageHeading="My Super Cool Blog">
            {data.allMdx.nodes.map(node => 
              <article key={node.id}>
                  <Link to={node.slug}>
                      <h2>{node.frontmatter.title}</h2> 
                  </Link>
                  <h4>{node.frontmatter.author}</h4> 
                  <p>{node.frontmatter.date}</p> 
              </article>)
            }
        </Layout>
    )
}

export default Blog

export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          author
          date(formatString: "dddd, MMMM Do YYYY")
          title
        }
        id
        slug
      }
    }
  }
`