const Card = ({item}) => {
  return (
    <div>
      <div>
        <h2> {item.title} </h2>
        <p>{item.body}</p>
      </div>

      <div>
        <img src={`./images/${item.image}`} alt="" />
      </div>
    </div>
  );
}
 
export default Card;