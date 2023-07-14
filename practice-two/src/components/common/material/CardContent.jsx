import React from 'react';
import PropTypes from 'prop-types';

// CardContent component
const CardContent = ({ children }) => (
  <div className="card-content bg-transparent border-none h-4/5 pt-5 relative">
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContent;
