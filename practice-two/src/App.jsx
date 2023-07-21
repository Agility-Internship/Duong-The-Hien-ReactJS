import React from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';

const App = () => (
  <main className="flex m-auto p-3 max-w-[1300px] w-full min-w-[980px] gap-6">
    <section className="pt-3 flex gap-4 relative">
      <FilterCategoryLayout />
    </section>
  </main>
);

export default App;
