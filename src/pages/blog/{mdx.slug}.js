import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const blogPost = ({ data }) => {
    return (
        <Layout pageTitle="Blog Page">
            <h2>{data.mdx.frontmatter.title} by <small>{data.mdx.frontmatter.author}</small></h2>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery ($slug: String){
        mdx(slug: {eq: $slug}) {
            id
            frontmatter {
                author
                date(formatString: "dddd, MMMM Do YYYY")
                title
            }
            body
        }
    }
`
export default blogPost


