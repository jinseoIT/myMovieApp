import React from 'react'
import { Link } from 'react-router-dom';
import "./gridcard.css";

function GridCard(props) {
  return (
    <div className="gridCard">
        <Link to={`/movieDetail/${props.movieId}`}>
        <img src={props.image} alt={props.movieName} />
        </Link>
    </div>
  )
}

export default GridCard
