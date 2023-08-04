import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button/Button';
import Popover from './common/Popover';
import Typography from './common/Typography';

// Hook
import useClickOutsides from '../hook/useClickOutside';

// Data
import { ICON } from '../constants/data';

/**
 * GroupFilterPopover Component
 *
 * A popover component for grouping and filtering options.
 * When the button is clicked, a popover with a list of manufacturers and price options is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param categories - An object representing the filter categories with 'id' and 'value'.
 * @param manufacturers - An array of objects representing the manufacturers.
 * @param prices - An array of objects representing the price options.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param onSelectManufacturer - Function to handle selecting a manufacturer option.
 * @param onSelectPrice - Function to handle selecting a price option.
 * @returns {JSX.Element} The GroupFilterPopover Component.
 */
const GroupFilterPopover = ({
  categories = { id: [], value: [] },
  manufacturers = [],
  prices = [],
  selectedFilter = { manufacturer: [], price: [] },
  onSelectManufacturer = () => {},
  onSelectPrice = () => {},
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const selectedPriceIds = selectedFilter.price.map((selectedPrice) => selectedPrice.id);

  useClickOutsides(popoverRef, () => setIsPopoverOpen(false));

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleManufacturerSelect = (e) => {
    onSelectManufacturer(e);
  };

  const handleSelectPrice = (e) => {
    onSelectPrice(e);
  };

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={handleButtonClick}>
        {categories.value}
        <img src={ICON.filter} alt="filter-icon" className="w-4" />
      </Button>
      <Popover isOpen={isPopoverOpen} onClose={handleButtonClick}>
        {/* Group filter popover */}
        <div className="flex flex-wrap w-[900px] max-w-[900px] mt-5 gap-0 max-h-[80vh] p-0">
          {/* Manufacture list */}
          <div className="w-full block px-5 pt-0">
            <div className="mb-1">
              <Typography size="xl">Manufacture</Typography>
            </div>
            {/* Filter Manufactures Button */}
            <div className="gap-2 pt-2 min-h-0 grid grid-cols-5 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
              {manufacturers.map((manufacturer) => (
                <Button
                  key={manufacturer.id}
                  color={
                    selectedFilter.manufacturer.includes(manufacturer.alt)
                      ? 'red' // Add 'border-primary' class for selected manufacturers
                      : 'light' // Use 'light' as the default color
                  }
                  variant="primary"
                  value={manufacturer.alt}
                  onClick={handleManufacturerSelect}
                >
                  <img
                    src={manufacturer.img}
                    alt={`Manufacturer ${manufacturer.alt}`}
                    className="w-full"
                  />
                </Button>
              ))}
            </div>
          </div>
          {/* Hr line */}
          <div className="m-5 border-t-[1px] border-gray w-full" />
          {/*  Price list */}
          <div className="w-full block px-5 pt-0">
            <div className="mb-1">
              <Typography size="xl">Prices</Typography>
            </div>
            {/* Filter Prices Button */}
            <div className="flex gap-5 flex-row flex-wrap pb-5 w-[30%] max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
              {prices.map((price) => {
                const isSelected = selectedPriceIds.includes(`${price.id}`);

                return (
                  <Button
                    key={price.id}
                    id={price.id}
                    variant="primary"
                    color={isSelected ? 'red' : 'light'}
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

GroupFilterPopover.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      min: PropTypes.string,
      max: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSelectManufacturer: PropTypes.func,
  onSelectPrice: PropTypes.func,
};
export default GroupFilterPopover;
