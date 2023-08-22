import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Message Components
 *
 * @param onClose - Function to be called when the Message should be closed.
 * @returns
 */
const Message = ({ onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return isVisible ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-40 p-4 rounded-md shadow-md text-white text-center">
        <h2 className="text-xl font-semibold mb-2">Product Added to Cart</h2>
        <p className="text-gray-300">The selected product has been added to your cart.</p>
        <button
          className="mt-4 bg-secondary text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  ) : null;
};

Message.propTypes = {
  onClose: PropTypes.func,
};

export default Message;
