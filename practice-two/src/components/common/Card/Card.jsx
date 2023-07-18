import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card Component
 * @param maxW - The maximum width of the card. Defaults to 'xl'.
 * @param variant - The variant of the card style. Defaults to 'primary'.
 * @param children - The content to be displayed inside the Card component.
 * @returns {JSX.Element} - The Card component.
 */
const Card = ({ maxW = 'xl', variant = 'primary', children }) => {
  const commonClasses = 'card bg-white';

  const variantClasses = {
    primary: 'border-none',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${variantClasses[variant]}`;

  return <div className={`max-w-${maxW} ${cardClasses}`}>{children}</div>;
};

Card.propTypes = {
  maxW: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
  ]),
  children: PropTypes.node.isRequired,
};

export default Card;
