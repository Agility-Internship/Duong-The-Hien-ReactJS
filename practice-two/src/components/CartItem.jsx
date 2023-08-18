import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Typography from './common/Typography';

/**
 * CartItem Component
 *
 * A CartItem component for displaying details products
 *
 * @param products - An array of all products
 * @returns {JSX.Element} The CartItem Component
 */
const CartItem = ({ product }) => {
  const { images, name, version, resolution, price } = product;
  const firstImage = Object.values(images)[0];

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
      <div className="relative flex w-full flex-row justify-between px-1 py-4">
        <div className="absolute z-40 -mt-2 ml-[55px]">
          <Button
            aria-label="Remove cart item"
            className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
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
        </div>
        <div className="z-30 flex flex-row space-x-4">
          <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <img
              src={firstImage}
              alt="Lightweight Jacket"
              width="64"
              height="64"
              className="h-full w-full object-cover"
            />
          </div>
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
            {price}
            VNĐ
          </Typography>
          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
            <Button
              aria-label="Reduce item quantity"
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
              onClick={decreaseQuantity}
            >
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
            </Button>
            <Typography variant="plain" className="w-6 text-center">
              <span className="w-full text-sm">{quantity}</span>
            </Typography>
            <Button
              aria-label="Increase item quantity"
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              onClick={increaseQuantity}
            >
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
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    resolution: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
