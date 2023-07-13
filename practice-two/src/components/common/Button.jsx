import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Constanst
import { BUTTON } from '../../constants/components';

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
 * @param text text for button
 * @param variant text for button
 * @param size text for button
 * @param rightIcon text for button
 * @param image image
 * @param rightIcon text for button
 * @returns button element
 */
const Button = ({
  text,
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
      {text}
      {image && <img src={image} alt="button_image" className="w-full h-full" />}
      {rightIcon && (
        <img src={rightIconSrc} alt="right_icon" className="w-4" />
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
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
