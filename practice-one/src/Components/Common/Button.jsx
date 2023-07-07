import React from 'react';
import PropTypes from 'prop-types';

// Mapping the props to corresponding Tailwind CSS classes
const variantClasses = {
  primary:
    'bg-white hover:bg-primary hover:text-white font-bold focus:bg-secondary focus:text-white',
  secondary:
    'bg-secondary text-white hover:bg-white font-bold hover:text-black focus:bg-secondary focus:text-white',
  outline:
    'bg-transparent hover:bg-secondary hover:text-white focus:bg-white focus:text-primary focus:border-primary mb-6 border-none rounded-none w-52 h-16 bg-white drop-shadow-md',
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
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
      {rightIcon && <img src="src/assets/icon_arrow_down.svg" alt="icon_arrow_down" className="pl-4" />}
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
