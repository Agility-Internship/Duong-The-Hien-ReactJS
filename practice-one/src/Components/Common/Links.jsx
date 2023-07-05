import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  isExternal = false,
  href,
  target = '_self',
  rel = undefined,
  children,
}) => {
  const commonClasses = 'text-underline ';

  const linkClasses = `${commonClasses}`;

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
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
