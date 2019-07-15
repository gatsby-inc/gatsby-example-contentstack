import React from 'react'
import { graphql, Link } from 'gatsby'

const Post = ({ body, className, title, excerpt, fields, author: authors = [], preview = false }) => {
  const author = authors[0]
  return (
    <section className={className}>
    {preview ? (
      <React.Fragment>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link to={fields.slug}>Read more&hellip;</Link>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>{title}</h1>
        {
          author && (
            <React.Fragment>
              <h2>By {author.title}</h2>
              <img alt="Author image" style={{ maxHeight: 60 }} src={author.avatar.url} />
            </React.Fragment>
          )
        }
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </React.Fragment>
    )}
  </section>
  )
}

export const postFragment = graphql`
  fragment PostDetails on Contentstack_blogpost {
    body
    title
    excerpt
    fields {
      slug
    }
    author {
      title
      bio
      avatar {
        url
      }
    }
  }
`

export default Post