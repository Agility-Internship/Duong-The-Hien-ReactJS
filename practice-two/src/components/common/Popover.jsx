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
const Popover = ({ isOpen, onClose, closeButton = true, children }) => {
  // CSS styles for the popover (using Tailwind CSS classes)
  // prettier-ignore
  const popoverStyles = 'popover absolute flex top-10 -left-5 bg-white border-2 border-gray-300 m-4 p-5 z-10';
  const popoverInnerStyles = 'popover-inner relative flex';
  const popoverMainStyles = 'popover-main flex';
  const popoverContentStyles = 'popover-content';
  const popoverClosesStyles = 'popover-closes';

  return (
    isOpen && (
      <div className={popoverStyles}>
        <div className={popoverInnerStyles}>
          <div className={popoverMainStyles}>
            <div className={popoverContentStyles}>{children}</div>
            {/* Render the close button only if closeButton prop is true */}
            {closeButton && (
              <div className={popoverClosesStyles}>
                <Button onClick={onClose}>Close</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

Popover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Popover;
