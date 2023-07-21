import React from 'react';

// Components
import GroupFilterPopover from '../GroupFilterPopover';
import ManuFacturePopover from '../ManuFactureFilterPopover';
import PricePopover from '../PircesFilterPopover';
import Button from '../common/Button';

// Data
import BRAND from '../../constants/brand';
import { PRICES } from '../../constants/data';

const FilterCategoryLayout = () => {
  // Prepare data for manufacturers and prices
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
      <div className="filter-category flex gap-4 relative">
        {/* Use the GroupFilterPopover component with the 'manufacturers' and 'prices' props */}
        <GroupFilterPopover manufacturers={manufacturers} prices={prices} />

        {/* Use the ManuFacturePopover component with the 'manufacturers' prop */}
        <ManuFacturePopover manufacturers={manufacturers} />

        {/* Use the PricePopover component with the 'prices' prop */}
        <PricePopover prices={prices} />
      </div>
      <div className="flex gap-6">
        <div className="mt-5 flex flex-wrap gap-3">
          {manufacturers.map((manufacturer) => (
            <Button key={manufacturer.id} variant="secondary" size="large">
              <img
                src={manufacturer.img}
                alt={`Manufacturer ${manufacturer.alt}`}
                className="w-full"
                style={{ padding: '0 15px' }}
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCategoryLayout;
