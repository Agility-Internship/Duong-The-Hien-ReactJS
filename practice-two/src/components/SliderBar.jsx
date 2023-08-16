import React from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './common/Button/Button';

/**
 * SliderBar comments
 * @param isOpen - Flag to determine if the SliderBar is open.
 * @param onCloseSliderBar - Function to be called when the SliderBar should be closed.
 * @param closeButton - Flag to determine whether to show the close button.
 * @param closeButtonContent - Text content for the close button.
 * @param closeButtonStyle - CSS class for styling the close button.
 * @param sliderBarClassName - Custom class name for the main SliderBar div.
 * @param isFixed - Flag to determine whether to use fixed positioning for the SliderBar.
 * @param customClassNames - Custom class names to be added to elements.
 * @returns {JSX.Element|null} The SliderBar component JSX.
 */
const SliderBar = ({
  isOpen = false,
  onCloseSliderBar = () => {},
  closeButton = true,
  closeButtonContent = 'Close',
  closeButtonStyle = '',
  children,
  sliderBarClassName,
  isFixed = false,
  customClassNames, // Changed from fixedOverlayClassName
}) => {
  const defaultSliderBarClassName = 'absolute flex top-10 -left-5 bg-white m-4 z-200 shadow-2xl z-50';
  const customSliderBarClassName = sliderBarClassName
    ? `${sliderBarClassName}`
    : defaultSliderBarClassName;

  return isOpen ? (
    <>
      {isFixed && (
        <button
          className={`fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-center bg-gray-800 ${customClassNames}`}
          onClick={onCloseSliderBar}
          onKeyDown={onCloseSliderBar}
        >
          {/* Content goes here */}
        </button>
      )}
      <div className="z-30">
        <div className={customSliderBarClassName}>
          <div className="flex">
            {children}
            {closeButton && (
              <div className="absolute top-1 right-2">
                <Button customVariant={closeButtonStyle} onClick={onCloseSliderBar}>
                  {closeButtonContent}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

SliderBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseSliderBar: PropTypes.func,
  closeButton: PropTypes.bool,
  closeButtonContent: PropTypes.string,
  closeButtonStyle: PropTypes.string,
  sliderBarClassName: PropTypes.string,
  isFixed: PropTypes.bool,
  customClassNames: PropTypes.string, // Changed from fixedOverlayClassName
  children: PropTypes.node,
};

export default SliderBar;
