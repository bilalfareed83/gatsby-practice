import React from "react"

export default function ProductItem({ pageContext }) {
  console.log(pageContext)
  const {
    itemData: { slug, title, desc },
  } = pageContext
  return (
    <div>
      <h2>{title}</h2>
      <h3>{desc.desc}</h3>
    </div>
  )
}
