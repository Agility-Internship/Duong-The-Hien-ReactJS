import React from 'react';
import PropTypes from 'prop-types';

// Component
import Button from './Button';

/**
 * SliderBar Component
 *
 * @param isOpen - Flag to determine if the SliderBar is open.
 * @param onCloseSliderBar - Function to be called when the SliderBar should be closed.
 * @param closeButton - Flag to determine whether to show the close button.
 * @param closeButtonContent - Text content for the close button.
 * @param closeButtonStyle - CSS class for styling the close button.
 * @param customSliderBarClassNames - Custom class name for the main SliderBar div.
 * @param isFixed - Flag to determine whether to use fixed positioning for the SliderBar.
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
  customSliderBarClassNames,
}) =>
  isOpen ? (
    <>
      {isFixed && (
        <button
          className="fixed inset-0 backdrop-filter flex items-center justify-center bg-opacity-10 opacity-100 backdrop-blur-none "
          onClick={onCloseSliderBar}
          onKeyDown={onCloseSliderBar}
          aria-label="Close Slider Bar"
        />
      )}
      <aside className="z-30">
        <div className={customSliderBarClassNames}>
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

SliderBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseSliderBar: PropTypes.func,
  closeButton: PropTypes.bool,
  closeButtonContent: PropTypes.string,
  closeButtonStyle: PropTypes.string,
  customSliderBarClassNames: PropTypes.string,
  isFixed: PropTypes.bool,
  children: PropTypes.node,
};

export default SliderBar;
