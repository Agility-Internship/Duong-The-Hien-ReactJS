import React from 'react';
import PropTypes from 'prop-types';

/**
 * Typography Component
 * @param color - The color of the text.
 * @param size - The size of the text's font values: 'xl', 'lg', 'md'.
 * @param variant - The variant of the text values: 'solid', 'soft', 'outlined', 'plain'.
 * @param level - The level of the heading (1 to 6), or 0 for a paragraph.
 * @param className - Additional custom CSS classes to be applied to the Typography component.
 * @param children - The content to be displayed inside the Typography component.
 * @returns {JSX.Element} - The Typography component.
 */
function Typography({
  color = 'black',
  size = 'md',
  variant = 'soft',
  level = 0,
  className = '',
  children,
}) {
  const sizeClasses = {
    xxl: 'text-[19px] font-bold',
    xl: 'text-xl font-bold',
    lg: 'text-lg font-normal',
    md: 'text-md font-normal',
  };

  const variantClasses = {
    solid: 'rounded-md text-xs leading-tight inline-block bg-light p-1',
    soft: 'rounded-md text-xs leading-tight inline-block bg-white p-1',
    outlined: 'border border-solid',
    plain: '',
  };

  const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const typographyClasses = `${sizeClasses[size]} ${variantClasses[variant]} ${className} ${color}`;

  const Tag = level > 0 && level <= 6 ? headingLevels[level - 1] : 'p';

  return <Tag className={typographyClasses}>{children}</Tag>;
}

Typography.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md']),
  variant: PropTypes.oneOf(['solid', 'soft', 'outlined', 'plain']),
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
