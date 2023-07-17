import React from 'react';

// Component
import ProductCard from './components/ProductCard';
import Popover from './components/common/Popover';
import Button from './components/common/Button';

const App = () => (
  <div className="mt-5 gap-3 ">
    <div className="flex gap-5">
      <Popover
        variant="primary"
        dropdownContent={
          <div>
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
        }
      >
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </Popover>
    </div>
    <ul className="flex">
      <li className="item p-6">
        <ProductCard
          label="0% installment"
          image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
          name="Samsung Galaxy A24"
          compare="6.5"
          resolution="Full HD+"
          prices="6.090.000₫"
        />
      </li>
      <li className="item p-6">
        <ProductCard
          label="0% installment"
          image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
          name="Samsung Galaxy A24"
          compare="6.5"
          resolution="Full HD+"
          prices="6.090.000₫"
        />
      </li>
      <li className="item p-6">
        <ProductCard
          label="0% installment"
          image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
          name="Samsung Galaxy A24"
          compare="6.5"
          resolution="Full HD+"
          prices="6.090.000₫"
        />
      </li>
      <li className="item p-6">
        <ProductCard
          label="0% installment"
          image="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
          name="Samsung Galaxy A24"
          compare="6.5"
          resolution="Full HD+"
          prices="6.090.000₫"
        />
      </li>
    </ul>
  </div>
);

export default App;
