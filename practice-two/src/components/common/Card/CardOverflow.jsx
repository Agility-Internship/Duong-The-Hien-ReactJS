import React from 'react';
import PropTypes from 'prop-types';

// CardOverflow component
const CardOverflow = ({ children }) => <div className="card-overflow">{children}</div>;

CardOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardOverflow;
