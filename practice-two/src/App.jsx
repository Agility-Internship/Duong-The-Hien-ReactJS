import React from 'react';

// Component
import ProductCard from './components/ProductCard';

const App = () => (
  <div className="mt-5 gap-3 ">
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
