import React, { memo, useEffect } from 'react';
import Item from './Item';

const List = ({ users }) => {
  useEffect(() => {
    //console.log('List render');
  });
  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default memo(List);
