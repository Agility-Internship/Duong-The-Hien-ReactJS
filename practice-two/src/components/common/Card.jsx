import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Link from './Link';
import Chip from './Chip';

// Card component
const Card = ({
  maxW = 'xl',
  variant = 'primary',
  children,
  onChange = () => {},
}) => {
  const commonClasses = 'bg-white';

  const variantClasses = {
    primary: 'border-none',
    secondary: 'border-secondary',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  const cardClasses = `${commonClasses} ${variantClasses[variant]}`;

  return (
    <div className={`card max-w-${maxW} ${cardClasses}`} onChange={onChange}>
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

// CardContent component
const CardContent = ({ children }) => (
  <div className="card-content bg-transparent border-none h-4/5 pt-5 relative">
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardImage component
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

// CardOverflow component
const CardOverflow = ({ children }) => (
  <div className="card-overflow">{children}</div>
);

CardOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};

// Usage of components
const ProductCard = () => (
  <Card>
    <CardOverflow>
      <Typography
        level="body3"
        variant="solid"
      >
        Bluetooth Headset
      </Typography>

      <CardImage
        src="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
        alt=""
      />
      <CardContent>
        <Typography level="body3">Bluetooth Headset</Typography>
        <Link
          href="/product-card"
          color="red"
          disabled
          level="body3"
          variant="custom-variant"
        >
          Super Rockez A400
        </Link>
        <Chip
          color="gray"
          disabled
          size="small"
          variant="outlined"
        >
          Example Chip
        </Chip>
        <Typography level="body3" sx={{ mt: 1 }}>
          2,900 THB
        </Typography>
        <Typography level="body2" />
      </CardContent>
    </CardOverflow>
  </Card>
);

export default ProductCard;
