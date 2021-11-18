import React from 'react'
import Navbar from './Navbar'
import './Favourites.css'
import FavouriteItem from './FavouriteItem'

function FavouritesPage({favouriteList}) {
  return (
    <div className="favourites">
      <Navbar />
      <div className="favourites-header">
        <div className="fav-title">
          <h1>Favourite list</h1>
        </div>
      </div>

      <div className="favourites-container container">
        <div>
          {favouriteList.map(item => {
            return (
              <FavouriteItem
                key={item.id}
                id={item.id} 
                name={item.name} 
                image={item.image} 
                instructions={item.instructions} 
                video={item.video} 
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FavouritesPage
