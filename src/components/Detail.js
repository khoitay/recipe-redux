import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Detail.css'
import { useDispatch } from 'react-redux'
import { addFavourite, deleteFavourite } from '../features/favouriteSlice'


function Detail({favouriteList}) {
  const location = useLocation()
  const {id, name, image, instructions, video} = location.state
  const dispatch = useDispatch()

  const isFavourite = favouriteList.find(item => {
    return item.id === id
  })

  const [favourite, setFavourite] = useState(isFavourite === undefined ? true : false)

  console.log(favouriteList)

  const favouriteAction = () => {
    setFavourite(!favourite)

    if (favourite) {
      dispatch(addFavourite({
        id: id,
        name: name,
        image: image,
        instructions: instructions,
        video: video,
      }))
    } else {
      dispatch(deleteFavourite({
        id: id,
      }))
    }
  }

  const getVideo = () => {
    const find = video.indexOf('=')
    const id = video.slice(find+1)

    return `https://www.youtube.com/embed/${id}`
  }

  return (
    <div className="detail">
      <Navbar />
      <div className="container">
        <h1 className="detail-header food-header">{name}</h1>
        <div className="detail-icons">
          <div className="contact">
            <a href="https://www.facebook.com/profile.php?id=100053185775014" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://www.pinterest.com/khoitay321/_saved/" target="_blank" style={{color: "red"}}><i class="fab fa-pinterest"></i></a>
            <a href="https://www.instagram.com/khoi1.23/?hl=vi" target="_blank" style={{color: "purple"}}><i class="fab fa-instagram-square"></i></a>
          </div>
          <button className={favourite ? "like" : "red like"} onClick={favouriteAction}>
            <i class="fas fa-heart" ></i>
          </button>
        </div>
        <div className="row">
          <div className="detail-left col-sm-12 col-md-6">
            <img src={image} alt="mealImg" />
          </div>
          <div className="detail-right col-sm-12 col-md-6">
            <h2 className="food-header">Instruction:</h2>
            Link: <a href={video}>{video}</a>
            <p>{instructions}</p>
            <iframe width="100%" height="315" src={getVideo()} style={{border: 'none'}} allow="fullscreen"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
