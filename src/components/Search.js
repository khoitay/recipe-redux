import React from 'react'
import Navbar from './Navbar'
import './Search.css'
import { useState } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeSearchValue } from '../features/searchSlice'

function Search({recipes, searchValue}) {
  const [recipeName, setRecipeName] = useState(searchValue)
  const dispatch = useDispatch()

  const setSearchRecipes = async(e) => {
    e.preventDefault()
    dispatch(changeSearchValue({
      value: recipeName
    }))
  }
  console.log(recipes)  

  return (
    <div className="search">
      <Navbar />
      <form>
      <div className="search-header">
        <div className="search-recipes">
          <input type="text" onChange={e => setRecipeName(e.target.value)} defaultValue={recipeName} placeholder="chicken, chocolate,..." />  
          <button type="submit" onClick={setSearchRecipes}><i className="fas fa-search"></i></button>
        </div>
      </div>
      <div className="search-showRecipes">
        {recipes === null ? "No results were found" : 
          recipes.map(item => {
            return <Link to="/detail" state={{name: `${item.strMeal}`, id: `${item.idMeal}`, image: `${item.strMealThumb}`, instructions: `${item.strInstructions}`, video: `${item.strYoutube}`}} >
              <Item 
                key={item.idMeal}
                food={item}
              />
            </Link>
          })
        }
      </div>
      </form>
    </div>
  )
}

export default Search
