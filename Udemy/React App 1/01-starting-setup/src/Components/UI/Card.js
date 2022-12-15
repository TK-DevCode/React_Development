import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // This variable will add all css classes
  // that was added via the parent to the .card class in the Card.css file
  return <div className={classes}>{props.children}</div>;
}

export default Card;
