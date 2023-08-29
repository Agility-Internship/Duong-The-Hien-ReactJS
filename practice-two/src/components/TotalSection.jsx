import React from 'react';
import PropTypes from 'prop-types';

// Components
import Typography from './common/Typography';

// Filter
import { formatCurrency } from '../helper/productHelpers';

/**
 * TotalSection Component
 *
 * A TotalSection component for displaying total prices
 *
 * @param productPrices - The product prices number
 * @returns {JSX.Element} The TotalSection Component
 */
const TotalSection = ({ productPrices = {} }) => {
  // Calculate the total price from the productPrices array
  const totalPrice = Object.values(productPrices).reduce((sum, price) => sum + price, 0);

  return (
    <div className="py-4 text-sm text-neutral-500  dark:text-neutral-400">
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
        <Typography variant="plain">Taxes</Typography>
        <Typography variant="plain" className="text-right text-base text-black dark:text-white">
          0.00
          <span className="ml-1 inline">VNĐ</span>
        </Typography>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
        <Typography variant="plain">Shipping</Typography>
        <Typography variant="plain" className="text-right">
          Calculated at checkout
        </Typography>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
        <Typography variant="plain">Total</Typography>
        <Typography variant="plain" className="text-right text-base text-black dark:text-white">
          {formatCurrency(totalPrice)}
          <span className="ml-1 inline">VNĐ</span>
        </Typography>
      </div>
    </div>
  );
};
TotalSection.propTypes = {
  productPrices: PropTypes.number.isRequired,
};

export default TotalSection;
