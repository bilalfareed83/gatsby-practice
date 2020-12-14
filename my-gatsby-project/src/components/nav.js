import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  )
}
