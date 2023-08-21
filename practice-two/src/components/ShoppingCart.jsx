import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import SliderBar from './common/SliderBar';
import Typography from './common/Typography';
import CartItem from './CartItem';
import TotalSection from './TotalSection';

// Data
import { ICON } from '../constants/data';

/**
 * ShoppingCart Component
 *
 * A SliderBar component for displaying cart products.
 * When the button is clicked, a SliderBar with a list of  products is displayed.
 *
 * @param products - An array of all products
 * @param cartProductIDs - An array of IDs of products in the cart
 * @param removeFromCart - Function to handle removing a product to the cart
 * @returns {JSX.Element} The ShoppingCart Component
 */
const ShoppingCart = ({ products = [], cartProductIDs = [], removeFromCart = () => {} }) => {
  const [isSliderBarOpen, setIsSliderBarOpen] = useState(false);

  if (isSliderBarOpen === true) {
    document.body.classList.add('overflow-hidden');
  }

  // Toggle slider bar and lock scroll
  const handleButtonClick = () => {
    setIsSliderBarOpen((prevState) => !prevState);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div>
      <Button customClass="w-11 h-11 relative" onClick={handleButtonClick}>
        <img src={ICON.cart} alt="cart-icon" className="w-6" />
        <div className="absolute -top-3 -right-2">
          <div className="rounded-full text-sm bg-blue-500 text-white p-1 w-5 h-5 flex justify-center items-center">
            {cartProductIDs.length}
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
              <Typography level={2} size="xl" variant="plain">
                My Cart
              </Typography>
            </div>
            {cartProductIDs.length === 0 ? (
              <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                <img src={ICON.cart} alt="cart-icon" className="w-24" />
                <Typography variant="plain" className="mt-6 text-center text-2xl font-bold">
                  Your cart is empty.
                </Typography>
              </div>
            ) : (
              <div className="flex h-full w-full flex-col justify-between overflow-hidden p-1 pb-10">
                <ul className="flex-grow overflow-auto py-4">
                  {cartProductIDs.map((productId) => {
                    const productCart = products.find((p) => p.id === productId);
                    if (!productCart) return null;
                    return (
                      <CartItem
                        key={productCart.id}
                        product={productCart}
                        removeFromCart={removeFromCart}
                      />
                    );
                  })}
                </ul>
                <TotalSection />
                <Button
                  variant="outline"
                  customClass="inline-block bg-secondary hover:bg-blue-800 focus:bg-blue-800 py-2 px-4 rounded-3xl text-lg text-white font-semibold flex justify-center"
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
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
  cartProductIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
