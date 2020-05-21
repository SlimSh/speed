const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsService {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      result.data.allDatoCmsService.edges.map(({ node: service }) => {
        createPage({
          path: `services/${service.slug}`,
          component: path.resolve(`./src/templates/service.js`),
          context: {
            slug: service.slug,
          },
        })
      })
      // result.data.allDatoCmsProduct.edges.map(({ node: product }) => {
      //   createPage({
      //     path: `products/${product.slug}`,
      //     component: path.resolve(`./src/templates/service.js`),
      //     context: {
      //       slug: product.slug,
      //     },
      //   })
      // })
      resolve()
    })
  })
}
