import React from 'react';
import PropTypes from 'prop-types';

const BUTTON = {
  DEFAULT: 'bg-white hover:border-secondary border-2 border-light',
};

const variantClasses = {
  primary: `${BUTTON.DEFAULT} rounded-lg`,
  secondary: `${BUTTON.DEFAULT} rounded-[50px]`,
};

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const colorClasses = {
  red: 'border-primary',
  blue: 'border-secondary',
  light: 'border-light',
};

/**
 * Button component
 * @param children Text for the button.
 * @param variant Variant of the button. Can be one of 'primary', 'secondary'
 * @param size Size of the button. Can be one of 'small', 'medium', or 'large'.
 * @param type Type of the button. Can be one of 'button', 'submit', or 'reset'.
 * @param color Color of the button. Can be one of 'green', 'blue', 'red', 'gray'.
 * @param onClick Click event handler function for the button.
 * @returns {JSX.Element} - Button element.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  color = 'light',
  onClick,
  ...restProps
}) => {
  const handleButtonClick = (e) => {
    onClick(e);
  };

  const buttonClasses = [
    'inline-flex items-center gap-2 pl-2 pr-2',
    sizeClasses[size],
    variantClasses[variant],
    colorClasses[color],
  ].join(' ');

  return (
    <button type={type} className={buttonClasses} onClick={handleButtonClick} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['red', 'blue', 'light']),
  onClick: PropTypes.func,
};

export default Button;
