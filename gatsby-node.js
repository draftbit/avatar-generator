/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const page404 = path.resolve('src/pages/page_404.bs.js')
  createPage({
    path: '404',
    component: page404,
  })
}
