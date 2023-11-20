import react, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AllMenuContext } from "./Menus";
import CardDishes from "./CardDishes";
import Popup from "./Popup";
import AddToCart from "./AddToCart";
function SpecialDishes() {
  const allmenus = useContext(AllMenuContext);
  // console.log("hi", allmenus);
  let [showPopUp, setShowPopUp] = useState(false);
  let [currentDish, setCurrentDish] = useState("");
  let [cartitem, cartimagefn] = useState([]);
  // console.log("my used conetxt are", allmenus);

  function showPopupHandler(dishName) {
    // console.log("gi",dishName)
    setCurrentDish(dishName);
    setShowPopUp(true);
  }
  // /close pop up
  function closePopupHandler() {
    setShowPopUp(false);
  }
  function addToCartHandler(cartimage, mealdata) {
    // console.log("thumb and meal", tumb);
    // console.log("meal", mealdata);
    // if(mealdata===)
    // if (mealdata === cartitem.titile) {
    // } else
    cartimagefn([
      ...cartitem,
      {
        img: cartimage,
        titile: mealdata
      }
    ]);
  }
  // console.log("my cart", cartitem);
  // console.log("cartarray", cartimage);
  // let maxspecialdishes = 8;
  // console.log("props are", props.specialmenus);
  let specialmenus = allmenus.map((MenuItem) => {
    return <CardDishes MenuItem={MenuItem} showPopUps={showPopupHandler} />;
  });
  return (
    <section className="special-dishes">
      {showPopUp && (
        <Popup
          closepopup={closePopupHandler}
          currentDish={currentDish}
          allDishes={allmenus}
          addToCartHandler={addToCartHandler}
        />
      )}
      <div className="containers">
        <AddToCart cartitem={cartitem} />
        <div className="special-dishes-content text-center">
          <h2> Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
            gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui
            sem, fermentum vitae, sagittis id, malesuada
          </p>
        </div>
        <div className="special-dishes">
          <br></br>
          <br></br>
          <h4 className="center">--Special Menus--</h4>
          <ul className="g">{specialmenus}</ul>
          {/* <img src> */}
        </div>
      </div>
    </section>
  );
}
export default SpecialDishes;
