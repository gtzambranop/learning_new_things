import { useState, useEffect, useMemo } from 'react';
import List from './List';

const initialUsers = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Pepa' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Render App');
  });

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    // search: cuando cambie la búsqueda
    // users: Si se agregan nuevos datos, el filtro debe ser aplicado sobre estos
    [search, users]
  );

  return (
    <div className='App'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSearch}>Search</button>
      <List users={filteredUsers} />
    </div>
  );
}

export default App;
