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
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param handleManufacturerFilter - Function to handle manufacturer filtering.
 * @param handlePriceFilter - Function to handle price filtering.
 * @returns {JSX.Element} The FilterCategoryLayout Component.
 */
const FilterCategoryLayout = ({ selectedFilter, handleManufacturerFilter, handlePriceFilter }) => {
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

  const handleManufacturerSelect = (manufacturerAlt) => {
    handleManufacturerFilter(manufacturerAlt);
  };

  return (
    <div>
      <div className="flex gap-4 relative">
        <GroupFilterPopover
          selectedFilter={selectedFilter}
          manufacturers={manufacturers}
          onSelectManufacturer={handleManufacturerFilter}
          prices={prices}
          onSelectPrice={handlePriceFilter}
        />
        <ManuFacturePopover
          selectedFilter={selectedFilter}
          manufacturers={manufacturers}
          onSelectManufacturer={handleManufacturerFilter}
        />
        <PricePopover
          selectedFilter={selectedFilter}
          prices={prices}
          onSelectPrice={handlePriceFilter}
        />
      </div>
      <div className="flex gap-6">
        <div className="mt-5 flex flex-wrap w-full gap-3">
          {manufacturers.map((manufacturer) => (
            <Button
              key={manufacturer.id}
              color={
                selectedFilter.manufacturer.includes(manufacturer.alt)
                  ? 'red' // Add 'border-primary' class for selected manufacturers
                  : ''
              }
              variant="secondary"
              size="medium"
              onClick={handleManufacturerSelect.bind(null, manufacturer.alt)}
            >
              <img
                src={manufacturer.img}
                alt={manufacturer.alt}
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
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FilterCategoryLayout;
