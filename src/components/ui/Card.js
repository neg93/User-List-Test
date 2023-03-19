import classes from './Card.module.css';

function Card(usersData) {
  return <div className={classes.card}>{usersData.children}</div>;
}

export default Card;