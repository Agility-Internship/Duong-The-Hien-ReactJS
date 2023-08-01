import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Popover from './common/Popover';

// Hook
import useClickOutside from '../hook/useClickOutside';

/**
 * PricePopover Component
 *
 * A popover component for filtering options.
 * When the button is clicked, popover with a list of prices is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param prices - An array of objects representing the price options.
 * @returns {JSX.Element} The PricePopover Component
 */
const PricePopover = ({ categories = { id: [], value: [] }, prices = [], onSelectPrice }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const handleSelectPrice = (e) => {
    onSelectPrice(e.target.value);
  };

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div key={categories.id} className="relative" ref={popoverRef}>
      <Button onClick={handleButtonClick}>
        {categories.value}
        <img src="public\images\down.png" alt="filter-icon" className="w-4" />
      </Button>
      {isPopoverOpen && (
        <Popover closeButton={false} isOpen={isPopoverOpen} onClose={handleButtonClick}>
          <div className="flex flex-wrap w-[900px] max-w-[547px] gap-0 max-h-[80vh] py-5">
            <div className="w-full block px-5">
              <div className="gap-2 pt-2 grid grid-cols-4 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                {prices.map((price) => (
                  <Button
                    key={price.id}
                    variant="primary"
                    size="medium"
                    data-min={price.min}
                    data-max={price.max}
                    style={{ display: 'block' }}
                    onClick={handleSelectPrice}
                  >
                    {price.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Popover>
      )}
    </div>
  );
};
PricePopover.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      min: PropTypes.string,
      max: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelectPrice: PropTypes.func.isRequired,
};
export default PricePopover;
