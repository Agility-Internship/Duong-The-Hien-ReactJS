import React from 'react';

// Components
import {
  GroupFilterPopover,
  ManuFacturePopover,
  PricePopover,
} from './components/FilterPopover';

const App = () => (
  <div className="flex gap-6">
    <div className="filter-category flex gap-4 relative">
      <GroupFilterPopover />
      <ManuFacturePopover />
      <PricePopover />
    </div>
  </div>
);

export default App;
