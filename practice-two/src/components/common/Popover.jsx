import React from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './Button/Button';

/**
 * Popover comments
 * @param isOpen - Flag to determine if the popover is open.
 * @param onClosePopover - Function to be called when the popover should be closed.
 * @param closeButton - Flag to determine whether to show the close button.
 * @param popoverClassName - Custom class name for the main popover div.
 * @param arrowPopover - Flag to determine whether to show the arrow in the popover.
 * @returns {JSX.Element|null} The Popover component JSX.
 */
const Popover = ({
  isOpen = false,
  onClosePopover = () => {},
  closeButton = true,
  children,
  popoverClassName = false,
  arrowPopover = true,
}) => {
  const defaultPopoverClassName = 'absolute flex top-10 -left-5 bg-white m-4 z-200 shadow-2xl z-50';
  const customPopoverClassName = popoverClassName ? `${popoverClassName}` : defaultPopoverClassName;

  return isOpen ? (
    <div className="z-30">
      <div className={customPopoverClassName}>
        <div className="flex">
          {children}
          {/* Render the close button only if closeButton prop is true */}
          {closeButton && (
            <div className="absolute top-1 right-2">
              <Button onClick={onClosePopover}>Close</Button>
            </div>
          )}
        </div>
        {/* Change the z-index value to -z-10 */}
      </div>
      {arrowPopover && (
        <div className="h-8 w-8 rounded border rotate-45 bg-transparent border-gray-300 shadow-2xl absolute left-6 top-[50px] -z-10" />
      )}
    </div>
  ) : null;
};

Popover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClosePopover: PropTypes.func,
  closeButton: PropTypes.bool,
  popoverClassName: PropTypes.string, // New prop for customizing the popover's main div
  arrowPopover: PropTypes.bool, // New prop to determine whether to show the arrow
  children: PropTypes.node,
};

export default Popover;
