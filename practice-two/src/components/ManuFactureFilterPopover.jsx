import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button/Button';
import Popover from './common/Popover';

// Hook
import useClickOutside from '../hook/useClickOutside';

// Data
import { ICON } from '../constants/data';

/**
 * ManuFactureFilterPopover Component
 *
 * A popover component for filtering options.
 * When the button is clicked, popover with a list of manufacturers is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param categories - An object representing the category for this popover.
 * @param manufacturers - An array of objects representing the manufacturers.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param onSelectManufacturer - Function to handle selecting a manufacturer option.
 * @returns {JSX.Element} The ManuFactureFilterPopover Component
 */
const ManuFacturePopover = ({
  categories = { id: [], value: [] },
  manufacturers = [],
  selectedFilter = { manufacturer: [], price: [] },
  onSelectManufacturer = () => {},
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleManufacturerSelect = (e) => {
    onSelectManufacturer(e);
  };

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={handleButtonClick}>
        {categories.value}
        <img src={ICON.dropdown} alt="filter-icon" className="w-4" />
      </Button>
      <Popover closeButton={false} isOpen={isPopoverOpen} onClosePopover={handleButtonClick}>
        <div className="flex flex-wrap sm:w-[500px] md:w-[900px] max-w-[547px] gap-0 max-h-[80vh] h-auto py-5">
          {/* Manufacture list */}
          <div className="w-full block px-5">
            {/* Filter Manufacturers Button */}
            <div className="gap-2 pt-2 min-h-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 max-h-[vh] max-w-[500wh] overflow-hidden py overflow-y-auto overflow-x-auto">
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
        </div>
      </Popover>
    </div>
  );
};

ManuFacturePopover.propTypes = {
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
  onSelectManufacturer: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default ManuFacturePopover;
