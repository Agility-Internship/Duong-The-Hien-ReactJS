import React from 'react';
import PropTypes from 'prop-types';

// Card
const Card = ({
  maxW = 'xl',
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
      {children}
    </div>
  );
};

Card.propTypes = {
  maxW: PropTypes.string,
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

// CardHeader
const CardHeader = ({ children }) => (
  <div className="card-header bg-transparent border-none p-0 relative">
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardContent
const CardContent = ({ children }) => (
  <div className="card-body bg-transparent border-none p-0 relative">
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardFooter
const CardFooter = ({ children }) => (
  <div className="card-footer bg-transparent border-none p-0 relative">
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardImage
const CardImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="card-img-top w-full pt-5 pb-3 rounded-t-md"
  />
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
