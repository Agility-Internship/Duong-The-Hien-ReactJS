import React from 'react';
import PropTypes from 'prop-types';

// Typography component
function Typography({ color, level, variant, children }) {
  const levelClasses = {
    body3: 'text-xl font-bold ',
    body2: 'text-lg font-normal',
    body1: 'text-md font-normal',
  };

  const variantClasses = {
    solid: 'rounded-md text-xs leading-tight inline-block bg-light p-1',
    soft: 'bg-soft',
    outlined: 'border border-solid',
    plain: '',
  };

  const typographyClasses = [levelClasses[level], variantClasses[variant]];

  return (
    <p className={typographyClasses} style={{ color }}>
      {children}
    </p>
  );
}

Typography.propTypes = {
  color: PropTypes.string,
  level: PropTypes.oneOf(['body3', 'body2']),
  variant: PropTypes.oneOf(['solid', 'soft', 'outlined', 'plain']),
  children: PropTypes.node.isRequired,
};

export default Typography;
