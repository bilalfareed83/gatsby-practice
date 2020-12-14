import React from "react"
import { Link } from "gatsby"
import Style from "./nav.module.css"
export default function Nav() {
  return (
    <div className={Style.navBar}>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/product">Product</Link>
    </div>
  )
}
