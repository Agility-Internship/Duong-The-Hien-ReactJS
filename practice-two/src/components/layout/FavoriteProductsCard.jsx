import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../common/Button/Button';
import Popover from '../common/Popover';
import ProductCard from '../ProductCard';

/**
 * FavoriteProductsCard Component
 *
 * A popover component for displaying favorite products.
 * When the button is clicked, a popover with a list of favorite products is displayed.
 * The popover automatically closes when clicking outside of it.
 *
 * @param products - An array of all products
 * @returns {JSX.Element} The FavoriteProductsCard Component
 */
const FavoriteProductsCard = ({ products }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Like</Button>
      {isPopoverOpen && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
          <Popover
            closeButton
            isOpen={isPopoverOpen}
            onClose={handleButtonClick}
            popoverClassName="relative bg-white p-8 rounded border border-gray-300 max-h-[500px] max-w-[900px] overflow-y-auto"
            arrowPopover={false}
          >
            <div className="mb-4">
              <h2 className="text-2xl text-center pb-4">My Favorite List</h2>
              <div className="grid grid-cols-3 border ">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden flex items-center p-2 pt-4 pb-5 border-r border-b relative"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};
FavoriteProductsCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FavoriteProductsCard;
