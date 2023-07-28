import React from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './Button';

/**
 * Popover comments
 * @param isOpen - Flag to determine if the popover is open.
 * @param onClose - Function to be called when the popover should be closed.
 * @param closeButton - Flag to determine whether to show the close button.
 * @returns {JSX.Element|null} The Popover component JSX.
 */
const Popover = ({ isOpen, onClose, closeButton = true, children }) =>
  isOpen ? (
    <div className="absolute flex top-10 -left-5 bg-white m-4 z-200 shadow-2xl">
      <div className="flex">
        {children}
        {/* Render the close button only if closeButton prop is true */}
        {closeButton && (
          <div className="absolute top-1 right-2">
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
      <div className="h-8 w-8 rounded border rotate-45 bg-transparent border-gray-300 shadow-2xl absolute left-6 top-[-6px] -z-10" />
    </div>
  ) : null;

Popover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  closeButton: PropTypes.bool,
  children: PropTypes.node,
};

export default Popover;
