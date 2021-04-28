import React from "react";
import FriendItem from "./friendItem/FriendItem";
import { FriendWrapper } from "./FriendsStyle";
const FriendList = ({ friends }) => {
  return (
    <>
      <FriendWrapper>
        {friends.map(friend => (
          <FriendItem friend={friend} key={friend.id} />
        ))}
      </FriendWrapper>
    </>
  );
};

export default FriendList;
