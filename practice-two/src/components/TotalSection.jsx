import React from 'react';
import PropTypes from 'prop-types';

// Components
import Typography from './common/Typography';

// Helper functions
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
  const totalPrice = productPrices.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="py-4 text-sm text-neutral-500  dark:text-neutral-400">
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-400">
        <Typography variant="plain" className="text-gray-800">
          Taxes
        </Typography>
        <Typography size="xxl" variant="plain" className="text-right text-base text-black">
          0.00
          <span className="ml-1 inline">VNĐ</span>
        </Typography>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-400">
        <Typography variant="plain" className="text-gray-800">
          Shipping
        </Typography>
        <Typography variant="plain" className="text-right text-gray-800">
          Calculated at checkout
        </Typography>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-400">
        <Typography variant="plain" className="text-gray-800">
          Total
        </Typography>
        <Typography size="xxl" variant="plain" className="text-right text-base text-black">
          {formatCurrency(totalPrice)}
          <span className="ml-1 inline">VNĐ</span>
        </Typography>
      </div>
    </div>
  );
};

TotalSection.propTypes = {
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TotalSection;
