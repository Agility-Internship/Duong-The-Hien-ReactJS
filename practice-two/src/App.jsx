import React from 'react';
import Button from './components/common/Button';

const App = () => {
  const handlePrimaryButtonClick = () => {
    console.log('hello world');
  };

  return (
    <>
      <div className=" flex gap-6">
        <Button text="Filter" variant="primary" leftIcon onClick={handlePrimaryButtonClick} />
        <Button text="Manufacturer" variant="primary" rightIcon onClick={handlePrimaryButtonClick} />
        <Button text="Prices" variant="primary" rightIcon onClick={handlePrimaryButtonClick} />
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
