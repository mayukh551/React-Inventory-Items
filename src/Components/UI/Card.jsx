const Card = (props) => {
  return (
    <div className={`bg-white shadow-xl py-4 px-5 rounded-lg cursor-default ${props.styleCard}`}
    style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
