import React from 'react'
import Navbar from './Navbar'
import './HomeHeader.css'
import { Link } from 'react-router-dom'
import HeaderRightItem from './HeaderRightItem'
import slogan from '../img/slogan.png'

function HomeHeader({randomFood}) {

  return (
    <div className="home-header">
      <Navbar />
      <div className="container-fluid header_container">
        <div className="row">
          <div className="headerBanner-left col-sm-12 col-md-6" style={{backgroundImage: `url("${randomFood.strMealThumb}")`}}>
            <div className="headerBanner-left-box d-flex justify-content-center align-items-center">
              <div className="border-effect">
                <span>DIPS</span>
                <h2 className="food-header border-effect-header">{randomFood.strMeal}</h2>
                <div>{randomFood.strInstructions}</div>
                <Link to="/detail" state={{id: randomFood.idMeal,name: randomFood.strMeal, image: randomFood.strMealThumb, instructions: randomFood.strInstructions, video: randomFood.strYoutube}}>
                  <span style={{marginTop: '20px'}}>More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="headerBanner-right col-sm-12 col-md-6">
            <img className="logo" src={slogan} alt="slogan" />
            <h2><span style={{color: "rgba(221, 105, 10, 0.774)"}}>WELCOME</span> to my recipe app</h2>
            <div className="headerBanner-right-foods">
              <HeaderRightItem />
              <HeaderRightItem />
              <HeaderRightItem />
              <HeaderRightItem />
              <HeaderRightItem />
              <HeaderRightItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
