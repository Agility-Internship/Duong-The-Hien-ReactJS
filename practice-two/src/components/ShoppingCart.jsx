import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import SliderBar from './common/SliderBar';
import Typography from './common/Typography';
import Link from './common/Link';

// Data
import { ICON } from '../constants/data';

/**
 * ShoppingCart Component
 *
 * A SliderBar component for displaying cart products.
 * When the button is clicked, a SliderBar with a list of  products is displayed.
 *
 * @param products - An array of all products
 * @returns {JSX.Element} The ShoppingCart Component
 */
const ShoppingCart = ({ products = [] }) => {
  const [isSliderBarOpen, setIsSliderBarOpen] = useState(false);

  if (isSliderBarOpen === true) {
    document.body.classList.add('overflow-hidden');
  }

  const handleButtonClick = () => {
    setIsSliderBarOpen((prevState) => !prevState);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div>
      <Button customVariant="w-11 h-11 relative" onClick={handleButtonClick}>
        <img src={ICON.cart} alt="cart-icon" className="w-6" />
        <div className="absolute -top-3 -right-2">
          <div className="rounded-full text-sm bg-blue-500 text-white p-1 w-5 h-5 flex justify-center items-center">
            1
          </div>
        </div>
      </Button>
      <div className={`fixed w-full inset-0 z-50 ${isSliderBarOpen ? 'bg-black/30' : 'hidden'}`}>
        <SliderBar
          isOpen={isSliderBarOpen}
          onCloseSliderBar={handleButtonClick}
          closeButtonContent="X"
          closeButtonStyle="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black"
          isFixed
          customSliderBarClassNames="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[50%] lg:w-[35%] translate-x-0"
        >
          <div className="w-full h-full">
            <div className="inline-block">
              <Typography level={2} size="xl" variant="soild">
                My Cart
              </Typography>
            </div>
            {/* TODO: Update the display of the cart when there are no products */}
            {/* <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <img src={ICON.cart} alt="cart-icon" className="w-24" />
              <Typography className="mt-6 text-center text-2xl font-bold">Your cart is empty.</Typography>
            </div> */}
            <div className="flex h-full w-full flex-col justify-between overflow-hidden p-1 pb-10">
              <ul className="flex-grow overflow-auto py-4">
                {products.map((product) => {
                  const firstImage = Object.values(product.images)[0]; // Get the first image of the current product
                  return (
                    <li
                      key={product.id}
                      className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                    >
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
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
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
                            <Typography
                              level={3}
                              size="md"
                              variant="plain"
                              className="hover:text-secondary"
                            >
                              {product.name}
                            </Typography>
                            <div className="card-compare flex flex-wrap gap-2 mb-3">
                              <Typography color="black" size="md" variant="solid">
                                {product.version}
                              </Typography>
                              <Typography color="black" size="md" variant="solid">
                                {product.resolution}
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-16 flex-col justify-between">
                          <p className="flex justify-end space-y-2 text-right text-sm">
                            {product.price}
                            <span className="ml-1 inline">VNĐ</span>
                          </p>
                          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                            <Button
                              aria-label="Reduce item quantity"
                              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
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
                              <span className="w-full text-sm">1</span>
                            </Typography>
                            <Button
                              aria-label="Increase item quantity"
                              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
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
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {/* Total */}
              <div className="py-4 text-sm text-neutral-500  dark:text-neutral-400">
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                  <Typography variant="plain">Taxes</Typography>
                  <Typography
                    variant="plain"
                    className="text-right text-base text-black dark:text-white"
                  >
                    0.00
                    <span className="ml-1 inline">VNĐ</span>
                  </Typography>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                  <Typography variant="plain">Shipping</Typography>
                  <Typography variant="plain" className="text-right">
                    Calculated at checkout
                  </Typography>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                  <Typography variant="plain">Total</Typography>
                  <Typography
                    variant="plain"
                    className="text-right text-base text-black dark:text-white"
                  >
                    249.99
                    <span className="ml-1 inline">VNĐ</span>
                  </Typography>
                </div>
              </div>
              <Link
                href="/"
                variant="inline-block bg-secondary hover:bg-blue-800 focus:bg-blue-800 py-2 px-4 rounded-3xl font-semibold text-sm text-center"
                disabled
                color="white"
                underline={false}
                size="lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </SliderBar>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ShoppingCart;
