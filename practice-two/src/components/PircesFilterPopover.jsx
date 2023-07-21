import React, { useState, useRef } from 'react';

// Components
import Button from './common/Button';
import Popover from './common/Popover';

// Logo Prices
import { PRICES } from '../constants/data';

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
 * @returns {JSX.Element} The PricePopover Component
 */
const PricePopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const prices = PRICES.map((price) => ({
    text: price.text,
    min: price.minPrice,
    max: price.maxPrice,
  }));

  return (
    <div className="relative" ref={popoverRef}>
      <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        Prices
        <img src="public\images\down.png" alt="filter-icon" className="w-4" />
      </Button>
      {isPopoverOpen && (
        <Popover
          closeButton={false}
          isOpen={isPopoverOpen}
          onClose={() => setIsPopoverOpen(false)}
        >
          <div className="flex flex-wrap w-[900px] max-w-[900px] gap-0 max-h-[80vh] py-5">
            {/* PricePopover list */}
            <div className="w-full block px-5">
              {/* Filter PricePopovers Button */}
              {/* TODO: Update reuse components, props PricePopovers */}
              <div className="gap-2 pt-2 min-h-0 grid grid-cols-5 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                {prices.map((price) => (
                  <Button
                    variant="primary"
                    size="large"
                    key={price.id}
                    data-min={price.min}
                    data-max={price.max}
                    style={{ display: 'block' }}
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

export default PricePopover;
