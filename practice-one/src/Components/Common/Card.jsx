import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  maxW = 'xl',
  variant = 'primary',
  children,
  onChange = () => {},
}) => {
  const commonClasses = 'bg-white ';

  const variantClasses = {
    primary: 'border-none',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${variantClasses[variant]}`;

  return (
    <div className={`max-w-${maxW} ${cardClasses} `} onChange={onChange}>
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

const CardHeader = ({ children }) => (
  <div className="card-header bg-transparent border-none p-0 relative">
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardContent = ({ children }) => (
  <div className="card-body bg-transparent border-none h-4/5 pt-5 relative">
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardFooter = ({ children }) => (
  <div className="card-footer bg-transparent border-none p-0 relative">
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

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
