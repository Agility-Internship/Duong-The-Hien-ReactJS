/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

// Chip component
function Chip({ color, disabled, size, variant, icon, children }) {
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
