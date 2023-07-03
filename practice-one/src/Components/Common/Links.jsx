import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  // defaultProps
  isExternal = false,
  imageVariant = undefined,
  href,
  target = '_self',
  rel = undefined,
  children,
}) => {
  const commonClasses = 'text-underline ';

  const imageClasses = {
    rounded: 'rounded-full',
    circle: 'rounded-full',
    square: 'rounded-md',
  };

  const linkClasses = `${commonClasses} ${imageClasses[imageVariant] || ''}`;

  return isExternal ? (
    <a href={href} target={target} rel={rel} className={linkClasses}>
      {children}
    </a>
  ) : (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );
};

Link.propTypes = {
  isExternal: PropTypes.bool,
  imageVariant: PropTypes.oneOf(['rounded', 'circle', 'square']),
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
