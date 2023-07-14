import React from 'react';
import Button from './components/common/Button';

const App = () => {
  <>
    <div className=" flex gap-6">
      <Button variant="primary">
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </Button>
      <Button variant="primary">
        Manufacturer
        <img src="public\images\down.png" alt="down-cion" className="w-4" />
      </Button>
      <Button variant="primary">Prices</Button>
    </div>
    <div className="mt-5 flex flex-wrap gap-3 ">
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full "
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
      <Button variant="secondary" size="small">
        <img
          src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
          alt="Button icon"
          className="w-full"
        />
      </Button>
    </div>
  </>;
};

export default App;
