import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useSelector } from 'react-redux';
import { selectFavourites } from '../features/favouriteSlice';

function Navbar() {
  const favouriteList = useSelector(selectFavourites)

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active ml-3">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active ml-3">
              <Link className="nav-link" to="/search">
                Search <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active ml-3">
              <Link className="nav-link" to="/favourites">
                Favourites <span className="sr-only">(current)</span>
                <small>{favouriteList.length}</small>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
