import React from 'react';
import Button from './Components/Common/Buttons';
import Link from './Components/Common/Links';
import Card from './Components/Common/Card';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button text="login" variant="primary" onClick={handleClick} />
      <Button text="Try For Free" variant="secondary" onClick={handleClick} />
      <Button text="Try For Free" variant="outline" rightIcon={<i className="fas fa-check" />} onClick={handleClick} />
      <Link href="_blank" isExternal imageVariant="rounded">
        Link
      </Link>
      <Card maxW="xl" name="Card with Image" size="xl" variant="bold" onChange={() => console.log('Button clicked')} hasImage />
      <Card maxW="lg" name="Card without Image" size="lg" variant="semibold" onChange={() => console.log('Button clicked')} hasImage={false} />
    </div>
  );
}

export default App;
