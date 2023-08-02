import React, { useState, useRef } from 'react';

// Components
import Button from '../../common/Button/Button';
import Popover from '../../common/Popover';
import useClickOutside from '../../../hook/useClickOutside';

// Style
import './style.css';

/**
 * FavoriteProductsCard Component
 *
 * A popover component for displaying favorite products.
 * When the button is clicked, a popover with a list of favorite products is displayed.
 * The popover automatically closes when clicking outside of it.
 *
 * @param {Object} props - The props object
 * @param {Array} props.favoriteProductIds - An array of favorite product IDs
 * @param {Array} props.products - An array of all products
 * @returns {JSX.Element} The FavoriteProductsCard Component
 */
const FavoriteProductsCard = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="" ref={popoverRef}>
      <Button onClick={handleButtonClick}>Favorite Products</Button>
      <div className={`popover-container ${isPopoverOpen ? 'visible' : 'hidden'}`}>
        <Popover closeButton={false} isOpen={isPopoverOpen} onClose={handleButtonClick}>
          <div className="bg-white p-8 shadow-lg w-64 left-20 top-10">
            <h2 className="font-secondary text-2xl leading-xl text-centerpb-5 relative">
              My Favorite List
            </h2>
            <div className="flex flex-wrap">{/* ... */}</div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default FavoriteProductsCard;
