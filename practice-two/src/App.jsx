import React from 'react';

// Components
import GroupFilterPopover from './components/GroupFilterPopover';
import ManuFacturePopover from './components/ManuFactureFilterPopover';

const App = () => (
  <div className="flex gap-6">
    <div className="filter-category flex gap-4 relative">
      <GroupFilterPopover />
      <ManuFacturePopover />
    </div>
  </div>
);

export default App;
