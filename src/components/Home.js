import React from 'react'
import AreaFoods from './AreaFoods'
import HomeHeader from './HomeHeader'
import './Home.css'
import slogan from '../img/slogan.png'

function Home({randomFood, chineseFoods, frenchFoods, indianFoods, canadianFoods, japaneseFoods}) {
  console.log('Home: ',chineseFoods)

  return (
    <div className="home">
      <HomeHeader randomFood={randomFood} />
      <div className='home-logo'>
        <img src={slogan} alt=""/>
      </div>
      <h2 className="areaFoods-title">Japanese foods</h2>
      <AreaFoods areaFoods={japaneseFoods} />
      <h2 className="areaFoods-title">French foods</h2>
      <AreaFoods areaFoods={frenchFoods} />
      <h2 className="areaFoods-title">Canadian foods</h2>
      <AreaFoods areaFoods={canadianFoods} />
      <h2 className="areaFoods-title">Indian foods</h2>
      <AreaFoods areaFoods={indianFoods} />
    </div>
  )
}

export default Home
