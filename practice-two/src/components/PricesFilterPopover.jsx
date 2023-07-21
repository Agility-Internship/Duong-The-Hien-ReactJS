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
 * @returns {JSX.Element} The PricePopover Component
 */
const PricePopover = ({ prices }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

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
          <div className="flex flex-wrap w-[900px] max-w-[547px] gap-0 max-h-[80vh] py-5">
            {/* PricePopover list */}
            <div className="w-full block px-5">
              {/* Filter PricePopovers Button */}

              <div className="gap-2 pt-2 grid grid-cols-4 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                {prices.map((price) => (
                  <Button
                    variant="primary"
                    size="meidum"
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
PricePopover.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default PricePopover;
