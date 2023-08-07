import React from 'react';
import PropTypes from 'prop-types';

/**
 * Link Component
 * @param href - The URL or path the link should navigate to.
 * @param color - The color of the link text.
 * @param disabled - Determines if the link is disabled or not.
 * @param size - The size of the link's text. Possible values: 'xl', 'lg'.
 * @param underline - Determines if the link text should be underlined or not.
 * @param variant - Additional CSS classes to customize the link's appearance.
 * @param children - The content to be displayed inside the link.
 * @returns {JSX.Element} The Link component.
 */
function Link({
  href = '#',
  color = 'black',
  disabled = false,
  size = 'lg',
  underline = true,
  variant,
  children,
}) {
  const linkStyles = {
    textDecoration: underline ? 'underline' : 'none',
    color: disabled ? color : null,
  };

  const sizeClasses = {
    xl: 'text-xl font-normal',
    lg: 'text-lg font-normal',
  };

  const linkClasses = `${sizeClasses[size]} ${variant || ''}`;

  return (
    <a href={href} className={linkClasses} style={linkStyles}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string, // Add the 'color' prop type for customizing the link text color
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'lg']),
  underline: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
