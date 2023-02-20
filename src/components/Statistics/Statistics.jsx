import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ items, title }) => {
  return (
    <section className={css.statistic}>
      {title ? <h2 className={css.statistic__title}>{title}</h2> : ''}
      <ul className={css.statistic__list}>
        {items.map(item => {
          return (
            <li className={css.statistic__item} key={item.id}>
              <p className={css.statistic__label}>{item.label}</p>
              <p className={css.statistic__percentage}>{item.percentage} %</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
