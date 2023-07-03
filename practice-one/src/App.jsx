import React from 'react';
// import Button from './Components/Common/Buttons';
import Link from './Components/Common/Links';

function App() {
  return (
    <div>
      <Link
        href="https://example.com"
        isExternal
      >
        External-link
      </Link>
      <Link
        href="/#"
      >
        Internal-link
      </Link>

      <Link
        href="/profile"
        imageVariant="rounded"
      >
        <img src="/avatar.png" alt="Avatar" />
      </Link>
    </div>
  );
}

export default App;
