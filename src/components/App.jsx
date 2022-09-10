import user from './json/user';
import { Profile } from "./Profile/Profile";
import data from './json/data';
import { Statistics } from "./Statistics/Statistics";
import friends from './json/friends';
import { FriendList } from "./FriendList/FriendList";
import transactions from './json/transactions';
import { Transactions } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
