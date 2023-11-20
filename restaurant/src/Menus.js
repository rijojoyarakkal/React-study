// import {BrowserRouter as Router ,Router,Route,Switch} from 'react-router-dom';
import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./Hero";
import "./style.scss";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";
import Nav from "./Nav";
import CheckOut from "./CheckOut";
export const AllMenuContext = react.createContext();
function Menu() {
  let [setmenu, setmenufun] = useState([]);
  let [FilteredDishesc, FilteredDishesfn] = useState([]);
  let [loading, setLoading] = useState(false);
  let [singleDish, singleDishfn] = useState([]);
  async function getAllMenus() {
    setLoading(true);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let data = await fetch(url);
    let response = await data.json();
    setmenufun(response.meals);
    setLoading(false);
  }
  async function FilteredDishesn() {
    const aurl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let newdata = await fetch(aurl);
    let newres = await newdata.json();
    // console.log("oops",newres.categories)
    FilteredDishesfn(newres.categories);
  }
  async function getOnlyOneDish() {
    const aurl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork";
    let Category = await fetch(aurl);
    let singleDishedata = await Category.json();
    singleDishfn(singleDishedata.meals);
  }
  // console.log("news", singleDish);
  // console.log("final yes", FilteredDishesc);
  // console.log("final", FilteredDishesc);
  useEffect(() => {
    getAllMenus();
    FilteredDishesn();
    getOnlyOneDish();
  }, []);
  let menuimages = setmenu.map((item) => {
    // console.log("final", item);
    return (
      <div>
        <img src={item.strMealThumb} />
        <h2>{item.strCategory}</h2>
      </div>
    );
  });
  // console.log("gm", menuimages);
  return (
    <div className="bb">
      <div className="po">
        {/* <Router> */}
        <div>
          <Nav />
          <Hero />
          {/* <Switch> */}
          {/* <Route exact path="/"> */}
          {/* //page1 */}
          <AllMenuContext.Provider value={setmenu}>
            {!loading ? <SpecialDishes /> : <Loader />}
            {!loading ? (
              <FilteredDishes
                allmenuscategory={FilteredDishesc}
                allmenu={setmenu}
              />
            ) : (
              <Loader />
            )}
          </AllMenuContext.Provider>
          {/* </Route>
              <Route path="/CheckOut"> */}
          {/* {/* //page2 */}
          {/* <CheckOut /> */}
          {/* </Route>
            </Switch> */}
        </div>
        {/* // </Router> */}
      </div>
    </div>
  );
}
export default Menu;
