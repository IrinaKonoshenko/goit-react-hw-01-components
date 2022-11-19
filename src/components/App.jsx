import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import '../index.css';

export const App = () => {
  return (
    <div>
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#e7ecf2',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div
        style={{
          alignItems: 'center',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
