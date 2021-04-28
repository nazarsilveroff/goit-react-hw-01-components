import React from "react";
import { StatsList, UserWrapper } from "./userStyle";
const User = ({ user }) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <UserWrapper>
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StatsList>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </StatsList>
    </UserWrapper>
  );
};

export default User;
