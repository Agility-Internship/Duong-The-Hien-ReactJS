import React from 'react';

// Components
import Button from './components/common/Button';
import Popover from './components/common/Popover';

const App = () => (
  <div className="flex gap-6">
    <Button variant="primary"> filter</Button>
    <Popover isOpen>
      <div className="flex flex-wrap w-[900px] max-w-[900px] mt-5 gap-9 max-h-[80vh] p-0 ">
        <Button variant="primary" size="small">
          <img
            src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
            alt="Button icon"
            className="w-full "
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
    </Popover>
  </div>
);

export default App;
