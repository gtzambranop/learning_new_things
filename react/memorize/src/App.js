import { useState, useEffect } from 'react';
import List from './List';

const initialUsers = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Pepa' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('New');

  const handleAdd = () => {
    const newUser = { id: Date.now, name: text };
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    console.log('Render App');
  });

  return (
    <div className='App'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <List users={users} />
    </div>
  );
}

export default App;
