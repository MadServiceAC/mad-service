import React from "react"
import Base from "./base/Base"

const GridContainer = ({ items }) => {
  return (
    <div className="mx-auto container mt-6 lg:grid lg:grid-cols-3 gap-4 p-8">
      {items.map((item, index) => (
        <Base 
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default GridContainer
