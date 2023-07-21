import React from 'react';

// Components
import GroupFilterPopover from './components/GroupFilterPopover';
import ManuFacturePopover from './components/ManuFactureFilterPopover';
import PricePopover from './components/PircesFilterPopover';

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
