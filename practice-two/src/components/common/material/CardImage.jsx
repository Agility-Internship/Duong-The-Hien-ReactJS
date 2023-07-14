import React from 'react';
import PropTypes from 'prop-types';

// CardImage component
const CardImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="card-img-top w-full pt-5 pb-3 rounded-t-md"
  />
);

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardImage;
