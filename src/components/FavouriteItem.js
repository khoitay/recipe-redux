import React from 'react'
import './FavouriteItem.css'
import { Link } from 'react-router-dom'
import { deleteFavourite } from '../features/favouriteSlice'
import { useDispatch } from 'react-redux'

function FavouriteItem({id, name, image, instructions, video}) {
  const dispatch = useDispatch()

  const deleteFav = () => {
    dispatch(deleteFavourite({
      id: id,
    }))
  }

  return (
    <div className="favourite-item">
      <img src={image} alt="" />
      <div className="favourite-item-content">
        <h2 className="food-header favourite-item-header">{name}</h2>
  
        <p className="item-instructions">{instructions}</p>
        <Link style={{textDecoration: "none"}} to="/detail" state={{id: id,name: name, image: image, instructions: instructions, video: video}}>
          <span style={{marginTop: '20px'}}>More</span>
        </Link>
        <button className="removeFavourite-btn" onClick={deleteFav}>Remove</button>
      </div>
    </div>
  )
}

export default FavouriteItem
