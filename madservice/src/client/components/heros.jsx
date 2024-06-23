import React from "react"
import Sections from "./sections"

function Heros({ title, subtitle, imagebg, className }) {
  return (
    <Sections 
      useBackgroundImage 
      backgroundImage={imagebg} 
      className={`lg:max-h-screen py-16 text-white ${className}`}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
          <p className="ms-1.5 mt-2 max-w-lg sm:text-xl/relaxed text-white">{subtitle}</p>
        </div>
      </div>
    </Sections>
  )
}

export default Heros
