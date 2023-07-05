import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
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

  const externalLinkClasses = `${linkClasses} hover:text-primary`;
  const internalLinkClasses = `${linkClasses} hover:text-secondary`;

  return isExternal ? (
    <a href={href} target={target} rel={rel} className={externalLinkClasses}>
      {children}
    </a>
  ) : (
    <a href={href} className={internalLinkClasses}>
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
