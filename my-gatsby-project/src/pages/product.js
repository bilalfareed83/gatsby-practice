import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Main from "../components/main"
import ProductOne from "../components/productOne"
import ProductTwo from "../components/productTwo"

export default function Product() {
  return (
    <Layout>
      <Router basepath="/product">
        <ProductOne path="/product1" />
        <ProductTwo path="/product2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}
