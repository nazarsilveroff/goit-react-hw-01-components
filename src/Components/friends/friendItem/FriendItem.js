import React from 'react';
import { FriendItemWrapper } from './FriendsItemStyle';
const FriendItem = ({ friend }) => {
  const  { id, isOnline, avatar, name }=friend ;
  return (
    <>
      <FriendItemWrapper key={id} isOnline={isOnline}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </FriendItemWrapper>
    </>
  );
};

export default FriendItem;