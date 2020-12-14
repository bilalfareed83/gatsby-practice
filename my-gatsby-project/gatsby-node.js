exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "members",
    component: require.resolve(`./src/templates/members.js`),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      memberName: "Bilal",
      dec: "Status active",
    },
  })
  console.log("End of Gatsby Node File")
}
