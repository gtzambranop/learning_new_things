// memo: sirve para memorizar un componente en base a sus properties
// si las properties son iguales, el componente no se renderiza
import React, { memo, useEffect } from 'react';
import Item from './Item';

const List = ({ users }) => {
  useEffect(() => {
    console.log('List render');
  });
  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default List;
