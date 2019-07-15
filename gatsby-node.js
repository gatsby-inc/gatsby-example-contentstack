const withTrailingSlash = part => part.slice(0, -1) === `/` ? part : `${part}/`

exports.onCreateNode = ({ actions, node }) => {
  if (node.internal.type === `Contentstack_blogpost`) {
    actions.createNodeField({
      node,
      name: `slug`,
      value: withTrailingSlash(node.url)
    })
  }
}

exports.createPages = async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allContentstackBlogpost {
        nodes {
          fields {
            slug
          }
          url
        }
      }
    }
  `)

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)

  data.allContentstackBlogpost.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        url: node.url
      }
    })
  })
}