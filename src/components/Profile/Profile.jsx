import PropTypes from 'prop-types';
import {
  ProfileCard,
  UserInfo,
  StatisticsList,
  StatisticsItem,
} from './Profile.styled';

export const Profile = ({
  items: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <UserInfo>
        <img
          className="user-img"
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <p className="user-name">{username}</p>
        <p className="user-tag">@{tag}</p>
        <p className="user-location">{location}</p>
      </UserInfo>

      <StatisticsList>
        <StatisticsItem>
          <span className="stat-label">Followers</span>
          <span className="stat-quantity">{stats.followers}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span className="stat-label">Views</span>
          <span className="stat-quantity">{stats.views}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span className="stat-label">Likes</span>
          <span className="stat-quantity">{stats.likes}</span>
        </StatisticsItem>
      </StatisticsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
