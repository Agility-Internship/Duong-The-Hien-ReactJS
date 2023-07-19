import React, { useState } from 'react';
import Popover from './common/Popover';
import Button from './common/Button';

const GroupFilterPopover = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setPopoverOpen((prevState) => !prevState);
  };

  const handleClosePopover = () => {
    setPopoverOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (isPopoverOpen && !event.target.closest('.popover-content')) {
      handleClosePopover();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  return (
    <div className="relative">
      <Button onClick={handleButtonClick}>Toggle Popover</Button>
      {isPopoverOpen && (
        <Popover isOpen onClose={handleClosePopover}>
          <div className="popover-content">
            <p>Popover content goes here</p>
          </div>
        </Popover>
      )}
    </div>
  );
};

export default GroupFilterPopover;
