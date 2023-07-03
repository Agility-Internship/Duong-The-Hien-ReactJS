import React from 'react';
import Button from './Components/Common/Buttons';

function App() {
  const handleClick = () => { };
  return (
    <div>
      <Button
        text="login"
        variant="outline"
        onClick={handleClick}
      />

      <Button
        text="Try For Free"
        variant="secondary"
        onClick={handleClick}
      />

      <Button
        text="Try For Free"
        variant="outline"
        rightIcon={<img src="src\assets\icon_arrow_down.svg" alt="Icon" />}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
