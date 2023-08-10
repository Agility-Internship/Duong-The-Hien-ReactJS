import React from 'react';
import PropTypes from 'prop-types';

// Style
import './style.css';

// Components
import Button from './Button';

// Data
import { ICON } from '../../../constants/data';

/**
 * FavoriteButton Component
 *
 * A custom button component that represents a favorite/unfavorite action.
 * When clicked, it toggles between the active (favorite) and inactive (unfavorite) states.
 *
 * @param onClick - Function to handle the click event when the button is clicked.
 * @param isFavorite - Boolean value indicating if the button is in the favorite state.
 * @returns {JSX.Element} The FavoriteButton component JSX.
 */
const FavoriteButton = ({ onClick = () => {}, isFavorite = false }) => {
  /**
   * Handle the click event of the button.
   * @param {Object} e - Event object
   */
  const handleButtonClick = (e) => {
    // Call the onClick function provided by the parent component
    if (onClick) {
      onClick(e); // Pass the event object and the new 'isFavorite' value to the parent's onClick function
    }
  };

  // Create a variable 'heartIconClasses' to apply CSS classes based on the 'isFavorite' prop
  const heartIconClasses = `heart ${isFavorite ? 'heart-active' : ''}`;

  return (
    <Button
      customVariant="relative w-[50px] h-[50px] -top-3"
      variant="outline"
      size="small"
      onClick={handleButtonClick}
    >
      {/* Use inline styles to set the background */}
      <span
        className={heartIconClasses}
        style={{
          background: `url(${ICON.heart}) no-repeat`,
          backgroundSize: '2900%',
        }}
      />
    </Button>
  );
};

FavoriteButton.propTypes = {
  onClick: PropTypes.func, // Add the 'onClick' prop type
  isFavorite: PropTypes.bool, // Add the 'isFavorite' prop type
};

export default FavoriteButton;
