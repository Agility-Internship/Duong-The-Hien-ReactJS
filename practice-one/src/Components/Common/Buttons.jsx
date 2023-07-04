import React from 'react';
import PropTypes from 'prop-types';

// Mapping the props to corresponding Tailwind CSS classes
const variantClasses = {
  primary: 'bg-transparent hover:bg-primary hover:text-white focus:bg-primary focus:text-white',
  secondary: 'bg-secondary text-white hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white',
  outline: 'bg-transparent hover:bg-primary hover:text-white hover:border-primary focus:bg-primary focus:text-white focus:border-primary',
};

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const colorClasses = {
  green: 'text-green-500',
  blue: 'text-blue-500',
  red: 'text-red-500',
  black: 'text-black-500',
  gray: 'text-gray-500',
};
// eslint-disable-next-line react/function-component-definition
const Button = ({
  text,
  variant = 'primary',
  size = 'medium',
  rightIcon,
  type = 'button',
  color = 'black',
  onClick = () => {},
}) => {
  // Define the Tailwind CSS classes based on the props
  const buttonClasses = `inline-flex items-center justify-center rounded ${sizeClasses[size]} ${variantClasses[variant]} ${colorClasses[color]}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {text}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rightIcon: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['green', 'blue', 'red', 'gray']),
  onClick: PropTypes.func,
};

export default Button;
