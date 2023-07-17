import React from 'react';
import PropTypes from 'prop-types';

/**
 * Chip Component
 * @param color - The background color of the chip.
 * @param disabled - Determines if the chip is disabled or not.
 * @param size - The size of the chip. Possible values: 'small', 'medium'.
 * @param variant - The style possible values: 'solid', 'plain', 'outlined', 'soft'.
 * @param icon - The icon to be displayed on the chip.
 * @param children - The content to be displayed inside the chip.
 * @returns {JSX.Element} - The Chip component.
 */
function Chip({
  color = 'black',
  disabled = 'false',
  size = 'small',
  variant = 'outlined',
  icon,
  children,
}) {
  const chipStyles = {
    backgroundColor: disabled ? 'gray' : color,
    fontSize: size === 'small' ? '0.8rem' : '1rem',
  };

  const chipClasses = `chip ${variant}`;

  return (
    <div className={chipClasses} style={chipStyles}>
      {icon && <span className="chip-icon">{icon}</span>}
      <span className="chip-label">{children}</span>
    </div>
  );
}

Chip.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['solid', 'plain', 'outlined', 'soft']),
  icon: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default Chip;
