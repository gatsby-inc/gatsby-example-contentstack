import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Posts from '../components/posts'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.home.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.home.body }} />
    <h2>Recent posts</h2>
    <Posts posts={data.posts.nodes} />
    <Link to="/blog/">See all posts</Link>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    home: contentstackHome {
      title
      body
    }

    posts: allContentstackBlogpost(limit: 3) {
      nodes {
        ...PostDetails
      }
    }
  }
`

export default IndexPage
