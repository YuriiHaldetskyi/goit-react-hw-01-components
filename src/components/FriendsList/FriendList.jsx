import PropTypes from 'prop-types';
import css from '../FriendsList/FriendsList.module.css';

export const FriendsList = ({ items }) => {
  return (
    <ul className={css.friend_list}>
      {items.map(friend => (
        <li key={friend.id} className={css.friend_item}>
          <span
            className={`${css.friend_status} ${
              friend.isOnline ? css.online : css.offline
            }  `}
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
