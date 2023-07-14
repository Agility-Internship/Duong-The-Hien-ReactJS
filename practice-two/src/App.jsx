import React from 'react';
import Button from './components/common/Button';

const App = () => {
  const handlePrimaryButtonClick = () => {
    console.log('hello world');
  };

  return (
    <>
      <div className=" flex gap-6">
        <Button variant="primary" leftIcon onClick={handlePrimaryButtonClick}>
          Filter
        </Button>
        <Button variant="primary" rightIcon onClick={handlePrimaryButtonClick}>
          Manufacturer
        </Button>
        <Button variant="primary" rightIcon onClick={handlePrimaryButtonClick}>
          Prices
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap gap-3 ">
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
        <Button variant="secondary" image="public/images/realme.png" />
      </div>
    </>
  );
};

export default App;
