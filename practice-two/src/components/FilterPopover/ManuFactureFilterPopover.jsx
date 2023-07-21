import React, { useState, useEffect, useRef } from 'react';

// Components
import Button from '../common/Button';
import Popover from '../common/Popover';

// Logo Brand
import BRAND from '../../constants/brand';

/**
 * ManuFactureFilterPopover Component
 *
 * A popover component for filtering options.
 * When the button is clicked, popover with a list of manufacturers is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @returns {JSX.Element} The ManuFactureFilterPopover Component
 */
const ManuFacturePopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Handle clicks outside the popover to close it
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener to detect clicks outside the popover when it's open.
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts.
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const manufacturers = BRAND.map((brand) => brand.imageURL);

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        ManuFactures
        <img src="public\images\down.png" alt="filter-icon" className="w-4" />
      </Button>
      {isPopoverOpen && (
        <Popover
          closeButton={false}
          isOpen={isPopoverOpen}
          onClose={() => setIsPopoverOpen(false)}
        >
          <div className="flex flex-wrap w-[900px] max-w-[900px] gap-0 max-h-[80vh] py-5">
            {/* Manufacture list */}
            <div className="w-full block px-5">
              {/* Filter Manufactures Button */}
              {/* TODO: Update reuse components, props manufactures */}
              <div className="gap-2 pt-2 min-h-0 grid grid-cols-5 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                {manufacturers.map((manufacturer, key) => (
                  <Button key={key.id}>
                    <img
                      src={manufacturer}
                      alt={`Manufacturer ${key + 1}`}
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

export default ManuFacturePopover;
