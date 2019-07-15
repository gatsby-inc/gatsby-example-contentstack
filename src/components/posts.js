import React from 'react'

import Post from './post'

import styles from './posts.module.css'

const Posts = ({ posts }) => (
  <div className={styles.postsContainer}>
    {posts.map(post => (
      <Post {...post} className={styles.post} key={post.fields.slug} preview={true} />
    ))}
  </div>
)

export default Posts
