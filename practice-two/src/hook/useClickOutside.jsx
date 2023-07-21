import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    // Handle clicks outside the popover to close it
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add an event listener to detect clicks outside the popover when it's open.
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts.
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, ref]);
};

export default useClickOutside;
