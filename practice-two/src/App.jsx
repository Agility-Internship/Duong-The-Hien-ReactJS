import React from 'react';

// Components
import GroupFilterPopover from './components/GroupFilterPopover';

const App = () => (
  <div className="flex gap-6">
    <div className="filter-category flex gap-4 relative">
      <GroupFilterPopover>
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </GroupFilterPopover>
      <GroupFilterPopover>
        Filter
        <img
          src="public\images\Filter-icon.png"
          alt="filter-icon"
          className="w-4"
        />
      </GroupFilterPopover>
    </div>
  </div>
);

export default App;
