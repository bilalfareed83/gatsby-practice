var path = require("path")

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // Only update the `/app` page.
//   if (page.path.match(/^\/product/)) {
//     // page.matchPath is a special key that's used for matching pages
//     // with corresponding routes only on the client.
//     page.matchPath = "/product/*"

//     // Update the page.
//     createPage(page)
//   }
// }

// exports.createPages = async function ({ actions }) {
//   actions.createPage({
//     path: "members",
//     component: require.resolve(`./src/templates/members.js`),
//     context: {
//       // Data passed to context is available
//       // in pageContext props of the template component
//       memberName: "Bilal",
//       dec: "Status active",
//     },
//   })
//   console.log("End of Gatsby Node File")
// }

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchData = await graphql(`
    {
      allContentfulElectronic {
        nodes {
          slug
          title
          desc {
            desc
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(fetchData))

  fetchData.data.allContentfulElectronic.nodes.forEach(obj => {
    createPage({
      path: `/product/${obj.slug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        itemData: obj,
      },
    })
  })
}
