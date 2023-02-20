import PropTypes from 'prop-types';
import css from '../Profile/profile.module.css';

export const Profile = ({
  items: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.img__wrapper}>
        <img className={css.img} src={avatar} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats__list}>
        <li className={css.stats__item}>
          <span className={css.stats__followers}>Followers</span>
          <span className={css.stats__quatity}>{stats.followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.stats__followers}>Views</span>
          <span className={css.stats__quatity}>{stats.views}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.stats__followers}>Likes</span>
          <span className={css.stats__quatity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
  }),
};
