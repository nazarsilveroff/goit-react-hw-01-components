import React from "react";
import data from "../db";
import FriendList from "./friends/FriendList";
import Statistics from "./statistics/Statistics";
import Transaction from "./transaction-history/Transaction";
import User from "./user/User";
const App = () => {
  return (
    <>
      <User user={data.user} />
      <Statistics statistics={data.statistics} />
      <FriendList friends={data.friends} />
      <Transaction items={data.transactions} />
    </>
  );
};

export default App;
