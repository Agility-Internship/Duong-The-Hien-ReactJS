import React from 'react';
import PropTypes from 'prop-types';

/**
 * Link Component
 * @param color - The color of the link.
 * @param disabled - Determines if the link is disabled or not.
 * @param level - The level of the link's text. Possible values: 'body3', 'body2'.
 * @param underline - Determines if the link text should be underlined or not.
 * @param variant - Additional CSS classes to customize the link's appearance.
 * @param children - The content to be displayed inside the link.
 * @returns {JSX.Element} The Link component.
 */
function Link({ color, disabled, level, underline, variant, children }) {
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
