import { useState, useContext } from "react";
import Pagnations from "./Paginations";
import { AllMenuContext } from "./Menus";
function FilteredDishes(props) {
  // console.log("dey", props.allmenuscategory);
  // console.log("single", props.singleDish);
  // console.log("ged", props.allmenuscategory);
  const allmenu = useContext(AllMenuContext);
  // let [allmenu, setAllMenu] = useState(props.allmenu);
  let [filteredDishesn, setFilteredDishes] = useState([]);
  let [activedish, setactivedish] = useState("");
  // let [currentpage, setcurrentpage] = useState(1);
  // let [itemperpage, setitemperpage] = useState(3);
  // console.log("all", props.allmenu);
  //single dish
  // let singledishes = props.singleDish.map((item) => {
  //   return (
  //     <li>
  //       <img className="fav" src={item.strMealThumb} alt="" />
  //       <h5>{item.strMeal}</h5>
  //     </li>
  //   );
  // });
  // console.log("rt", props.singleDishfn);
  function showfilterDisheesHandler(category) {
    setactivedish(category);
    let filteredDishesAre = allmenu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <div className="jsv">
            <li>
              {" "}
              <img className="fav" src={item.strMealThumb} alt="" />{" "}
              <h5>{item.strMeal}</h5>{" "}
            </li>
          </div>
        );
      });
    // console.log("second", filtrdDifhesare);
    //  console.log("you",filteredDished)
    setFilteredDishes(filteredDishesAre);

    // alert("hi");
  }
  // console.log("category is ", filteredDishesn);
  let allCategorys = props.allmenuscategory.map((item) => {
    return (
      <li
        className={item.strCategory == activedish ? "active" : ""}
        onClick={() => {
          showfilterDisheesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  return (
    <div className="filtered-dishes">
      <div className="container">
        <h2 className="text-center ">Choose Your Dishes</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          ac turpis vitae interdum. Praesent dui urna, pharetra sit amet.
        </p>
      </div>
      <div className="filterd-dishes">
        <ul>{allCategorys}</ul>
      </div>
      <div className="filterd-dishes-result">
        <ul className="flex flex-wrap gap-30 newkl">
          {/* {singledishes} */}
          {filteredDishesn.length != 0 ? (
            filteredDishesn
          ) : (
            <div className="alert">
              <h3> Sorry,No Items found</h3>
              <h4>Please choose another menu</h4>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
export default FilteredDishes;
