import React from 'react';
import PropTypes from 'prop-types';

const Iframe = ({ src, width, height, style, allowFullScreen, loading, referrerPolicy }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={style}
      allowFullScreen={allowFullScreen}
      loading={loading}
      referrerPolicy={referrerPolicy}
      title="Embedded Google Map"
    ></iframe>
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  allowFullScreen: PropTypes.bool,
  loading: PropTypes.string,
  referrerPolicy: PropTypes.string,
};

Iframe.defaultProps = {
  width: '600',
  height: '450',
  style: { border: 0 },
  allowFullScreen: true,
  loading: 'lazy',
  referrerPolicy: 'no-referrer-when-downgrade',
};

export default Iframe;
