import data from './Statistics/data.json';
import users from './Profile/user.json';
import friends from './FriendsList/friends.json';
import transaction from './Transaction/transactions.json';

import { FriendsList } from './FriendsList/FriendList';
import { Profile } from './Profile/ProfileList';
import { Statistics } from './Statistics/Statistics';
import { Transaction } from './Transaction/Transaction';

export const App = () => {
  return (
    <div
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '100px',
        backgroundColor: 'lightgrey',
      }}
    >
      <Profile items={users} />
      <Statistics title="Upload stats" items={data} />
      <FriendsList items={friends} />
      <Transaction transactions={transaction} />
    </div>
  );
};
