import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Typography from './common/Typography';

// Helper functions
import { convertPriceToNumber, formatCurrency } from '../helper/productHelpers';

// Remove Button Component
const RemoveButton = ({ onClick = () => {} }) => (
  <Button
    aria-label="Remove cart item"
    className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </Button>
);

// Quantity Button Component
const QuantityButton = ({ label = '', onClick = () => {}, children }) => (
  <Button
    aria-label={label}
    className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
    onClick={onClick}
  >
    {children}
  </Button>
);

// Product Image Component
const ProductImage = ({ src, alt }) => (
  <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
    <img src={src} alt={alt} width="64" height="64" className="h-full w-full object-cover" />
  </div>
);

/**
 * CartItem Component
 *
 * A CartItem component for displaying details products
 *
 * @param product - The product data object
 * @param productQuantity - The product Quantity number
 * @param removeFromCart - Function to handle remove a product to the cart
 * @param updateQuantity - Function to handle update a product to the cart
 * @returns {JSX.Element} The CartItem Component
 */
const CartItem = ({
  product = {},
  productQuantity = {},
  updateQuantity = () => {},
  removeFromCart = () => {},
}) => {
  const { id, images, name, version, resolution, price } = product;

  // Extract the first image from the images object
  const firstImage = Object.values(images)[0];

  // State for managing the quantity of the product
  const [quantity, setQuantity] = useState(productQuantity);

  // Convert the price from string to a numeric value
  const convertedPrice = convertPriceToNumber(price);

  // Compute the product price based on convertedPrice and quantity
  const productPrice = convertedPrice * quantity;

  // Function to update both quantity and price of the product
  const updateProductPriceAndQuantity = (newQuantity) => {
    setQuantity(newQuantity);

    // Call the updateQuantity function to update the cart's quantity for this product
    updateQuantity(id, newQuantity);
  };

  // Function to decrease the product quantity by 1
  const decreaseQuantity = () => {
    if (quantity > 0) {
      updateProductPriceAndQuantity(quantity - 1);
    }
  };

  // Function to increase the product quantity by 1
  const increaseQuantity = () => {
    updateProductPriceAndQuantity(quantity + 1);
  };

  // Function to handle removing the product from the cart
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-400">
      <div className="relative flex w-full flex-row justify-between px-1 py-4">
        <div className="absolute z-40 -mt-2 ml-[55px]">
          <RemoveButton onClick={handleRemoveFromCart} />
        </div>
        <div className="z-30 flex flex-row space-x-4">
          <ProductImage src={firstImage} alt="Products images" />
          <div className="flex flex-1 flex-col text-base">
            <Typography level={3} size="md" variant="plain" className="hover:text-secondary">
              {name}
            </Typography>
            <div className="card-compare flex flex-wrap gap-2 mb-3">
              <Typography color="black" size="md" variant="solid">
                {version}
              </Typography>
              <Typography color="black" size="md" variant="solid">
                {resolution}
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex h-16 flex-col justify-between">
          <Typography variant="plain" className="flex justify-end space-y-2 text-right text-sm">
            {formatCurrency(productPrice)}
            VNĐ
          </Typography>
          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-400">
            <QuantityButton label="Reduce item quantity" onClick={decreaseQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 dark:text-neutral-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </QuantityButton>
            <Typography variant="plain" className="w-6 text-center">
              <span className="w-full text-sm">{quantity}</span>
            </Typography>
            <QuantityButton label="Increase item quantity" onClick={increaseQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 dark:text-neutral-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </QuantityButton>
          </div>
        </div>
      </div>
    </li>
  );
};

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

QuantityButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.objectOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    resolution: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  productQuantity: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
