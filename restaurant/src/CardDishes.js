function CardDishes(props) {
  // console.log("hi ", props.showPopUps);
  return (
    <div>
      <li>
        <a
          href="javascipt:;"
          onClick={() => props.showPopUps(props.MenuItem.strMeal)}
        >
          <img className="newv" src={props.MenuItem.strMealThumb} />
          <h5 className="sizee"> {props.MenuItem.strMeal}</h5>
        </a>
      </li>
    </div>
  );
}
export default CardDishes;
