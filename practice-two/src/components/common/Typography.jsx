import React from 'react';
import PropTypes from 'prop-types';

// Typography component
function Typography({
  color, level, variant, children,
}) {
  const levelClasses = {
    body3: 'text-xl font-normal',
    body2: 'text-lg font-normal',
  };

  const typographyClasses = `${levelClasses[level]} ${variant || ''}`;

  return <p className={typographyClasses} style={{ color }}>{children}</p>;
}

Typography.propTypes = {
  color: PropTypes.string,
  level: PropTypes.oneOf(['body3', 'body2']),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
