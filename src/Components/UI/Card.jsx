const Card = (props) => {
  return (
    <div className={`shadow-xl py-4 px-5 rounded-lg cursor-default ${props.styleCard}`}>
      {props.children}
    </div>
  );
};

export default Card;
