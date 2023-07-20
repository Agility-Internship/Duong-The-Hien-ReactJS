import React from 'react';

// Components
import GroupFilterPopover from './components/GroupFilterPopover';

const App = () => (
  <div className="flex gap-6">
    <div className="filter-category flex gap-4 relative">
      <GroupFilterPopover />
      <GroupFilterPopover />
    </div>
  </div>
);

export default App;
