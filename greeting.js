// Greeting.js
import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('User');
  return (
    <div>
      <h2>Hello {name}!</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={() => alert('Hi ' + name)}>Greet</button>
    </div>
  );
}

export default Greeting;
