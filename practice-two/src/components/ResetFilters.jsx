import React from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './common/Button/Button';

/**
 * A button component for resetting filters to their initial state.
 *
 * @param onResetFilters - Function to handle resetting filters
 * @returns {JSX.Element} - JSX element representing the reset filters button
 */
const ResetFiltersButton = ({ onResetFilters }) => (
  <Button onClick={onResetFilters}>Reset Filters</Button>
);

ResetFiltersButton.propTypes = {
  onResetFilters: PropTypes.func.isRequired,
};

export default ResetFiltersButton;
