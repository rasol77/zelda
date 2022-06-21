import { GameCard } from '../GameCard';
import { List } from '../List';
import './style.css';

export const Timeline = ({ data }) => {
  return (
    <section className="timeline">
      <List
        data={data.sort((a, b) => a.date - b.date)}
        render={(game, index) => {
          return (
            <li key={index}>
              <GameCard game={game} />
            </li>
          );
        }}
      />
    </section>
  );
};
