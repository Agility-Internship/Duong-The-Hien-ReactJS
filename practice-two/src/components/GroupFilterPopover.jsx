import React, { useState, useEffect, useRef } from 'react';

// Components
import Button from './common/Button';
import Popover from './common/Popover';
import Typography from './common/Typography';

// Logo Brand
import BRAND from '../constants/brand';
import { PRICES } from '../constants/data';

/**
 * GroupFilterPopover Component
 *
 * A popover component for grouping and filtering options.
 * When the button is clicked, popover with a list of manufacturers and price options is displayed.
 * Users can select specific options to apply filters, e.g., for a product list.
 * The popover automatically closes when clicking outside of it.
 *
 * @returns {JSX.Element} The GroupFilterPopover Component
 */
const GroupFilterPopover = () => {
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

  const prices = PRICES.map((price) => ({
    text: price.text,
    min: price.minPrice,
    max: price.maxPrice,
  }));

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
            {/* Hr line */}
            <div className="m-5 border-t-[1px] border-gray w-full" />
            {/*  Price list */}
            <div className="w-full block px-5 pt-0">
              <div className="mb-1">
                <Typography size="xl">Prices</Typography>
              </div>
              {/* Filter Prices Button */}
              {/* TODO: Update reuse components, props Prices */}
              <div className="flex gap-5 flex-row flex-wrap pb-5 w-[30%] max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                {prices.map((price, key) => (
                  <Button
                    key={key.id}
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

export default GroupFilterPopover;
