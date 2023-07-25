import React from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';

const App = () => (
  <main className="m-auto p-3 max-w-[1300px] w-full min-w-[980px] gap-6">
    <section className="pt-3 flex gap-4 relative">
      <FilterCategoryLayout />
    </section>
    <section>
      <ProductList />
    </section>
  </main>
);

export default App;
