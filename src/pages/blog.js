import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Posts from '../components/posts'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Posts</h1>
    <Posts posts={data.posts.nodes} />
  </Layout>
)

export const pageQuery = graphql`
  query BlogQuery {
    posts: allContentstackBlogpost {
      nodes {
        ...PostDetails
      }
    }
  }
`

export default IndexPage
