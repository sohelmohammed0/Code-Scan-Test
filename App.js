import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(['React', 'JavaScript', 'CSS']);
  const [newItem, setNewItem] = useState('');
  const [greeting, setGreeting] = useState(''); // new feature

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleGreeting = () => {
    if (greeting.trim() !== '') {
      alert(`Hello, ${greeting}!`);
      setGreeting('');
    }
  };

  return (
    <div className="App">
      <h1>My Sample React App</h1>

      {/* New Greeting Feature */}
      <input
        type="text"
        placeholder="Sohel Mohammed"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
      <button onClick={handleGreeting}>Greet Me</button>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;