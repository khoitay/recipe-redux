import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { selectFavourites } from "./features/favouriteSlice";
import { selectSearchValue } from "./features/searchSlice";
import FavouritesPage from "./components/FavouritesPage";
import { getRandomMeal } from "./APIcontact/mealdb";
import { filterByArea } from "./APIcontact/mealdb";
import Search from "./components/Search";
import { findMealByName } from "./APIcontact/mealdb";

function App() {
  const favouriteList = useSelector(selectFavourites);
  const searchValue = useSelector(selectSearchValue)
  const [recipes, setRecipes] = useState([])

  const [randomFood, setRandomFood] = useState({});
  const [frenchFoods, setFrenchFoods] = useState([]);
  const [chineseFoods, setChineseFoods] = useState([]);
  const [indianFoods, setIndianFoods] = useState([]);
  const [japaneseFoods, setJapaneseFoods] = useState([]);
  const [canadianFoods, setCanadianFoods] = useState([]);

  useEffect(() => {
    getRandomMeal().then((resp) => setRandomFood(resp));

    async function getData() {
      setFrenchFoods(await filterByArea("french"));
      setChineseFoods(await filterByArea("Chinese"));
      setIndianFoods(await filterByArea("indian"));
      setJapaneseFoods(await filterByArea("japanese"));
      setCanadianFoods(await filterByArea("canadian"));
    }
    getData()
  }, []);

  useEffect(() => {
    getSearchRecipes()
  }, [searchValue])

  const getSearchRecipes = async() => {
    const data = await findMealByName(searchValue)
    setRecipes(data)
  }

  console.log('Home: ', searchValue)
  console.log(recipes)

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                randomFood={randomFood}
                frenchFoods={frenchFoods}
                chineseFoods={chineseFoods}
                indianFoods={indianFoods}
                japaneseFoods={japaneseFoods}
                canadianFoods={canadianFoods}
              />
            }
          />
          <Route path="/search" element={<Search recipes={recipes} searchValue={searchValue} />} />
          <Route
            path="/detail"
            element={<Detail favouriteList={favouriteList}/>}
          />
          <Route
            path="/favourites"
            element={<FavouritesPage favouriteList={favouriteList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
