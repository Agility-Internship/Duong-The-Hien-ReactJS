import React from 'react';
import PropTypes from 'prop-types';

/**
 * Link Component
 * @param color - The color of the link.
 * @param disabled - Determines if the link is disabled or not.
 * @param level - The level of the link's text. Possible values: 'xl', 'lg'.
 * @param underline - Determines if the link text should be underlined or not.
 * @param variant - Additional CSS classes to customize the link's appearance.
 * @param children - The content to be displayed inside the link.
 * @returns {JSX.Element} The Link component.
 */
function Link({
  color = 'black',
  disabled = 'false',
  level = 'lg',
  underline = 'true',
  variant,
  children,
}) {
  const linkStyles = {
    textDecoration: underline ? 'underline' : 'none',
    color: disabled && color,
  };

  const levelClasses = {
    xl: 'text-xl font-normal',
    lg: 'text-lg font-normal',
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
  level: PropTypes.oneOf(['xl', 'lg']),
  underline: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
