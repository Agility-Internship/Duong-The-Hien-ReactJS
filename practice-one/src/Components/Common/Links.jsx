import React from 'react';

function Link({
  isExternal, imageVariant, children, ...rest
}) {
  const linkClasses = `text-primary hover:underline ${imageVariantClasses[imageVariant]}`;

  if (isExternal) {
    return (
      <a className={linkClasses} {...rest} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <a className={linkClasses} {...rest}>
      {children}
    </a>
  );
}

// Mapping the props to corresponding Tailwind CSS classes
const imageVariantClasses = {
  rounded: 'rounded',
  circle: 'rounded-full',
  none: '',
};

export default Link;
