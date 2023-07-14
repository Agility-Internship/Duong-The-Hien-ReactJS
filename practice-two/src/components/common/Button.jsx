import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BUTTON = {
  DEFAULT: 'bg-white hover:border-secondary border-2 border-light',
};

// Mapping the props to corresponding Tailwind CSS classes
const variantClasses = {
  primary:
    `${BUTTON.DEFAULT} focus:border-secondary rounded-lg`,
  secondary:
    `${BUTTON.DEFAULT} focus:border-primary rounded-3xl`,
};

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const colorClasses = {
  green: 'text-green-500',
  hello: 'text-blue-500',
  red: 'text-red-500',
  black: 'text-black-500',
  gray: 'text-gray-500',
};
// eslint-disable-next-line react/function-component-definition

/**
 * Button component
 * @param children Text for the button.
 * @param variant Variant of the button. Can be one of 'primary', 'secondary'
 * @param size Size of the button. Can be one of 'small', 'medium', or 'large'.
 * @param rightIcon Path to the right icon image.
 * @param leftIcon Path to the left icon image.
 * @param image Path to the button image.
 * @param type Type of the button. Can be one of 'button', 'submit', or 'reset'.
 * @param color Color of the button. Can be one of 'green', 'blue', 'red', 'gray'.
 * @param onClick Click event handler function for the button.
 * @returns {JSX.Element} - Button element.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  rightIcon,
  leftIcon,
  image,
  type = 'button',
  color = 'black',
  onClick = () => {},
}) => {
  const [iconState, setIconState] = useState('down');

  const handleButtonClick = () => {
    setIconState((prevState) => (prevState === 'down' ? 'up' : 'down'));
    onClick();
  };

  const buttonClasses = [
    'inline-flex items-center gap-2 pl-2 pr-2',
    sizeClasses[size],
    variantClasses[variant],
    colorClasses[color],
  ].join(' ');

  const leftIconSrc = leftIcon ? 'public/images/Filter-icon.png' : null;
  const rightIconSrc = rightIcon && `public/images/${iconState === 'down' ? 'up' : 'down'}.png`;

  return (
    <button type={type} className={buttonClasses} onClick={handleButtonClick}>
      {leftIcon && <img src={leftIconSrc} alt="left_icon" className="w-5" />}
      {children}
      {image && <img src={image} alt="button_image" className="w-full h-full" />}
      {rightIcon && (
        <img src={rightIconSrc} alt="right_icon" className="w-4" />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rightIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['green', 'blue', 'red', 'gray']),
  onClick: PropTypes.func,
};

export default Button;
