import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from './common/Button';
import Popover from './common/Popover';
import Typography from './common/Typography';

const GroupFilterPopover = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = () => {
    toggleDropdown();
  };

  return (
    <div className="relative box-">
      <Button onClick={handleButtonClick}>{children}</Button>
      {isDropdownOpen && (
        <Popover isOpen={isDropdownOpen} onClose={toggleDropdown}>
          {/* Group filter popover */}
          <div className="flex flex-wrap w-[900px] max-w-[900px] mt-5 gap-0 max-h-[80vh] p-0">
            {/* Manufacture list */}
            <div className="w-full block px-5 pt-0">
              <div className="mb-1">
                <Typography size="xl">Manufacture</Typography>
              </div>
              {/* Filter Manufactures Button */}
              <div className="gap-2 pt-2 min-h-0 grid grid-cols-5 max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto ">
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
                <Button variant="primary" size="small">
                  <img
                    src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                    alt="Button icon"
                    className="w-full"
                  />
                </Button>
              </div>
            </div>
            {/* Hr line */}
            <div className="m-5 border-t-[1px] border-gray w-full" />
            {/*  Price list */}
            <div className="w-full block px-5 pt-0">
              <div className="mb-1">
                <Typography size="xl">Prices</Typography>
              </div>
              {/* Filter Prices Button */}
              <div className="flex gap-5 flex-row flex-wrap pb-5 w-[30%] max-h-[23vh] max-w-[500wh] overflow-hidden overflow-y-auto overflow-x-auto">
                <Button>2-4 million</Button>
                <Button>4-8 million</Button>
                <Button>8-15 million</Button>
                <Button>Over 15 million</Button>
              </div>
            </div>
          </div>
        </Popover>
      )}
    </div>
  );
};

GroupFilterPopover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GroupFilterPopover;
