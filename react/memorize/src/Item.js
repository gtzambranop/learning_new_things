import React, { useEffect } from 'react';

const Item = ({ user }) => {
  useEffect(() => {
    console.log('Item Render');
  });
  return <li>{user.name}</li>;
};

export default Item;
