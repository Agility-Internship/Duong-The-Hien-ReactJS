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
 * @param customSliderBarClassNames - Custom class name for the main SliderBar div.
 * @param isFixed - Flag to determine whether to use fixed positioning for the SliderBar.
 * @param customBackdropClassNames - Custom class names to be added to elements.
 * @returns {JSX.Element|null} The SliderBar component JSX.
 */
const SliderBar = ({
  isOpen = false,
  onCloseSliderBar = () => {},
  closeButton = true,
  closeButtonContent = 'Close',
  closeButtonStyle = '',
  children,
  isFixed = false,
  customBackdropClassNames,
  customSliderBarClassNames,
}) => {
  const defaultSliderBarClassName = 'absolute flex top-10 -left-5 bg-white m-4 z-200 shadow-2xl z-50';
  const customSliderBarClassName = customSliderBarClassNames
    ? `${customSliderBarClassNames}`
    : defaultSliderBarClassName;

  return isOpen ? (
    <>
      {isFixed && (
        <button
          className={`fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-center ${customBackdropClassNames}`}
          onClick={onCloseSliderBar}
          onKeyDown={onCloseSliderBar}
          aria-label="Close Slider Bar"
        />
      )}
      <aside className="z-30">
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
      </aside>
    </>
  ) : null;
};

SliderBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseSliderBar: PropTypes.func,
  closeButton: PropTypes.bool,
  closeButtonContent: PropTypes.string,
  closeButtonStyle: PropTypes.string,
  customSliderBarClassNames: PropTypes.string,
  isFixed: PropTypes.bool,
  customBackdropClassNames: PropTypes.string,
  children: PropTypes.node,
};

export default SliderBar;
