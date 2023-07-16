import React from 'react';
import Button from './components/common/Button';
import ProductCard from './components/common/ProductCard';
import ButtonDropdown from './components/common/ButtonDropdown';

const App = () => (
  <>
    <div className=" flex gap-6">
      <ButtonDropdown variant="primary">
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </ButtonDropdown>
      <ButtonDropdown variant="primary">
        Manufacturer
        <img src="public\images\down.png" alt="down-cion" className="w-4" />
      </ButtonDropdown>
      <ButtonDropdown variant="primary">Prices</ButtonDropdown>
    </div>
    <div className="mt-5 gap-3 ">
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
      <ul className="flex">
        <li className="item p-6">
          <ProductCard />
        </li>
        <li className="item p-6">
          <ProductCard />
        </li>
        <li className="item p-6">
          <ProductCard />
        </li>
        <li className="item p-6">
          <ProductCard />
        </li>
      </ul>
    </div>
  </>
);

export default App;
