// ButtonDropdown.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonDropdown = ({ children, dropdownContent, ...buttonProps }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = () => {
    toggleDropdown();
  };

  return (
    <div>
      <Button onClick={handleButtonClick} {...buttonProps}>
        {children}
      </Button>

      {isDropdownOpen && (
        <div className="bg-white mt-2 p-2 shadow">
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

ButtonDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
};

export default ButtonDropdown;
