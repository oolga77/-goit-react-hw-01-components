import PropTypes from 'prop-types';
import { FriendsItem } from './FriendList.style';

export const Friends = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <FriendsItem key={id} isOnline={isOnline}>
      <span className="friend-status">{isOnline}</span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">{name}</p>
    </FriendsItem>
  );
};

Friends.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
