import React from 'react';
import Button from './Components/Common/Buttons';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button text="login" variant="primary" onClick={handleClick} />
      <Button text="Try For Free" variant="secondary" onClick={handleClick} />
      <Button text="Try For Free" variant="outline" rightIcon={<i className="fas fa-check" />} onClick={handleClick} />
    </div>
  );
}

export default App;
