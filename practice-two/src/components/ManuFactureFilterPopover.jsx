import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Popover from './common/Popover';

// Hook
import useClickOutside from '../hook/useClickOutside';

/**
 * ManuFactureFilterPopover Component
 *
 * A popover component for filtering options.
 * When the button is clicked, popover with a list of manufacturers is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @param manufacturers - An array of objects representing the manufacturers.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param onSelectManufacturer - Function to handle selecting a manufacturer option.
 * @returns {JSX.Element} The ManuFactureFilterPopover Component
 */
const ManuFacturePopover = ({
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
    onSelectManufacturer(e.target.value);
  };

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={handleButtonClick}>
        ManuFactures
        <img src="public\images\down.png" alt="filter-icon" className="w-4" />
      </Button>
      {isPopoverOpen && (
        <Popover closeButton={false} isOpen={isPopoverOpen} onClose={handleButtonClick}>
          <div className="flex flex-wrap w-[900px] max-w-[547px] gap-0 max-h-[80vh] py-5">
            {/* Manufacture list */}
            <div className="w-full block px-5">
              {/* Filter Manufactures Button */}
              <div className="gap-2 pt-2 min-h-0 grid grid-cols-5 max-h-[23vh] max-w-[500wh] overflow-hidden py overflow-y-auto overflow-x-auto">
                {manufacturers.map((manufacturer) => (
                  <Button
                    key={manufacturer.id}
                    color={
                      selectedFilter.manufacturer.includes(manufacturer.alt)
                        ? 'red' // Add 'border-primary' class for selected manufacturers
                        : ''
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
      )}
    </div>
  );
};

ManuFacturePopover.propTypes = {
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
