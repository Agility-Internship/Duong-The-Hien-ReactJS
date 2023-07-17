import React from 'react';
import PropTypes from 'prop-types';

/**
 * CardImage Component
 * @param src - The URL of the image source.
 * @param alt - The alternate text for the image.
 * @returns {JSX.Element} - The CardImage component.
 */
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
