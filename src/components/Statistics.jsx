export const Statistics = ({ items, title }) => {
  console.log();
  return (
    <section>
      {title ? <h2>{title}</h2> : ''}
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
