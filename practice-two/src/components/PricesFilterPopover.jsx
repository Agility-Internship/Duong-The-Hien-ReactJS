import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Popover from './common/Popover';

// Hook
import useClickOutside from '../hook/useClickOutside';

// Data
import { ICON } from '../constants/data';

/**
 * PricePopover Component
 *
 * A popover component for filtering options.
 * When the button is clicked, popover with a list of prices is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param categories - An object representing the filter categories with 'id' and 'value'.
 * @param prices - An array of objects representing the price options.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param onSelectPrice - Function to handle selecting a price option.
 * @returns {JSX.Element} The PricePopover Component
 */
const PricePopover = ({
  categories = { id: [], value: [] },
  prices = [],
  selectedFilter = { manufacturer: [], price: [] },
  onSelectPrice = () => {},
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const selectedPriceIds = selectedFilter.price.map((selectedPrice) => selectedPrice.id);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleSelectPrice = (e) => {
    onSelectPrice(e);
  };

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={handleButtonClick}>
        {categories.value}
        <img src={ICON.dropdown} alt="filter-icon" className="w-4" />
      </Button>
      <Popover closeButton={false} isOpen={isPopoverOpen} onClosePopover={handleButtonClick}>
        <div className="flex flex-wrap w-[130px] sm:w-[300px] md:w-[300px] max-w-[547px] gap-0 max-h-[80vh] py-5">
          <div className="w-full block px-5">
            <div className="flex gap-5 flex-row flex-wrap w-[100%] max-h-[100vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
              {prices.map((price) => {
                const isSelected = selectedPriceIds.includes(`${price.id}`);

                return (
                  <Button
                    key={price.id}
                    id={price.id}
                    variant="primary"
                    color={isSelected ? 'red' : 'light'} // Set color based on isSelected
                    size="medium"
                    data-min={price.min}
                    data-max={price.max}
                    onClick={handleSelectPrice}
                  >
                    {price.text}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Popover>
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
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSelectPrice: PropTypes.func.isRequired,
};
export default PricePopover;
