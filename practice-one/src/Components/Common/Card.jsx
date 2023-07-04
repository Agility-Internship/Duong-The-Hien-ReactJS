import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  maxW,
  name,
  size,
  variant,
  onChange,
  children,
}) => {
  const commonClasses = 'bg-white rounded-md shadow-md';
  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  const variantClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  return (
    <div className={`max-w-${maxW} mx-auto ${cardClasses}`} onChange={onChange}>
      {name && <h2 className="text-xl font-bold mb-4">{name}</h2>}
      {children}
    </div>
  );
};

Card.propTypes = {
  maxW: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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

Card.defaultProps = {
  maxW: 'xl',
  name: '',
  size: 'medium',
  variant: 'primary',
  onChange: () => {},
};

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div>{children}</div>;

const CardImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full rounded-t-md" />
);

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Card.CardHeader = CardHeader;
Card.CardContent = CardContent;
Card.CardFooter = CardFooter;
Card.CardImage = CardImage;

export default Card;
