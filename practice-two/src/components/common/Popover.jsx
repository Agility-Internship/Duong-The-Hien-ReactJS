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
// prettier-ignore
const Popover = ({ isOpen, onClose, closeButton = true, children }) => (
  isOpen ? (
    <div className="absolute flex top-10 -left-5 bg-white border-2 border-gray-300 m-4 p-5 z-10">
      <div className="flex">
        {children}
        {/* Render the close button only if closeButton prop is true */}
        {closeButton && (
          <div>
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  ) : null
);

Popover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  closeButton: PropTypes.bool,
  children: PropTypes.node,
};

export default Popover;
