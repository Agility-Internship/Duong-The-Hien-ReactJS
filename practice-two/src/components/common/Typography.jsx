import React from 'react';
import PropTypes from 'prop-types';

/**
 * Typography Component
 * @param color - The color of the text.
 * @param level - The level of the text's font values: 'xl', 'lg', 'md'.
 * @param variant - The variant of the text values: 'solid', 'soft', 'outlined', 'plain'.
 * @param children - The content to be displayed inside the Typography component.
 * @returns {JSX.Element} - The Typography component.
 */
function Typography({
  color = 'black',
  level = 'md',
  variant = 'soft',
  children,
}) {
  const levelClasses = {
    xl: 'text-xl font-bold ',
    lg: 'text-lg font-normal',
    md: 'text-md font-normal',
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
  level: PropTypes.oneOf(['xl', 'lg', 'md']),
  variant: PropTypes.oneOf(['solid', 'soft', 'outlined', 'plain']),
  children: PropTypes.node.isRequired,
};

export default Typography;
