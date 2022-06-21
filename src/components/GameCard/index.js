import './style.css';
export const GameCard = ({ game }) => {
  return (
    <article className="gameCard">
      <img src={game.image} alt={game.title} />
      <h2>
        {game.title} ({game.date})
      </h2>
      <p>{game.text} </p>
    </article>
  );
};
