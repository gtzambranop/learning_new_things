import React, { useEffect, memo } from 'react';

const Item = ({ user }) => {
  useEffect(() => {
    //console.log('Item Render ' + user.name);
  });
  return <li key={user.id}>{user.name}</li>;
};

export default memo(Item);
