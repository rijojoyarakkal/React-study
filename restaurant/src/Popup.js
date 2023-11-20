import React, { useContext } from "react";
import { AllMenuContext } from "./Menus";
// import Test from "./Test";
function Popup({
  closepopup,
  currentDish,
  allDishes,
  addToCartHandler,
  cartimage
}) {
  const allmenus = useContext(AllMenuContext);
  // console.log("cartimgae", cartimage);
  let dishDetails = allmenus
    .filter((menuItem) => {
      return menuItem.strMeal == currentDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <h2 className="infont">{item.strInstructions}</h2>
          <ul className="dish-ingredients">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          <button
            onClick={() => addToCartHandler(item.strMealThumb, item.strMeal)}
          >
            Order Now
          </button>
          {/* <Test /> */}
          <h5 className="popup-close" onClick={closepopup}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">{dishDetails}</div>
    </div>
  );
}
export default Popup;
