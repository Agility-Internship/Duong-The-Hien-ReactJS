import React from 'react';
import Button from './components/common/Button';

const App = () => {
  const handlePrimaryButtonClick = () => {
    console.log('hello world');
  };

  return (
    <>
      <div className=" flex gap-6">
        <Button variant="primary" onClick={handlePrimaryButtonClick}>
          Filter
          <img src="public\images\Filter-icon.png" alt="filter-icon" className="w-4" />
        </Button>
        <Button variant="primary" onClick={handlePrimaryButtonClick}>
          Manufacturer
          <img src="public\images\down.png" alt="down-cion" className="w-4" />
        </Button>
        <Button variant="primary" onClick={handlePrimaryButtonClick}>
          Prices
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap gap-3 ">
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full " />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
        <Button variant="secondary" size="small" onClick={handlePrimaryButtonClick}>
          <img src="http://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="Button icon" className="w-full" />
        </Button>
      </div>
    </>
  );
};

export default App;
