import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './Button';

/**
 * Popover Component
 * @param children - The content inside the Popover trigger button.
 * @param popoverContent - The content to be shown inside the Popover when it's open.
 * @param buttonProps - Any additional props to be passed to the Button component.
 * @returns {JSX.Element} Popover component
 */
const Popover = ({ children, popoverContent = null, ...buttonProps }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Function to toggle the Popover open/close state.
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  // Function to handle the button click event and toggle the Popover.
  const handleButtonClick = () => {
    togglePopover();
  };

  return (
    <div>
      <Button onClick={handleButtonClick} {...buttonProps}>
        {children}
      </Button>

      {isPopoverOpen && (
        <div className="bg-white mt-2 p-2 shadow">{popoverContent}</div>
      )}
    </div>
  );
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  popoverContent: PropTypes.node.isRequired,
};

export default Popover;
