import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Post from '../components/post'

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Post {...data.post} />
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostByUrl($url: String!) {
    post: contentstackBlogpost(url: { eq: $url }) {
      ...PostDetails
    }
  }
`

export default BlogPost
