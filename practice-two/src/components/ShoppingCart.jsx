import React, { useState } from 'react';

// Components
import Button from './common/Button/Button';
import SliderBar from './SliderBar';
import Typography from './common/Typography';

// Data
import { ICON } from '../constants/data';

/**
 * ShoppingCart Component
 *
 * A SliderBar component for displaying cart products.
 * When the button is clicked, a SliderBar with a list of  products is displayed.
 *
 * @returns {JSX.Element} The ShoppingCart Component
 */
const ShoppingCart = () => {
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
          closeButtonStyle="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black "
          isFixed
          customClassNames="bg-opacity-10 opacity-100 backdrop-blur-none "
          sliderBarClassName="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[33%] translate-x-0 "
        >
          <div className="w-full">
            <div className="inline-block">
              <Typography level={2} size="xl" variant="soild">
                My Cart
              </Typography>
            </div>
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <img src={ICON.cart} alt="cart-icon" className="w-24" />
              <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
            </div>
          </div>
        </SliderBar>
      </div>
    </div>
  );
};

export default ShoppingCart;
