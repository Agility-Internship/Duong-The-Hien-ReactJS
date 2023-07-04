import React from 'react';
import MyCard from './Components/Common/productCard';

const App = () => (
  <div className="flex gap-1">
    <MyCard
      headerText="News"
      imgSrc="src\assets\react.svg"
      title="How To Deliver a Successful Product Launch"
      author="Joshua Nash"
      date="29 Jun 2022"
    />
    <MyCard
      headerText="sales"
      imgSrc="src\assets\react.svg"
      title="How To Deliver a Successful Product Launch"
      author="Joshua Nash"
      date="29 Jun 2022"
    />
    <MyCard
      headerText="News"
      imgSrc="src\assets\react.svg"
      title="How To Deliver a Successful Product Launch"
      author="Joshua Nash"
      date="29 Jun 2022"
    />
  </div>
);

export default App;
