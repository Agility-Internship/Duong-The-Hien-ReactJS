import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  maxW = 'xl',
  name = '',
  size = 'medium',
  variant = 'primary',
  children,
  onChange = () => {},
}) => {
  const commonClasses = 'bg-white ';
  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  const variantClasses = {
    primary: 'border-none',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  return (
    <div className={`max-w-${maxW} mx-auto ${cardClasses}`} onChange={onChange}>
      {name && <h2 className="text-sm font-bold mb-4">{name}</h2>}
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

const CardHeader = ({ children }) => (
  <div className="card-header bg-transparent border-none p-0 relative">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="card-body bg-transparent border-none p-0 relative">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="card-footer bg-transparent border-none p-0 relative">{children}</div>
);

const CardImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="card-img-top w-full pt-5 pb-3 rounded-t-md" />
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
