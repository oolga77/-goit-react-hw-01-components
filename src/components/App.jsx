import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
      }}
    >
      <Profile items={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friendList={friends} />
      <TransactionHistory transactions={transactions} />
    </Layout>
  );
};
