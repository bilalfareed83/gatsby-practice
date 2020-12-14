import React from "react"

export default function Members({ pageContext }) {
  console.log(pageContext)
  const { dec, memberName } = pageContext
  return (
    <div>
      <h2>{memberName}</h2>
      <h4>{dec}</h4>
    </div>
  )
}
