import React, { useState } from 'react';

// Components
import Button from './common/Button/Button';
import Popover from './common/Popover';
import Typography from './common/Typography';

// Data
import { ICON } from '../constants/data';

/**
 * ShoppingCart Component
 *
 * A popover component for displaying cart products.
 * When the button is clicked, a popover with a list of  products is displayed.
 * The popover automatically closes when clicking outside of it.
 *
 * @param products - An array of all products
 * @returns {JSX.Element} The ShoppingCart Component
 */
const ShoppingCart = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopoverOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button customVariant="w-11 h-11 relative" onClick={handleButtonClick}>
        <img src={ICON.cart} alt="filter-icon" className="w-6" />
        <div className="absolute -top-3 -right-2">
          <div className="rounded-full text-sm bg-blue-500 text-white p-1 w-5 h-5 flex justify-center items-center">
            1
          </div>
        </div>
      </Button>
      <div
        className={`fixed w-full inset-0 bg-black/30 bg-opacity-10 opacity-100 transform transition-transform z-50 ${
          isPopoverOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Popover
          closeButton
          isOpen={isPopoverOpen}
          onClosePopover={handleButtonClick}
          popoverClassName="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[33%] translate-x-0 "
          arrowPopover={false}
        >
          <div className="w-full">
            <div className="inline-block">
              <Typography level={2} size="xl" variant="soild">
                My Cart
              </Typography>
            </div>
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <img src={ICON.cart} alt="filter-icon" className="w-24" />
              <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default ShoppingCart;
