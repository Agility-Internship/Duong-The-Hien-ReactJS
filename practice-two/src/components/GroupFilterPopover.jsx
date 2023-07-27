import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Popover from './common/Popover';
import Typography from './common/Typography';

// Hook
import useClickOutsides from '../hook/useClickOutside';
/**
 * GroupFilterPopover Component
 *
 * A popover component for grouping and filtering options.
 * When the button is clicked, popover with a list of manufacturers and price options is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param manufacturers An array of objects representing the manufacturers.
 * @param prices - An array of objects representing the price options.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param onSelectManufacturer - Function to handle selecting a manufacturer option.
 * @returns {JSX.Element} The GroupFilterPopover Component
 */
const GroupFilterPopover = ({
  manufacturers = [],
  prices = [],
  selectedFilter,
  onSelectManufacturer,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutsides(popoverRef, () => setIsPopoverOpen(false));

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </Button>
      {isPopoverOpen && (
        <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
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
                        : ''
                    }
                    variant="primary"
                    onClick={() => onSelectManufacturer(manufacturer.alt)}
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
                {prices.map((price) => (
                  <Button
                    key={price.id}
                    data-min={price.min}
                    data-max={price.max}
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

GroupFilterPopover.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onSelectManufacturer: PropTypes.func.isRequired,
};
export default GroupFilterPopover;
