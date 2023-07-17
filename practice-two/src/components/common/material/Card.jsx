import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} param0
 * @returns
 */
const Card = ({
  maxW = 'xl',
  variant = 'primary',
  children,
  onChange = () => {},
}) => {
  const commonClasses = 'bg-white';

  const variantClasses = {
    primary: 'border-none',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${variantClasses[variant]}`;

  return (
    <div className={`card max-w-${maxW} ${cardClasses}`} onChange={onChange}>
      {children}
    </div>
  );
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
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Card;
