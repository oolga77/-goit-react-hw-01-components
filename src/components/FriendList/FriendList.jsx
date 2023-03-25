import PropTypes from 'prop-types';
import { Friends } from './Friends';
import { FriendsList } from './FriendList.style';

export const FriendList = ({ friendList }) => {
  return (
    <FriendsList>
      {friendList.map(friend => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
