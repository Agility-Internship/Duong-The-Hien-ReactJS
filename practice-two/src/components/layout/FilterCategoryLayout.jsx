import React from 'react';
import PropTypes from 'prop-types';

// Components
import GroupFilterPopover from '../GroupFilterPopover';
import ManuFacturePopover from '../ManuFactureFilterPopover';
import PricePopover from '../PricesFilterPopover';
import Button from '../common/Button';

// Data
import BRAND from '../../constants/brand';
import { PRICES } from '../../constants/data';

/**
 * FilterCategoryLayout Component
 *
 * A layout component for displaying filter popovers and buttons for filtering categories.
 * It receives two functions, `handleManufacturerFilter` and `handlePriceFilter`,
 * to handle filtering based on manufacturers and prices, respectively.
 *
 * @param handleManufacturerFilter - Function to handle manufacturer filtering.
 * @param handlePriceFilter - Function to handle price filtering.
 * @returns {JSX.Element} The FilterCategoryLayout Component.
 */
const FilterCategoryLayout = ({
  handleManufacturerFilter,
  handlePriceFilter,
}) => {
  const manufacturers = BRAND.map((brand) => ({
    id: brand.id,
    img: brand.imageURL,
    alt: brand.type,
  }));

  const prices = PRICES.map((price) => ({
    text: price.text,
    min: price.minPrice,
    max: price.maxPrice,
  }));

  return (
    <div>
      <div className="flex gap-4 relative">
        <GroupFilterPopover manufacturers={manufacturers} prices={prices} />
        <ManuFacturePopover
          manufacturers={manufacturers}
          onSelectManufacturer={handleManufacturerFilter}
        />
        <PricePopover prices={prices} onSelectPrice={handlePriceFilter} />
      </div>
      <div className="flex gap-6">
        <div className="mt-5 flex flex-wrap w-full gap-3">
          {manufacturers.map((manufacturer) => (
            <Button
              key={manufacturer.id}
              variant="secondary"
              size="medium"
              onClick={() => handleManufacturerFilter(manufacturer.alt)}
            >
              <img
                src={manufacturer.img}
                alt={manufacturer.alt} // Use the manufacturer type as alt text
                className="w-full"
                style={{ padding: '0 10px', width: 'auto', height: '20px' }}
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

FilterCategoryLayout.propTypes = {
  handleManufacturerFilter: PropTypes.func.isRequired,
  handlePriceFilter: PropTypes.func.isRequired,
};

export default FilterCategoryLayout;
