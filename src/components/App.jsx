import { Profile } from './ProfileList';
import { Statistics } from './Statistics';

import data from './data.json';
import users from './user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile items={users} />
      <Statistics title="Upload stats" items={data} />
    </div>
  );
};
