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
          <ProductCard
            label="0% installment"
            image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
            name="Samsung Galaxy A24"
            compare="6.5"
            resolution="Full HD+"
            prices="          6.090.000₫"
          />
        </li>
        <li className="item p-6">
          <ProductCard
            label="0% installment"
            image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
            name="Samsung Galaxy A24"
            compare="6.5"
            resolution="Full HD+"
            prices="          6.090.000₫"
          />
        </li>
        <li className="item p-6">
          <ProductCard
            label="0% installment"
            image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
            name="Samsung Galaxy A24"
            compare="6.5"
            resolution="Full HD+"
            prices="          6.090.000₫"
          />
        </li>
        <li className="item p-6">
          <ProductCard
            label="0% installment"
            image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
            name="Samsung Galaxy A24"
            compare="6.5"
            resolution="Full HD+"
            prices="          6.090.000₫"
          />
        </li>
      </ul>
    </div>
  </>
);

export default App;
