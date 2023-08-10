import React from 'react';
import PropTypes from 'prop-types';

/**
 * CardContent Component.
 *
 * A reusable component representing the content of a card.
 * @param children - The content to be displayed within the card.
 * @param onClick - Function to handle the click event on the card content.
 * @returns {JSX.Element} Card content.
 */
const CardContent = ({ children, onClick = () => {} }) => {
  const handleButtonClick = (e) => {
    onClick(e);
  };

  const handleKeyDown = (e) => {
    // Check if the Enter key is pressed
    if (e.key === 'Enter') {
      onClick(e);
    }
  };
  return (
    <div
      className="card-content bg-transparent border-none h-4/5 relative"
      onClick={handleButtonClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0} // This makes the div focusable
    >
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default CardContent;
