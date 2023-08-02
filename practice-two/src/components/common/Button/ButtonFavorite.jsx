import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Style
import './style.css';

// Components
import Button from './Button';

// Data
import { ICON } from '../../../constants/data';

const FavoriteButton = ({ onClick }) => {
  // Use state to store the button's state, initialize the value to false
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to handle the event when the button is clicked
  const handleButtonClick = (e) => {
    // Toggle the state when the button is clicked
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);

    // Call the onClick function provided by the parent component
    if (onClick) {
      onClick(e); // Pass the event object to the parent's onClick function
    }
  };

  // Create a variable 'heartIconClasses' to apply CSS classes based on the state of the button
  const heartIconClasses = `heart ${isFavorite ? 'heart-active' : ''}`;

  return (
    <Button variant="outline" size="small" onClick={handleButtonClick}>
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
};

export default FavoriteButton;
