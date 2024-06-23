import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Sections = ({ 
  useBackgroundImage = false, // Default parameter
  backgroundImage = "",       // Default parameter
  className = "",             // Default parameter
  children,
}) => {
  const baseClasses = "relative"
  const imageClasses = useBackgroundImage ? "bg-cover bg-center" : ""

  return (
    <section
      className={classNames(baseClasses, imageClasses, className)}
      style={useBackgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {children}
    </section>
  )
}

Sections.propTypes = {
  useBackgroundImage: PropTypes.bool,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Sections
