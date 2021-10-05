import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {

  return (
    <Layout pageHeading="Home Page" pageTitle="Home">
      <StaticImage src="https://images.unsplash.com/photo-1604070974113-2aa6f24c0df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="how are you really?"/>
      <p>Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Est lorem ipsum dolor sit amet consectetur adipiscing. Felis bibendum ut tristique et egestas. Odio facilisis mauris sit amet massa vitae tortor condimentum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Malesuada nunc vel risus commodo viverra maecenas. Sit amet risus nullam eget felis eget nunc. Nulla facilisi morbi tempus iaculis urna. Senectus et netus et malesuada fames ac turpis egestas integer. Dignissim suspendisse in est ante in nibh. Lacus sed turpis tincidunt id. Nunc congue nisi vitae suscipit tellus mauris a diam. Quam pellentesque nec nam aliquam sem et tortor consequat id. At varius vel pharetra vel turpis nunc eget. Diam quis enim lobortis scelerisque fermentum dui faucibus in.</p>
    </Layout>
  )
}

export default HomePage