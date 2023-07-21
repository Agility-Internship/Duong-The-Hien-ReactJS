import React from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';

const App = () => (
  <div className="flex gap-6">
    <div className="filter-category flex gap-4 relative">
      <FilterCategoryLayout />
    </div>
  </div>
);

export default App;
