import './style.css';
export const List = ({ data, render }) => {
  return <ul>{data.map(render)}</ul>;
};
