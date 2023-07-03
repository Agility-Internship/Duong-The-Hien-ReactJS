import React from 'react';

function Button({
  text, variant, size, rightIcon, type, color, onClick,
}) {
  // Define the Tailwind CSS classes based on the props`
  const buttonClasses = `inline-flex items-center justify-center rounded ${sizeClasses[size]} ${variantClasses[variant]} ${colorClasses[color]}`;

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}

// Mapping the props to corresponding Tailwind CSS classes
const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  outline: 'bg-transparent text-black border',
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
  gray: 'text-gray-500',
};

export default Button;
