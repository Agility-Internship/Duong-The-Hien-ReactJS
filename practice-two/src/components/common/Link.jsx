import React from 'react';
import PropTypes from 'prop-types';

// Link component
function Link({
  color, disabled, level, underline, variant, children,
}) {
  const linkStyles = {
    textDecoration: underline ? 'underline' : 'none',
    color: disabled && color,
  };

  const levelClasses = {
    body3: 'text-xl font-normal',
    body2: 'text-lg font-normal',
  };

  const linkClasses = `${levelClasses[level]} ${variant || ''}`;

  return (
    <a href="/" className={linkClasses} style={linkStyles}>
      {children}
    </a>
  );
}

Link.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  level: PropTypes.oneOf(['body3', 'body2']),
  underline: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,

};

export default Link;
