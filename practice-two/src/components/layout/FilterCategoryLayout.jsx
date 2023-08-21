import React from 'react';
import PropTypes from 'prop-types';

// Components
import GroupFilterPopover from '../GroupFilterPopover';
import ManuFacturePopover from '../ManuFactureFilterPopover';
import PricePopover from '../PricesFilterPopover';
import Button from '../common/Button';
import ShoppingCart from '../ShoppingCart';

// Data
import BRAND from '../../constants/brand';
import { PRICES, CATEGORIES } from '../../constants/data';

/**
 * FilterCategoryLayout Component
 *
 * A layout component for displaying filter popovers and buttons for filtering categories.
 * It receives two functions, `handleManufacturerFilter` and `handlePriceFilter`,
 * to handle filtering based on manufacturers and prices, respectively.
 *
 * @param products - An array of all products.
 * @param selectedFilter - Object containing the selected filter criteria.
 * @param cartProductIDs - An array of cart products ID.
 * @param removeFromCart - Function to handle removing a product to the cart.
 * @param onManufacturerFilter - Function to handle manufacturer filtering.
 * @param onPriceFilter - Function to handle price filtering.
 * @param onResetFilters - Function to reset all filters.
 * @returns {JSX.Element} The FilterCategoryLayout Component.
 */
const FilterCategoryLayout = ({
  products = [],
  selectedFilter = { manufacturer: [], price: [] },
  cartProductIDs = [],
  removeFromCart = () => {},
  onManufacturerFilter = () => {},
  onPriceFilter = () => {},
  onResetFilters = () => {},
}) => {
  const manufacturers = BRAND.map((brand) => ({
    id: brand.id,
    img: brand.imageURL,
    alt: brand.type,
  }));
  const prices = PRICES.map((price) => ({
    id: price.id,
    text: price.text,
    min: price.minPrice,
    max: price.maxPrice,
  }));

  const handleManufacturerSelect = (e) => {
    onManufacturerFilter(e.currentTarget.value);
  };

  const handlePriceSelect = (e) => {
    const selectedOption = e.target;
    const selectDataset = e.target.dataset;

    onPriceFilter(selectedOption.id, selectDataset.min, selectDataset.max);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2 sm:gap-4 flex-wrap relative">
          <GroupFilterPopover
            categories={CATEGORIES[0]}
            selectedFilter={selectedFilter}
            manufacturers={manufacturers}
            onSelectManufacturer={handleManufacturerSelect}
            prices={prices}
            onSelectPrice={handlePriceSelect}
          />
          <ManuFacturePopover
            categories={CATEGORIES[1]}
            selectedFilter={selectedFilter}
            manufacturers={manufacturers}
            onSelectManufacturer={handleManufacturerSelect}
          />
          <PricePopover
            categories={CATEGORIES[2]}
            selectedFilter={selectedFilter}
            prices={prices}
            onSelectPrice={handlePriceSelect}
          />
          <Button onClick={onResetFilters}>Reset Filters</Button>
        </div>
        <ShoppingCart
          removeFromCart={removeFromCart}
          products={products}
          cartProductIDs={cartProductIDs}
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
                  : 'light' // Use 'light' as the default color
              }
              variant="secondary"
              size="medium"
              value={manufacturer.alt}
              onClick={handleManufacturerSelect}
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilter: PropTypes.shape({
    manufacturer: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  cartProductIDs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onManufacturerFilter: PropTypes.func,
  onPriceFilter: PropTypes.func,
  onResetFilters: PropTypes.func,
};

export default FilterCategoryLayout;
