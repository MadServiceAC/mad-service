import React from 'react';
import PropTypes from 'prop-types';

const Sections = ({ useBackgroundImage, backgroundImage, className, children }) => {
  const sectionStyle = useBackgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className={`${className}`} style={sectionStyle}>
      {children}
    </div>
  );
};

Sections.propTypes = {
  useBackgroundImage: PropTypes.bool.isRequired,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Sections.defaultProps = {
  backgroundImage: '',
  className: '',
};

export default Sections;
